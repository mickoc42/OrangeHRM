import { CandidateApplicationStageView } from './candidate_application_stage.view';
import { CandidateModel } from '@_src/models/candidate.model';
import { Locator, Page } from '@playwright/test';

export class AddCandidateView {
  firstNameInput: Locator;
  middleNameInput: Locator;
  lastNameInput: Locator;
  vacancyDropdown: Locator;
  emailInput: Locator;
  contactNumberInput: Locator;
  resumeUploadInput: Locator;
  keywordsInput: Locator;
  dateOfApplicationInput: Locator;
  notesTextarea: Locator;
  consentCheckbox: Locator;
  saveButton: Locator;
  toast: Locator;

  constructor(private page: Page) {
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.vacancyDropdown = page.locator('div.oxd-select-text-input');
    this.emailInput = page
      .locator('div')
      .filter({ hasText: /^Email$/ })
      .getByRole('textbox', { name: 'Type here' });
    this.contactNumberInput = page
      .locator('div')
      .filter({ hasText: /^Contact Number$/ })
      .getByRole('textbox', { name: 'Type here' });
    this.resumeUploadInput = page.locator('input[type="file"]');
    this.keywordsInput = page.getByPlaceholder(
      'Enter comma seperated words...'
    );
    this.dateOfApplicationInput = page.getByPlaceholder('yyyy-dd-mm');
    this.notesTextarea = page
      .locator('div')
      .filter({ hasText: /^Notes$/ })
      .getByRole('textbox', { name: 'Type here' });
    this.consentCheckbox = page.locator('.bi-check.oxd-checkbox-input-icon');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.toast = page.locator('#oxd-toaster_1 .oxd-toast');
  }

  async Add(
    addCandidate: CandidateModel
  ): Promise<CandidateApplicationStageView> {
    await this.firstNameInput.fill(addCandidate.firstName);
    await this.middleNameInput.fill(addCandidate.middleName);
    await this.lastNameInput.fill(addCandidate.lastName);
    await this.selectVacancy(addCandidate.vacancy);
    await this.emailInput.fill(addCandidate.email);
    await this.contactNumberInput.fill(addCandidate.contactNumber);
    await this.resumeUploadInput.setInputFiles(addCandidate.resumeFilePath);
    await this.keywordsInput.fill(addCandidate.keywords);
    await this.dateOfApplicationInput.fill(this.fillTodayDate());
    await this.notesTextarea.fill(addCandidate.notes);
    await this.consentCheckbox.click();
    await this.saveButton.click();
    return new CandidateApplicationStageView(this.page);
  }

  async selectVacancy(vacancy: string): Promise<void> {
    await this.vacancyDropdown.click();
    await this.page.getByRole('option', { name: vacancy }).click();
  }
  fillTodayDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${day}-${month}`;
    return formattedDate;
  }
}

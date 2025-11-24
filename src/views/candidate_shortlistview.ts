import { RecruitmentPage } from '@_src/pages/recruitment.page';
import { Locator, Page } from '@playwright/test';

export class CandidateShortListView {
  confirmShortlistButton: Locator;
  toast: Locator;

  constructor(private page: Page) {
    this.confirmShortlistButton = page.getByRole('button', { name: 'Save' });
    this.toast = page.locator('#oxd-toaster_1 .oxd-toast');
  }

  async confirmShortlist(): Promise<RecruitmentPage> {
    await this.confirmShortlistButton.click();
    return new RecruitmentPage(this.page);
  }
}

import { SideMenuComponent } from '@_src/components/side-menu.component';
import { BasePage } from '@_src/pages/base.page';
import { AddCandidateView } from '@_src/views/candidate_add.view';
import { Locator, Page } from '@playwright/test';

export class RecruitmentPage extends BasePage {
  url = '/web/index.php/recruitment/viewRecruitmentModule';
  sideMenu: SideMenuComponent;
  addCandidateButton: Locator;

  constructor(page: Page) {
    super(page);
    this.sideMenu = new SideMenuComponent(this.page);
    this.addCandidateButton = this.page.getByRole('button', {
      name: 'Add',
    });
  }

  async clickAddCandidateButton(): Promise<AddCandidateView> {
    await this.addCandidateButton.click();
    return new AddCandidateView(this.page);
  }
}

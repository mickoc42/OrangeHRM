import { DashboardPage } from '@_src/pages/dashboard.page';
import { RecruitmentPage } from '@_src/pages/recruitment.page';
import { Locator, Page } from '@playwright/test';

export class SideMenuComponent {
  dashboardButton: Locator;
  recruitmentButton: Locator;

  constructor(private page: Page) {
    this.dashboardButton = this.page.getByRole('link', { name: 'Dashboard' });
    this.recruitmentButton = this.page.getByRole('link', {
      name: 'Recruitment',
    });
  }

  async navigateToDashboardPage(): Promise<DashboardPage> {
    await this.dashboardButton.click();
    return new DashboardPage(this.page);
  }

  async navigateToRecruitmentPage(): Promise<RecruitmentPage> {
    await this.recruitmentButton.click();
    return new RecruitmentPage(this.page);
  }
}

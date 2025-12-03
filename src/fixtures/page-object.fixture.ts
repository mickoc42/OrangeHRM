import { DashboardPage } from '@_src/pages/dashboard.page';
import { LoginPage } from '@_src/pages/login.page';
import { RecruitmentPage } from '@_src/pages/recruitment.page';
import { testUser1 } from '@_src/test-data/user.data';
import { Page, test as baseTest } from '@playwright/test';

interface Pages {
  DashboardPage: DashboardPage;
  loginPage: LoginPage;
  RecruitmentPage: RecruitmentPage;
}

async function loginAsTestUser1(page: Page): Promise<DashboardPage> {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  return loginPage.login(testUser1);
}

export const PageObject = baseTest.extend<Pages>({
  DashboardPage: async ({ page }, use) => {
    const dashboardPage = await loginAsTestUser1(page);
    await use(dashboardPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  RecruitmentPage: async ({ page }, use) => {
    const dashboardPage = await loginAsTestUser1(page);
    const recruitmentPage =
      await dashboardPage.sideMenu.navigateToRecruitmentPage();
    await use(recruitmentPage);
  },
});

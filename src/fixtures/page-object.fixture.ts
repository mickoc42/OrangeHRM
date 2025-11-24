import { DashboardPage } from '@_src/pages/dashboard.page';
import { LoginPage } from '@_src/pages/login.page';
import { RecruitmentPage } from '@_src/pages/recruitment.page';
import { testUser1 } from '@_src/test-data/user.data';
import { test as baseTest, expect } from '@playwright/test';

interface Pages {
  DashboardPage: DashboardPage;
  loginPage: LoginPage;
  RecruitmentPage: RecruitmentPage;
}

export const PageObject = baseTest.extend<Pages>({
  DashboardPage: async ({ page }, use) => {
    const expectedHeading = 'Dashboard';
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const dashboardPage = await loginPage.login(testUser1);
    const heading = await dashboardPage.getHeading(expectedHeading);
    expect(heading).toContain(expectedHeading);
    await use(dashboardPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  RecruitmentPage: async ({ page }, use) => {
    const expectedHeading = 'Dashboard';
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const dashboardPage = await loginPage.login(testUser1);
    const heading = await dashboardPage.getHeading(expectedHeading);
    expect(heading).toContain(expectedHeading);
    const recruitmentPage =
      await dashboardPage.sideMenu.navigateToRecruitmentPage();
    const recruitmentHeading = await recruitmentPage.getHeading('Recruitment');
    expect(recruitmentHeading).toContain('Recruitment');
    await use(recruitmentPage);
  },
});

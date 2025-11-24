import { PageObject as test } from '@_src/fixtures/page-object.fixture';
import { expect } from '@playwright/test';

test.describe('Side Menu tests', () => {
  test(
    'Recruitment button navigates to Recruitment page',
    { tag: '@sideMenu' },
    async ({ DashboardPage }) => {
      // Arrange:
      const expectedHeading = 'Recruitment';
      // Act:
      const recruitmentPage =
        await DashboardPage.sideMenu.navigateToRecruitmentPage();
      const heading = await recruitmentPage.getHeading('Recruitment');
      // Assert:
      expect(heading).toContain(expectedHeading);
    }
  );
  test(
    'Dashboard button navigates to Dashboard page',
    { tag: '@sideMenu' },
    async ({ DashboardPage }) => {
      // Arrange:
      const expectedHeading = 'Dashboard';

      // Act:
      const recruitmentPage =
        await DashboardPage.sideMenu.navigateToRecruitmentPage();
      const dashboardPage =
        await recruitmentPage.sideMenu.navigateToDashboardPage();
      const heading = await dashboardPage.getHeading('Dashboard');
      // Assert:
      expect(heading).toContain(expectedHeading);
    }
  );
});

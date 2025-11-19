import { LoginPage } from "@_src/pages/login.page";
import { test as baseTest } from "@playwright/test";

interface Pages {
  loginPage: LoginPage;
}

export const pageObjectTest = baseTest.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

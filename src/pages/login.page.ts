import { DashboardPage } from './dashboard.page';
import { LoginUserModel } from '@_src/models/user.model';
import { BasePage } from '@_src/pages/base.page';
import { Locator, Page } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '/web/index.php/auth/login';
  usernameInput: Locator;
  userPasswordInput: Locator;
  loginButton: Locator;

  loginError = this.page.getByRole('alert');
  emptyUsernameError = this.page
    .locator('input[name="username"]')
    .locator('xpath=../..')
    .locator('.oxd-input-field-error-message');
  emptyPasswordError = this.page
    .locator('input[name="password"]')
    .locator('xpath=../..')
    .locator('.oxd-input-field-error-message');

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
    this.userPasswordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
  }

  async login(loginUserData: LoginUserModel): Promise<DashboardPage> {
    await this.usernameInput.fill(loginUserData.username);
    await this.userPasswordInput.fill(loginUserData.userPassword);
    await this.loginButton.click();

    return new DashboardPage(this.page);
  }
}

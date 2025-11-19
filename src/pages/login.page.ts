import { LoginUserModel } from "@_src/models/user.model";
import { BasePage } from "@_src/pages/base.page";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
  url = "/web/index.php/auth/login";
  usernameInput: Locator;
  userPasswordInput: Locator;
  loginButton: Locator;

  loginError = this.page.getByTestId("login-error");

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.getByRole("textbox", { name: "Username" });
    this.userPasswordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = this.page.getByRole("button", { name: "Login" });

    // this.loginError = this.page.getByTestId("login-error");
  }

  async login(loginUserData: LoginUserModel): Promise<BasePage> {
    await this.usernameInput.fill(loginUserData.username);
    await this.userPasswordInput.fill(loginUserData.userPassword);
    await this.loginButton.click();

    return new BasePage(this.page);
  }
}

import { LoginPage } from './login.page';
import { SideMenuComponent } from '@_src/components/side-menu.component';
import { BasePage } from '@_src/pages/base.page';
import { Locator, Page } from '@playwright/test';

export class DashboardPage extends BasePage {
  url = '/web/index.php/dashboard/index';
  sideMenu: SideMenuComponent;
  profileMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.sideMenu = new SideMenuComponent(this.page);
    this.profileMenu = this.page.getByAltText('Profile picture');
  }

  async logout(): Promise<LoginPage> {
    const logoutLocator = this.page.getByRole('menuitem', { name: 'Logout' });
    await this.profileMenu.click();
    await logoutLocator.click();
    const loginPage = new LoginPage(this.page);
    await loginPage.waitForPageToLoadUrl();
    return loginPage;
  }
}

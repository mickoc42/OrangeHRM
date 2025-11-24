import { SideMenuComponent } from '@_src/components/side-menu.component';
import { BasePage } from '@_src/pages/base.page';
import { Page } from '@playwright/test';

export class DashboardPage extends BasePage {
  url = '/web/index.php/dashboard/index';
  sideMenu: SideMenuComponent;

  constructor(page: Page) {
    super(page);
    this.sideMenu = new SideMenuComponent(this.page);
  }
}

import { PageObject as test } from '@_src/fixtures/page-object.fixture';
import * as Users from '@_src/test-data/user.data';
import { expect } from '@playwright/test';

test.describe('Login tests', () => {
  test(
    'Login with correct credentials',
    { tag: '@login' },
    async ({ loginPage }) => {
      // Arrange
      const expectedHeading = 'Dashboard';
      // Act
      const dashboardPage = await loginPage.login(Users.testUser1);
      const heading = await dashboardPage.getHeading(expectedHeading);
      // Assert

      expect(heading).toContain(expectedHeading);
    }
  );

  test(
    'Login with incorrect credentials',
    { tag: '@login' },
    async ({ loginPage }) => {
      // Arrange
      const expectedLoginError = 'Invalid credentials';
      // Act
      await loginPage.login(Users.incorrectCredentialsUser);
      const loginError = await loginPage.loginError.textContent();
      // Assert

      expect(loginError).toContain(expectedLoginError);
    }
  );

  test(
    'Login with empty username',
    { tag: '@login' },
    async ({ loginPage }) => {
      // Arrange
      const expectedLoginError = 'Required';
      // Act
      await loginPage.login(Users.emptyUsernameUser);
      const loginError = await loginPage.emptyUsernameError.textContent();
      // Assert

      expect(loginError).toContain(expectedLoginError);
    }
  );

  test(
    'Login with empty password',
    { tag: '@login' },
    async ({ loginPage }) => {
      // Arrange
      const expectedLoginError = 'Required';
      // Act
      await loginPage.login(Users.emptyPasswordUser);
      const loginError = await loginPage.emptyPasswordError.textContent();
      // Assert
      expect(loginError).toContain(expectedLoginError);
    }
  );

  test(
    'Login with empty credentials',
    { tag: '@login' },
    async ({ loginPage }) => {
      // Arrange
      const expectedLoginError = 'Required';
      // Act
      await loginPage.login(Users.emptyUser);
      const loginErrorUsername =
        await loginPage.emptyUsernameError.textContent();
      const loginErrorPassword =
        await loginPage.emptyPasswordError.textContent();
      // Assert
      expect.soft(loginErrorUsername).toContain(expectedLoginError);
      expect.soft(loginErrorPassword).toContain(expectedLoginError);
    }
  );
});

import { pageObjectTest as test } from "@_src/fixtures/page-object.fixture";
import { testUser1 } from "@_src/test-data/user.data";
import { expect } from "@playwright/test";

test.describe("Login Test", () => {
  test("Login with correct credentials", async ({ loginPage }) => {
    // Arrange
    const expectedWelcomeTitle = "Dashboard";
    // Act
    const basedPage = await loginPage.login(testUser1);

    // Assert
    expect(basedPage).toContain(expectedWelcomeTitle);
  });
});

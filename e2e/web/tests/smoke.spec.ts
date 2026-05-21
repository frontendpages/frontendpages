import { expect, test } from "@playwright/test";

test.describe("web smoke", () => {
  test("renders the landing page", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Frontend Pages/);
  });
});

import { test, expect } from '@playwright/test';
import { ROUTES } from './routes';

// Next.js merges metadata shallowly; guard against a page dropping the shared share-card fields.
for (const path of ROUTES) {
  test(`${path} has a complete share card`, async ({ page }) => {
    await page.goto(path);
    for (const prop of ['og:title', 'og:description', 'og:type', 'og:site_name', 'og:locale', 'og:image']) {
      await expect(page.locator(`meta[property="${prop}"]`), prop).toHaveAttribute('content', /\S/);
    }
    await expect(page).toHaveTitle(/Jack Shields/);
  });
}

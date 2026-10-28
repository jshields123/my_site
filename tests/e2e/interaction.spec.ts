import { test, expect } from '@playwright/test';
import { ROUTES } from './routes';

test('split hero is keyboard operable', async ({ page }) => {
  await page.goto('/');
  const slider = page.getByRole('slider', { name: /builder and breaker/i });
  await expect(slider).toHaveAttribute('aria-valuetext', /Builder leads/);
  await slider.focus();
  for (let i = 0; i < 10; i++) await page.keyboard.press('ArrowLeft');
  await expect(page.locator('section[data-lead]')).toHaveAttribute('data-lead', 'break');
  await expect(slider).toHaveAttribute('aria-valuetext', /Breaker leads, 4\d%/);
});

test('track pages cross-link to each other', async ({ page }) => {
  await page.goto('/engineer');
  await page.getByRole('link', { name: /see the security side/i }).click();
  await expect(page).toHaveURL(/\/security$/);
  await expect(page.locator('h1')).toContainText('Now I break');
});

test('experience accordion works without JavaScript', async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto('/engineer');
  const second = page.locator('details').nth(1);
  await expect(second).not.toHaveAttribute('open');
  await second.locator('summary').click();
  await expect(second).toHaveAttribute('open', '');
  await ctx.close();
});

for (const path of ROUTES) {
  test(`${path} never scrolls horizontally`, async ({ page }) => {
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

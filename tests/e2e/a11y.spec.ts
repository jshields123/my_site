import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { ROUTES } from './routes';

for (const path of ROUTES) {
  test(`${path} has no axe violations`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
  });
}

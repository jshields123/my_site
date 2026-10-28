import { test, expect } from '@playwright/test';
import { ROUTES } from './routes';

for (const path of ROUTES) {
  test.describe(path, () => {
    test('sends a strict CSP with a fresh nonce per request', async ({ request }) => {
      const [a, b] = await Promise.all([request.get(path), request.get(path)]);
      const csp = a.headers()['content-security-policy'] ?? '';
      expect(csp).toBeTruthy();
      expect(csp).not.toContain('unsafe-inline');
      expect(csp).not.toContain('unsafe-eval');
      expect(csp).toContain("object-src 'none'");
      expect(csp).toContain("frame-ancestors 'none'");
      expect(csp).toContain("base-uri 'none'");
      const nonce = (h: string | undefined) => h?.match(/'nonce-([^']+)'/)?.[1];
      expect(nonce(csp)).toBeTruthy();
      expect(nonce(csp)).not.toBe(nonce(b.headers()['content-security-policy']));
    });

    test('sends hardened security headers', async ({ request }) => {
      const h = (await request.get(path)).headers();
      expect(h['strict-transport-security']).toContain('max-age=63072000');
      expect(h['x-content-type-options']).toBe('nosniff');
      expect(h['x-frame-options']).toBe('DENY');
      expect(h['cross-origin-opener-policy']).toBe('same-origin');
      expect(h['referrer-policy']).toBe('strict-origin-when-cross-origin');
      expect(h['permissions-policy']).toContain('camera=()');
      expect(h['x-powered-by']).toBeUndefined();
    });

    test('renders with zero CSP violations or console errors', async ({ page }) => {
      const problems: string[] = [];
      page.on('console', (m) => { if (m.type() === 'error') problems.push(m.text()); });
      page.on('pageerror', (e) => problems.push(e.message));
      await page.addInitScript(() => {
        document.addEventListener('securitypolicyviolation', (e) =>
          console.error(`CSP violation: ${e.violatedDirective} ${e.blockedURI}`));
      });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      await expect(page.locator('h1')).toHaveCount(1);
      expect(problems).toEqual([]);
    });
  });
}

test('security.txt is served and in date', async ({ request }) => {
  const res = await request.get('/.well-known/security.txt');
  expect(res.ok()).toBe(true);
  const body = await res.text();
  expect(body).toContain('Contact: mailto:');
  const expires = new Date(body.match(/Expires: (.+)/)?.[1] ?? 0);
  expect(expires.getTime()).toBeGreaterThan(Date.now());
});

test.describe('Fetch Metadata isolation', () => {
  test('refuses cross-site subresource requests', async ({ request }) => {
    const res = await request.get('/', { headers: { 'Sec-Fetch-Site': 'cross-site', 'Sec-Fetch-Mode': 'no-cors', 'Sec-Fetch-Dest': 'script' } });
    expect(res.status()).toBe(403);
  });

  test('allows a cross-site link click', async ({ request }) => {
    const res = await request.get('/engineer', { headers: { 'Sec-Fetch-Site': 'cross-site', 'Sec-Fetch-Mode': 'navigate', 'Sec-Fetch-Dest': 'document' } });
    expect(res.status()).toBe(200);
  });
});

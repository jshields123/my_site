import { describe, expect, it } from 'vitest';
import { buildCsp, createNonce } from '../../lib/csp';
import { SECURITY_HEADERS } from '../../lib/headers';

describe('buildCsp', () => {
  it('is strict in production', () => {
    const csp = buildCsp({ nonce: 'abc' });
    expect(csp).toContain("script-src 'self' 'nonce-abc' 'strict-dynamic'");
    expect(csp).not.toMatch(/unsafe-(inline|eval)/);
    expect(csp).toContain("base-uri 'none'");
    expect(csp).toContain('upgrade-insecure-requests');
  });

  it('only relaxes eval in development', () => {
    const csp = buildCsp({ nonce: 'abc', isDev: true });
    expect(csp).toContain("'unsafe-eval'");
    expect(csp).not.toContain('unsafe-inline');
    expect(csp).not.toContain('upgrade-insecure-requests');
  });

  it('allows no third-party origins', () => {
    expect(buildCsp({ nonce: 'abc' })).not.toMatch(/https?:\/\//);
  });
});

describe('createNonce', () => {
  it('produces 128-bit, unique, base64 values', () => {
    const seen = new Set(Array.from({ length: 1000 }, createNonce));
    expect(seen.size).toBe(1000);
    for (const n of seen) expect(atob(n)).toHaveLength(16);
  });
});

describe('SECURITY_HEADERS', () => {
  it('has no duplicate keys', () => {
    const keys = SECURITY_HEADERS.map((h) => h.key.toLowerCase());
    expect(new Set(keys).size).toBe(keys.length);
  });
});

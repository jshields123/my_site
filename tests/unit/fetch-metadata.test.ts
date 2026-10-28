import { describe, expect, it } from 'vitest';
import { allowedByFetchMetadata } from '../../lib/fetch-metadata';

const req = (h: Record<string, string>, method = 'GET') => allowedByFetchMetadata(method, new Headers(h));

describe('allowedByFetchMetadata', () => {
  it('allows requests without Fetch Metadata (old browsers, crawlers, curl)', () => {
    expect(req({})).toBe(true);
  });

  it('allows same-origin, same-site and user-initiated requests', () => {
    for (const site of ['same-origin', 'same-site', 'none']) expect(req({ 'sec-fetch-site': site })).toBe(true);
  });

  it('allows cross-site top-level navigations, e.g. a link from LinkedIn', () => {
    expect(req({ 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document' })).toBe(true);
  });

  it('blocks cross-site subresource and script requests', () => {
    expect(req({ 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'no-cors', 'sec-fetch-dest': 'image' })).toBe(false);
    expect(req({ 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty' })).toBe(false);
  });

  it('blocks cross-site navigations that are not GET, or that embed the page', () => {
    expect(req({ 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document' }, 'POST')).toBe(false);
    expect(req({ 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'object' })).toBe(false);
  });
});

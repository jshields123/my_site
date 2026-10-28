// Fetch Metadata resource isolation (https://web.dev/articles/fetch-metadata).
// Browsers label each request with where it came from. Cross-site requests are refused
// unless they are a plain top-level navigation, which shuts down CSRF-style requests and
// cross-site embedding. Requests without the headers (older browsers, crawlers, curl) pass.
export function allowedByFetchMetadata(method: string, headers: Headers): boolean {
  const site = headers.get('sec-fetch-site');
  if (!site || site === 'same-origin' || site === 'same-site' || site === 'none') return true;

  const mode = headers.get('sec-fetch-mode');
  const dest = headers.get('sec-fetch-dest');
  const isNavigation = mode === 'navigate' && (method === 'GET' || method === 'HEAD');
  return isNavigation && dest !== 'object' && dest !== 'embed';
}

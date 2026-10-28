export interface CspOptions {
  nonce: string;
  isDev?: boolean;
}

// Strict, nonce-based policy. No 'unsafe-inline', no 'unsafe-eval' in production,
// no third-party origins: fonts, analytics and assets are all first-party.
export function buildCsp({ nonce, isDev = false }: CspOptions): string {
  const directives: Record<string, string[]> = {
    'default-src': ["'self'"],
    'script-src': ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'", ...(isDev ? ["'unsafe-eval'"] : [])],
    'style-src': ["'self'", `'nonce-${nonce}'`],
    'img-src': ["'self'", 'data:'],
    'font-src': ["'self'"],
    'connect-src': ["'self'"],
    'object-src': ["'none'"],
    'base-uri': ["'none'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'manifest-src': ["'self'"],
    'worker-src': ["'none'"],
  };
  const policy = Object.entries(directives).map(([k, v]) => `${k} ${v.join(' ')}`);
  if (!isDev) {
    policy.push('upgrade-insecure-requests');
    // Trusted Types is deliberately NOT enforced: the Next.js 16 / Turbopack runtime assigns
    // raw strings to innerHTML and script.src, so enforcement breaks hydration. A pass-through
    // default policy would only fake the control. Revisit when the framework supports it.
  }
  return policy.join('; ');
}

export function createNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

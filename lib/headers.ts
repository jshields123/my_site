// Static security headers applied to every response (CSP is per-request, see proxy.ts).
export const SECURITY_HEADERS = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
  { key: 'X-DNS-Prefetch-Control', value: 'off' },
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()', 'autoplay=()', 'browsing-topics=()', 'camera=()', 'display-capture=()',
      'geolocation=()', 'gyroscope=()', 'magnetometer=()', 'microphone=()', 'payment=()',
      'publickey-credentials-get=()', 'usb=()', 'interest-cohort=()',
    ].join(', '),
  },
] as const;

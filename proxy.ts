import { NextResponse, type NextRequest } from 'next/server';
import { buildCsp, createNonce } from './lib/csp';
import { allowedByFetchMetadata } from './lib/fetch-metadata';

export function proxy(request: NextRequest) {
  if (!allowedByFetchMetadata(request.method, request.headers)) {
    return new NextResponse('Cross-site request blocked', { status: 403, headers: { 'Vary': 'Sec-Fetch-Site, Sec-Fetch-Mode, Sec-Fetch-Dest' } });
  }

  const nonce = createNonce();
  const csp = buildCsp({ nonce, isDev: process.env.NODE_ENV === 'development' });

  // Next.js reads the nonce from the request CSP header and applies it to its own scripts.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Security-Policy', csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico|icon.svg|images/|.well-known/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

# jackshields.pro

Personal site with three entry points from one codebase:

| Route | For |
|---|---|
| `/` | Split hub: builder and breaker |
| `/engineer` | Software engineering roles |
| `/security` | Penetration testing roles |
| `/how-its-built` | Architecture, security controls and CI |

All copy lives in `content/profile.ts`. Each fact is written once and framed per track.

## Security model

- Per-request CSP nonce (`proxy.ts`, `lib/csp.ts`): no `unsafe-inline`, no `unsafe-eval`, no third-party origins.
- Static hardening headers (`lib/headers.ts`): HSTS preload, COOP/COEP/CORP, a locked-down Permissions-Policy.
- No database, auth or CMS, and only four runtime dependencies, all exact-pinned.
- `/.well-known/security.txt` (RFC 9116).
- Trusted Types is **not** enforced, because the Next.js 16 runtime is incompatible (see `lib/csp.ts`).

## Develop

```bash
nvm use          # Node 24
npm ci
npm run dev
```

## Verify

```bash
npm run typecheck && npm run lint && npm test
npm run build && npm run e2e     # Playwright: headers, CSP, axe a11y, interactions
```

CI (`.github/workflows`) also runs `npm audit`, CodeQL, gitleaks and an OWASP ZAP baseline scan against a production build.

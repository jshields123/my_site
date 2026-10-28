import type { Metadata, Viewport } from 'next';
import { PERSON } from '@/content/profile';
import { buildCsp } from '@/lib/csp';
import { SECURITY_HEADERS } from '@/lib/headers';
import { TopBar } from '../components/TopBar/TopBar';
import { SectionHead } from '../components/SectionHead/SectionHead';
import { Contact } from '../components/Contact/Contact';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How it’s built',
  description: 'The architecture, security controls and CI pipeline behind jackshields.pro.',
  alternates: { canonical: '/how-its-built' },
};

export const viewport: Viewport = { themeColor: '#0b0b0c' };

const DECISIONS = [
  { k: 'No database, no auth, no CMS', v: 'Content lives in typed TypeScript files. Leaving out a backend removes most of the attack surface.' },
  { k: 'Per-request CSP nonce', v: 'A proxy issues a fresh random nonce for every request. Scripts only run if they carry it, with no unsafe-inline and no unsafe-eval.' },
  { k: 'Trusted Types: not yet', v: 'I tried enforcing it, but the Next.js 16 runtime writes raw strings to innerHTML and breaks hydration. A pass-through policy would only fake the control, so it stays off and is documented here until the framework supports it.' },
  { k: 'Fetch Metadata isolation', v: 'Cross-site requests that are not plain page visits get a 403, using the Sec-Fetch-* headers browsers attach. That stops CSRF-style requests and embedding from other sites.' },
  { k: 'Zero third-party origins', v: 'Fonts are self-hosted at build time and analytics is first-party and cookieless, so the policy allows nothing off-site.' },
  { k: 'Near-zero client JS', v: 'Accordions use native <details>, scroll reveals use CSS scroll-driven animations, and only the split hero hydrates.' },
  { k: 'Minimal dependencies', v: 'Four runtime packages, exact-pinned, with installs locked by npm ci.' },
];

const PIPELINE = [
  ['typecheck', 'TypeScript in strict mode'],
  ['lint', 'ESLint with the Next.js rules'],
  ['unit', 'Vitest: CSP builder, header config and content integrity'],
  ['e2e', 'Playwright: every route renders and every security header is present and correct'],
  ['a11y', 'axe-core on every route, zero violations allowed'],
  ['audit', 'npm audit, which fails on high-severity advisories'],
  ['codeql', 'GitHub CodeQL static analysis'],
  ['secrets', 'gitleaks scan of the full history'],
  ['dast', 'OWASP ZAP baseline scan against a production build, warnings fail the build'],
];

export default function HowItsBuilt() {
  const csp = buildCsp({ nonce: '{per-request}' }).split('; ');
  return (
    <div data-theme="dark">
      <TopBar current="/how-its-built" />
      <main id="main" className="wrap">
        <header className={styles.intro}>
          <p className={styles.kick}>jackshields.pro / colophon</p>
          <h1 className={styles.title}>A portfolio that security-tests <em>itself.</em></h1>
          <p className={styles.lede}>Every change runs through type checks, accessibility checks and an OWASP ZAP scan before it can ship. Here&apos;s what&apos;s in place and why.</p>
        </header>

        <section className={styles.section} aria-labelledby="decisions">
          <SectionHead index="01" label="Architecture" title="Decisions that shrink the surface." id="decisions" />
          <dl className={`${styles.grid} reveal`}>
            {DECISIONS.map((d) => <div key={d.k}><dt>{d.k}</dt><dd>{d.v}</dd></div>)}
          </dl>
        </section>

        <section className={styles.section} aria-labelledby="headers">
          <SectionHead index="02" label="Response headers" title="What every response carries." id="headers" />
          <div className={`${styles.code} reveal`}>
            <p className={styles.codeTitle}>Content-Security-Policy</p>
            <pre tabIndex={0} aria-label="Content-Security-Policy value">{csp.join(';\n')}</pre>
          </div>
          <div className={`${styles.code} reveal`}>
            <p className={styles.codeTitle}>Other security headers</p>
            <pre tabIndex={0} aria-label="Security header values">{SECURITY_HEADERS.map((h) => `${h.key}: ${h.value}`).join('\n')}</pre>
          </div>
          <p className={styles.note}>This page renders the live config from the same source files the server uses, so it can&apos;t drift from reality. You can check it with <code>curl -sI {PERSON.siteUrl}</code>.</p>
        </section>

        <section className={styles.section} aria-labelledby="pipeline">
          <SectionHead index="03" label="CI pipeline" title="Nothing merges until this passes." id="pipeline" />
          <ol className={`${styles.pipeline} reveal`}>
            {PIPELINE.map(([k, v]) => <li key={k}><span>{k}</span><span>{v}</span></li>)}
          </ol>
          <p className={styles.note}>GitHub Actions are pinned to full commit SHAs, Renovate keeps dependencies current, and the source is public on <a href={PERSON.links.github}>GitHub</a>.</p>
        </section>

        <section className={styles.section} aria-labelledby="disclosure">
          <SectionHead index="04" label="Disclosure" title="Found something? Tell me." id="disclosure" />
          <div className={`${styles.disclosure} reveal`}>
            <p>Good-faith research is welcome. Please don&apos;t run denial-of-service or automated volume testing, and report findings to <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>. Valid reports get credited here with your permission.</p>
            <p>The machine-readable version is at <a href="/.well-known/security.txt">/.well-known/security.txt</a> (RFC 9116).</p>
          </div>
        </section>
      </main>
      <Contact />
    </div>
  );
}

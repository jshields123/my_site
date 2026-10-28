import Link from 'next/link';
import styles from './TopBar.module.css';

const LINKS = [
  { href: '/engineer', label: 'Engineer' },
  { href: '/security', label: 'Security' },
  { href: '/how-its-built', label: 'How it’s built' },
];

export function TopBar({ current, overlay = false }: { current?: string; overlay?: boolean }) {
  return (
    <header className={`${styles.bar} ${overlay ? styles.overlay : ''}`}>
      <Link href="/" className={styles.brand} aria-current={current === '/' ? 'page' : undefined}>Jack Shields</Link>
      <nav aria-label="Primary">
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={current === l.href ? 'page' : undefined}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

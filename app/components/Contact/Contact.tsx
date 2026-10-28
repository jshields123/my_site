import Link from 'next/link';
import { PERSON, TRACKS, type Track } from '@/content/profile';
import styles from './Contact.module.css';

const CTA: Record<Track | 'hub', [string, string]> = {
  engineer: ['Let’s build', 'something.'],
  security: ['Got something', 'to test?'],
  hub: ['Build it or', 'break it.'],
};

export function Contact({ track }: { track?: Track }) {
  const [a, b] = CTA[track ?? 'hub'];
  const other = track === 'engineer' ? 'security' : track === 'security' ? 'engineer' : undefined;
  return (
    <footer className={styles.footer}>
      {other && (
        <Link href={TRACKS[other].path} className={`${styles.cross} reveal`}>
          <span>{TRACKS[track!].crossLink}</span>
          <span className={styles.crossCta}>See the {other === 'security' ? 'security' : 'engineering'} side →</span>
        </Link>
      )}
      <a className={styles.cta} href={`mailto:${PERSON.email}`}>
        {a}<br /><em>{b}</em>
      </a>
      <div className={styles.bar}>
        <span>© {new Date().getFullYear()} {PERSON.name}</span>
        <ul>
          <li><a href={`mailto:${PERSON.email}`}>Email</a></li>
          <li><a href={PERSON.links.github} rel="me noopener noreferrer" target="_blank">GitHub</a></li>
          <li><a href={PERSON.links.linkedin} rel="me noopener noreferrer" target="_blank">LinkedIn</a></li>
          <li><a href={PERSON.links.tryhackme} rel="me noopener noreferrer" target="_blank">TryHackMe</a></li>
          <li><Link href="/how-its-built">How it&apos;s built</Link></li>
        </ul>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { TRACKS } from '@/content/profile';
import styles from './TrackCards.module.css';

export function TrackCards() {
  return (
    <ul className={styles.cards}>
      <li className={`${styles.card} ${styles.engineer} reveal`}>
        <Link href={TRACKS.engineer.path}>
          <span className={styles.k}>01 / For engineering teams</span>
          <span className={styles.t}>The engineer →</span>
          <span className={styles.d}>Full-stack delivery: infra, APIs and front end, five years in production.</span>
        </Link>
      </li>
      <li className={`${styles.card} ${styles.security} reveal`}>
        <Link href={TRACKS.security.path}>
          <span className={styles.k}>02 / For security teams</span>
          <span className={styles.t}>The pen tester →</span>
          <span className={styles.d}>eWPT, eJPT and web app testing, from someone who has built what you&apos;re testing.</span>
        </Link>
      </li>
    </ul>
  );
}

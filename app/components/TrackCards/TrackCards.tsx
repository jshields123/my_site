import Link from 'next/link';
import { TRACKS } from '@/content/profile';
import styles from './TrackCards.module.css';

export function TrackCards() {
  return (
    <ul className={styles.cards}>
      {(['engineer', 'security'] as const).map((track, i) => {
        const t = TRACKS[track];
        return (
          <li key={track} className={`${styles.card} ${styles[track]} reveal`}>
            <Link href={t.path}>
              <span className={styles.k}>{String(i + 1).padStart(2, '0')} / {t.cardKicker}</span>
              <span className={styles.t}>{t.cardTitle} →</span>
              <span className={styles.d}>{t.cardBody}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

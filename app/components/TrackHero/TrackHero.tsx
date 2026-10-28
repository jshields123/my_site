import { PERSON, TRACKS, type Track } from '@/content/profile';
import styles from './TrackHero.module.css';

export function TrackHero({ track }: { track: Track }) {
  const t = TRACKS[track];
  const [a, b, c] = t.headline;
  const accent = track === 'engineer' ? 'whole' : 'break';
  const mark = (line: string) => {
    const i = line.indexOf(accent);
    if (i < 0) return line;
    return <>{line.slice(0, i)}<em>{accent}</em>{line.slice(i + accent.length)}</>;
  };
  return (
    <section className={`${styles.hero} ${styles[track]}`}>
      <h1 className={styles.title}>
        {[a, b, c].map((line, i) => (
          <span key={i} className={styles.mask}><span>{mark(line)}</span></span>
        ))}
      </h1>
      <div className={styles.row}>
        <p className={styles.lede}>{t.lede}</p>
        <ul className={styles.meta}>
          <li><span className={styles.dot} aria-hidden="true" /><b>Available</b> for {t.role.toLowerCase()} roles</li>
          <li>{PERSON.location}</li>
          <li><a href={`mailto:${PERSON.email}`}>{PERSON.email}</a></li>
        </ul>
      </div>
    </section>
  );
}

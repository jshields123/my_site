import { ROLES, type Track } from '@/content/profile';
import styles from './Experience.module.css';

// Native <details> gives an accessible accordion with no client JavaScript.
export function Experience({ track }: { track: Track }) {
  return (
    <ol className={`${styles.list} reveal`}>
      {ROLES.map((r, i) => (
        <li key={r.company}>
          <details className={styles.role} open={i === 0}>
            <summary>
              <span className={styles.dates}>{r.dates}</span>
              <span className={styles.title}>{r.title}</span>
              <span className={styles.company}>{r.company}</span>
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <div className={styles.body}>
              <p>{r.summary[track]}</p>
              <ul className={styles.tags} aria-label="Stack">
                {r.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

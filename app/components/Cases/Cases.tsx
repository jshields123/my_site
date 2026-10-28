import { CASES } from '@/content/profile';
import styles from './Cases.module.css';

type Lean = 'build' | 'break' | 'even';

export function Cases({ lean = 'even' }: { lean?: Lean }) {
  return (
    <ul className={`${styles.cases} ${styles[lean]}`}>
      {CASES.map((c) => (
        <li key={c.title} className={`${styles.case} reveal`}>
          <div className={styles.built}>
            <div><span className={styles.tag}>Built</span><h3>{c.title}</h3></div>
            {c.metric && <p className={styles.metric}>{c.metric}</p>}
            <p>{c.built}</p>
          </div>
          <div className={styles.hardened}>
            <div><span className={styles.tag}>Hardened</span><h3>{c.hardenedTitle}</h3></div>
            <p>{c.hardened}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

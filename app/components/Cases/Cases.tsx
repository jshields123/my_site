import { CASES, CASE_ORDER, type Track } from '@/content/profile';
import styles from './Cases.module.css';

type Lean = 'build' | 'break' | 'even';

// Syne draws "~" like a minus, so "~20" would read as "-20". Set the tilde in the text face.
function Metric({ value }: { value: string }) {
  if (!value.startsWith('~')) return <>{value}</>;
  return <><span className={styles.approx} aria-hidden="true">~</span><span className="sr-only">about </span>{value.slice(1)}</>;
}

export function Cases({ page, lean = 'even' }: { page: Track | 'hub'; lean?: Lean }) {
  const cases = CASE_ORDER[page].map((id) => CASES.find((c) => c.id === id)!);
  return (
    <ul className={`${styles.cases} ${styles[lean]}`}>
      {cases.map((c) => {
        const [builtLabel, hardenedLabel] = c.labels ?? ['Built', 'Hardened'];
        return (
          <li key={c.id} className={`${styles.case} ${c.hardened ? '' : styles.single} reveal`}>
            <div className={styles.built}>
              <div><span className={styles.tag}>{builtLabel}</span><h3>{c.title}</h3></div>
              {c.metric && <p className={styles.metric}><Metric value={c.metric} /></p>}
              <p>{c.built}</p>
            </div>
            {c.hardened && (
              <div className={styles.hardened}>
                <div><span className={styles.tag}>{hardenedLabel}</span><h3>{c.hardenedTitle}</h3></div>
                <p>{c.hardened}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

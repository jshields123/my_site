import { TOOLKIT, type Track } from '@/content/profile';
import styles from './Toolkit.module.css';

export function Toolkit({ track }: { track: Track }) {
  return (
    <div className={`${styles.grid} reveal`}>
      {TOOLKIT[track].map((g) => (
        <div key={g.group} className={styles.group}>
          <h3>{g.group}</h3>
          <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

import { METHOD } from '@/content/profile';
import styles from './Method.module.css';

export function Method() {
  return (
    <ol className={`${styles.method} reveal`}>
      {METHOD.map((m) => (
        <li key={m.step}>
          <span className={styles.step}>{m.step} / {m.label}</span>
          <h3>{m.title}</h3>
          <p>{m.body}</p>
        </li>
      ))}
    </ol>
  );
}

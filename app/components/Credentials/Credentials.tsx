import { CERTS, EDUCATION } from '@/content/profile';
import styles from './Credentials.module.css';

export function Credentials() {
  return (
    <div className="reveal">
      <ul className={styles.certs}>
        {CERTS.map((c) => (
          <li key={c.badge} className={styles.cert}>
            <span className={styles.issuer}>{c.issuer}</span>
            <div><p className={styles.badge}>{c.badge}</p><p className={styles.name}>{c.title}</p></div>
          </li>
        ))}
      </ul>
      <ul className={styles.edu}>
        {EDUCATION.map((e) => (
          <li key={e.badge}><span>{e.title}</span><span>{e.issuer}</span></li>
        ))}
      </ul>
    </div>
  );
}

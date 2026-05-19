import styles from './Credentials.module.css';
import { CERTS, EDUCATION } from './Credentials.constants';

const Credentials = () => {
  return (
    <section id="credentials" className={styles.credentials}>
      <div className={styles.inner}>
        <h2 className={styles.label}>Credentials</h2>
        <div className={styles.groups}>
          <div>
            <h3 className={styles.groupTitle}>Certifications</h3>
            <ul className={styles.list}>
              {CERTS.map((c) => (
                <li key={c.title} className={styles.item}>
                  <span className={styles.badge}>{c.badge}</span>
                  <div>
                    <p className={styles.itemTitle}>{c.title}</p>
                    <p className={styles.itemMeta}>{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.groupTitle}>Education</h3>
            <ul className={styles.list}>
              {EDUCATION.map((c) => (
                <li key={c.title} className={styles.item}>
                  <span className={styles.badge}>{c.badge}</span>
                  <div>
                    <p className={styles.itemTitle}>{c.title}</p>
                    <p className={styles.itemMeta}>{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Credentials };

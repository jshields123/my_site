import styles from './Experience.module.css';
import { EXPERIENCE } from './Experience.constants';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.inner}>
        <h2 className={styles.label}>Experience</h2>
        <ol className={styles.list}>
          {EXPERIENCE.map((role) => (
            <li key={role.company + role.dates} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.role}>{role.role}</h3>
                  <p className={styles.company}>{role.company}</p>
                </div>
                <span className={styles.dates}>{role.dates}</span>
              </div>
              <p className={styles.description}>{role.description}</p>
              {role.tags && (
                <div className={styles.tags}>
                  {role.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { Experience };

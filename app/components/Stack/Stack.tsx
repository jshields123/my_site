import styles from './Stack.module.css';
import { STACK_GROUPS } from './Stack.constants';

const Stack = () => {
  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.inner}>
        <h2 className={styles.label}>Stack</h2>
        <div className={styles.groups}>
          {STACK_GROUPS.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.pills}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stack };

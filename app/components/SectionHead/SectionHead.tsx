import styles from './SectionHead.module.css';

export function SectionHead({ index, label, title, id }: { index: string; label: string; title: string; id?: string }) {
  return (
    <div className={`${styles.head} reveal`}>
      <span className={styles.num}>({index}) {label}</span>
      <h2 id={id} className={styles.title}>{title}</h2>
    </div>
  );
}

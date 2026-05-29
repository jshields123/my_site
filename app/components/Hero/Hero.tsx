import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <span className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          Available for new opportunities
        </span>
        <h1 className={styles.title}>
          Senior Software Engineer
          <span className={styles.titleMuted}> building with security in mind.</span>
        </h1>
        <p className={styles.subtitle}>
          Full-stack engineer shipping end-to-end products — infrastructure, APIs, and front-end.
          Currently the sole developer across a multi-brand platform for blue-chip consumer brands.
        </p>
        <div className={styles.ctas}>
          <a href="mailto:jackcyberpro30@gmail.com" className={styles.ctaPrimary}>
            Get in touch
          </a>
          <a
            href="https://github.com/jshields123"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            View GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Hero };

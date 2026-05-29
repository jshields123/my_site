import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.label}>About</h2>
        <div className={styles.body}>
          <div className={styles.bodyText}>
            <p>
              Senior full-stack engineer building with security in mind. Currently the sole
              developer across a multi-brand technology platform — independently scoping,
              building, and shipping high-impact projects for blue-chip consumer brands.
            </p>
            <p>
              Certified in eWPT and eJPT alongside Harvard&apos;s CS50 Cybersecurity, with
              practical experience across the offensive security toolset. A developer
              perspective that goes beyond writing features to understanding how web
              applications actually get broken.
            </p>
            <p>
              Comfortable owning the full product lifecycle — infrastructure, DevOps, API
              design, front-end delivery — moving across the stack and across shifting
              priorities without losing momentum. Background spans product engineering at
              scale, early-stage startup development, and commercial consulting.
            </p>
            <p>
              Sets up the CI/CD, writes the API, ships the front end, audits the server,
              and keeps everything running — often all in the same week.
            </p>
          </div>
          <Image
            src="/images/jack.jpg"
            alt="Jack Shields"
            width={128}
            height={128}
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
};

export { About };

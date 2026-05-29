import styles from './Footer.module.css';
import GitHubIcon from '../Icons/GitHubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {new Date().getFullYear()} Jack Shields. Built with Next.js.</p>
        <div className={styles.links}>
          <a
            href="https://github.com/jshields123"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jackshields123/"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a href="mailto:jackcyberpro30@gmail.com" className={styles.email}>
            jackcyberpro30@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

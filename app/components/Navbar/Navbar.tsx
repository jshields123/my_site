import styles from './Navbar.module.css';
import { NAV_LINKS } from './Navbar.constants';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#" className={styles.brand}>
          Jack Shields
        </a>
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:jackshields@live.co.uk" className={styles.cta}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export { Navbar };

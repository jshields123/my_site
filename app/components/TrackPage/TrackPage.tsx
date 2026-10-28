import { TRACKS, type Track } from '@/content/profile';
import { TopBar } from '../TopBar/TopBar';
import { TrackHero } from '../TrackHero/TrackHero';
import { SectionHead } from '../SectionHead/SectionHead';
import { Cases } from '../Cases/Cases';
import { Experience } from '../Experience/Experience';
import { Toolkit } from '../Toolkit/Toolkit';
import { Method } from '../Method/Method';
import { Credentials } from '../Credentials/Credentials';
import { Contact } from '../Contact/Contact';
import styles from './TrackPage.module.css';

export function TrackPage({ track }: { track: Track }) {
  const t = TRACKS[track];
  const sec = track === 'security';
  // Security leads with credentials and method; engineering leads with shipped work.
  const sections = sec
    ? [
        { key: 'credentials', label: 'Credentials', title: 'Certified to test.', node: <Credentials /> },
        { key: 'method', label: 'Method', title: 'How I test.', node: <Method /> },
        { key: 'work', label: 'Both sides', title: 'Every system I built, I had to defend.', node: <Cases lean="break" /> },
        { key: 'experience', label: 'Field background', title: 'Systems I’ve seen from the inside.', node: <Experience track={track} /> },
        { key: 'toolkit', label: 'Toolkit', title: 'The kit.', node: <Toolkit track={track} /> },
      ]
    : [
        { key: 'work', label: 'Selected work', title: 'Built to ship. Hardened by habit.', node: <Cases lean="build" /> },
        { key: 'experience', label: 'Experience', title: 'Where I’ve shipped.', node: <Experience track={track} /> },
        { key: 'toolkit', label: 'Stack', title: 'The stack.', node: <Toolkit track={track} /> },
        { key: 'credentials', label: 'Credentials', title: 'And the security edge.', node: <Credentials /> },
      ];

  return (
    <div data-theme={sec ? 'dark' : 'light'} className={styles.page}>
      <TopBar current={t.path} />
      <main id="main">
        <TrackHero track={track} />
        <section className={`${styles.about} wrap`} aria-labelledby="about">
          <SectionHead index="00" label="About" title="Short version." id="about" />
          <div className={`${styles.aboutBody} reveal`}>
            {t.about.map((p, i) => <p key={i} className={i ? styles.small : styles.big}>{p}</p>)}
          </div>
        </section>
        {sections.map((s, i) => (
          <section key={s.key} className={`${styles.section} wrap`} aria-labelledby={s.key}>
            <SectionHead index={String(i + 1).padStart(2, '0')} label={s.label} title={s.title} id={s.key} />
            {s.node}
          </section>
        ))}
      </main>
      <Contact track={track} />
    </div>
  );
}

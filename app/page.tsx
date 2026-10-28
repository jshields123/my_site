import { TopBar } from './components/TopBar/TopBar';
import { SplitHero } from './components/SplitHero/SplitHero';
import { SectionHead } from './components/SectionHead/SectionHead';
import { TrackCards } from './components/TrackCards/TrackCards';
import { Cases } from './components/Cases/Cases';
import { Credentials } from './components/Credentials/Credentials';
import { Contact } from './components/Contact/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <div data-theme="light">
      <TopBar current="/" overlay />
      <main id="main">
        <SplitHero />
        <section className={`${styles.section} wrap`} aria-labelledby="paths">
          <SectionHead index="01" label="Two ways in" title="Pick the side you’re hiring for." id="paths" />
          <TrackCards />
        </section>
        <section className={`${styles.section} wrap`} aria-labelledby="work">
          <SectionHead index="02" label="Selected work" title="Every project has two sides." id="work" />
          <Cases />
        </section>
        <section className={`${styles.section} wrap`} aria-labelledby="credentials">
          <SectionHead index="03" label="Credentials" title="On paper, too." id="credentials" />
          <Credentials />
        </section>
      </main>
      <Contact />
    </div>
  );
}

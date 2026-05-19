import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Experience } from './components/Experience';
import { Credentials } from './components/Credentials';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}

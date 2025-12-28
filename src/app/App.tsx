import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { DesignStyles } from './components/DesignStyles';
import { Services } from './components/Services';
import { Awards } from './components/Awards';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <DesignStyles />
        <Portfolio />
        <Services />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
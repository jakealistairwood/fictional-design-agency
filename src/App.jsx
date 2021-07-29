import './App.scss';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <main className="app">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Portfolio */}
      <Portfolio />
      {/* Services */}
      <Services />
      {/* About */}
      <About />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default App

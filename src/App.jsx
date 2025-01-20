import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';

function App() {
  

  return (
    <>
    <Hero />
    <div className="content">
      <About />
      <Skills />
    </div>
    <Projects />
    <Contact />
    <Footer />
    <SpeedInsights/>
    </>
  );
     
  
}

export default App

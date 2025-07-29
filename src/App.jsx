import './App.css';
import Home from './pages/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import FooterComponent from './components/FooterComponent';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always apply dark mode class to body
    document.body.classList.add('dark-mode');
    
    // Simulate loading time for smooth entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="loading-text">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <FooterComponent />
      <Analytics />
    </div>
  );
}

export default App;

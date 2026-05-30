import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app bg-void min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
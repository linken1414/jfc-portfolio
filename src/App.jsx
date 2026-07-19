import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorSpotlight from "./components/ui/CursorSpotlight";
import LoadingScreen from "./components/ui/LoadingScreen";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Tools from "./components/sections/Tools";
import Experience from "./components/sections/Experience";
import Links from "./components/sections/Links";
import Reveal from "./components/ui/Reveal";
import Terminal from "./components/ui/Terminal";
import Projects from "./components/sections/Projects";
import ParticleBackground from "./components/ui/ParticleBackground";

function App() {
  return (
    <div className="relative isolate bg-background min-h-screen flex flex-col">
      <ParticleBackground />
      <LoadingScreen />
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStack />
        
        {/* Workflow/Tools section as a bridge */}
        <Reveal>
          <Projects />
        </Reveal>
        
        <Reveal>
          <Tools />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Links />
        </Reveal>
      </main>
      <Footer />
      <Terminal />
    </div>
  );
}

export default App;
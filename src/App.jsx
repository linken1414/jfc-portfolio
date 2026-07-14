import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorSpotlight from "./components/ui/CursorSpotlight";
import LoadingScreen from "./components/ui/LoadingScreen";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Links from "./components/sections/Links";
import Reveal from "./components/ui/Reveal";
import Terminal from "./components/ui/Terminal";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <LoadingScreen />
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Reveal>
          <Projects />
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
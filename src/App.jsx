import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Links from "./components/sections/Links";
import Reveal from "./components/ui/Reveal";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Links />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
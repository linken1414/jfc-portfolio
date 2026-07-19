import Button from "../ui/Button";
import Typewriter from "../ui/TypeWriter";

export default function Hero() {
  return (
    <section className="relative isolate max-w-5xl mx-auto px-6 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-glow-1" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent-secondary/20 rounded-full blur-3xl animate-glow-2" />
      </div>

      <p className="text-accent font-mono text-sm mb-4">
        <Typewriter
        phrases={[
       "Hi, my name is Jonathan Francis S. Corpuz",
      "Aspiring IT Professional",
         ]}
      />
      </p>

      <h1 className="text-4xl sm:text-6xl font-bold text-text-primary leading-tight mb-6">
        Building things{" "}
        <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
        that matter.
      </span>
      </h1>

      <p className="text-text-secondary text-lg max-w-2xl mb-10 leading-relaxed">
        Fresh IT graduate with hands-on experience in IT support, infrastructure, and basic cybersecurity. Proficient in technical troubleshooting and system operations, with a strong focus on building smarter, automated solutions. Leverages AI-assisted development tools to streamline coding workflows and accelerate problem-solving, with a proactive commitment to upskilling in modern web development to drive team productivity and innovation.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href="#tech-stack">See my Tech Stack</Button>
        <Button href="#links" variant="secondary">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
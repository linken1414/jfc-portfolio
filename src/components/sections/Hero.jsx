import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate max-w-5xl mx-auto px-6 py-24 sm:py-32 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-glow-1" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent-secondary/20 rounded-full blur-3xl animate-glow-2" />
      </div>

      <p className="text-accent font-mono text-sm mb-4">
        Hi, my name is Jonathan Francis S. Corpuz 👋
      </p>

      <h1 className="text-4xl sm:text-6xl font-bold text-text-primary leading-tight mb-6">
        I'm learning to build things{" "}
        <span className="text-accent">that matter.</span>
      </h1>

      <p className="text-text-secondary text-lg max-w-2xl mb-10 leading-relaxed">
        Fresh IT graduate with hands-on experience in IT support, infrastructure, and
        cybersecurity. I thrive in technical troubleshooting and system operations, while
        actively upskilling in modern web development to build smarter, automated
        solutions. I am a proactive learner eager to apply my technical foundation to
        real-world challenges and grow alongside a dynamic team.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href="#tech-stack">See what I'm learning</Button>
        <Button href="#links" variant="secondary">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
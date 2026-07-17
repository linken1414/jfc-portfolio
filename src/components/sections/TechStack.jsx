import { techStack } from "../../data/techStack";
import Reveal from "../ui/Reveal";

export default function TechStack() {
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section id="tech-stack" className="py-20 overflow-hidden">
      <Reveal>
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
            Tech Stack
          </h2>
          <p className="text-text-secondary">
            What I'm confident with, and what I'm actively leveling up.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="flex gap-6 w-max animate-marquee">
          {marqueeItems.map((tech, index) => (
           <div
          key={`${tech.name}-${index}`}
          className="flex flex-col items-center justify-center gap-4 py-10 w-48 rounded-lg bg-surface border border-border shrink-0"
        >
          <tech.icon className="text-5xl text-text-primary" />
          <span className="text-text-primary font-medium text-lg whitespace-nowrap">
            {tech.name}
          </span>
        </div>
          ))}
        </div>
      </div>
    </section>
  );
}
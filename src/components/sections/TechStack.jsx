import { techStack } from "../../data/techStack";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function TechStack() {
  const intermediate = techStack.filter((t) => t.category === "intermediate");
  const learning = techStack.filter((t) => t.category === "learning");

  return (
    <section id="tech-stack" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
        Tech Stack
      </h2>
      <p className="text-text-secondary mb-10">
        What I'm confident with, and what I'm actively leveling up.
      </p>

      <div className="mb-10">
        <h3 className="text-sm font-mono text-text-secondary mb-4 uppercase tracking-wide">
          Intermediate
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {intermediate.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.08}>
              <Card className="flex flex-col items-center gap-2 py-6">
                <tech.icon className="text-3xl text-text-primary" />
                <span className="text-text-primary font-medium text-sm">{tech.name}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-mono text-accent mb-4 uppercase tracking-wide">
          Currently Learning
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {learning.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.08}>
              <Card className="flex flex-col items-center gap-2 py-6 border-accent/30">
                <tech.icon className="text-3xl text-accent" />
                <span className="text-text-primary font-medium text-sm">{tech.name}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
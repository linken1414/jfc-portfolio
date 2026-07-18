import { tools } from "../../data/tools";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";

export default function Tools() {
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <section id="tools" className="max-w-5xl mx-auto px-6 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Tools & Workflow
        </h2>
        <p className="text-text-secondary mb-10">
          What I use day to day to build, ship, and collaborate.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Reveal key={category} delay={index * 0.1}>
            <Card className="p-6 h-full">
              <h3 className="text-sm font-mono text-text-secondary mb-4 uppercase tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {tools
                  .filter((t) => t.category === category)
                  .map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2"
                    >
                      <tool.icon className="text-2xl text-text-primary" />
                      <span className="text-text-primary font-medium text-sm">
                        {tool.name}
                      </span>
                    </div>
                  ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
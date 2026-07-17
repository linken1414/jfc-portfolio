import { tools } from "../../data/tools";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Tools() {
  // Group tools by category so we can render one header + row per group,
  // instead of manually writing out each category block by hand.
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

      <div className="space-y-10">
        {categories.map((category, catIndex) => (
          <Reveal key={category} delay={catIndex * 0.1}>
            <div>
              <h3 className="text-sm font-mono text-text-secondary mb-4 uppercase tracking-wide">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools
                  .filter((t) => t.category === category)
                  .map((tool) => (
                    <Card
                      key={tool.name}
                      className="flex flex-col items-center gap-2 py-6"
                    >
                      <tool.icon className="text-3xl text-text-primary" />
                      <span className="text-text-primary font-medium text-sm text-center">
                        {tool.name}
                      </span>
                    </Card>
                  ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
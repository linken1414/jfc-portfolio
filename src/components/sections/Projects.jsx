import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
        Projects
      </h2>
      <p className="text-text-secondary mb-10">
        A selection of things I've built.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.name} variant="scale" delay={index * 0.15}>
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
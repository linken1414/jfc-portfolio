import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { name, description, techStack, image, liveUrl, githubUrl } = project;

  return (
    <div className="group h-full flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_-5px_var(--color-accent)]/20 hover:-translate-y-1 transition-all duration-300">
      {/* Image or placeholder */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent/10 to-accent-secondary/10">
        {image ? (
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaCode className="text-4xl text-accent/30" />
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-text-primary font-semibold text-lg mb-2">{name}</h3>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons — mt-auto pushes this to the bottom regardless of description length */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors"
            >
              <FaExternalLinkAlt className="text-xs" /> View Project
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors"
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
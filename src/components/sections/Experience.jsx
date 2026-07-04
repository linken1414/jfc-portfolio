import { journeyEntries } from "../../data/journey";
import Card from "../ui/Card";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
        My Learning Journey
      </h2>
      <p className="text-text-secondary mb-10">
        A running log of what I've built and learned along the way.
      </p>

      <div className="flex flex-col gap-4">
        {journeyEntries.map((entry) => {
          const content = (
            <Card
              className={`flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                entry.link ? "hover:border-accent cursor-pointer" : ""
              }`}
            >
              <span className="text-accent font-mono text-sm shrink-0 sm:w-20">
                {entry.date}
              </span>
              <div>
                <h3 className="text-text-primary font-semibold mb-1 flex items-center gap-2">
                  {entry.title}
                  {entry.link && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </Card>
          );

          return entry.link ? (
            <a
              key={entry.title}
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={entry.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
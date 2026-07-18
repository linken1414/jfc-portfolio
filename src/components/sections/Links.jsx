import Button from "../ui/Button";

export default function Links() {
  return (
    <section id="links" className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
        Let's Connect
      </h2>
      <p className="text-text-secondary mb-10 max-w-xl mx-auto">
        I'm actively looking for my first role in tech — if you think I'd be
        a good fit for your team, I'd love to hear from you.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button href="https://www.linkedin.com/in/jonathan-francis-corpuz-318653386/">
          Connect on LinkedIn
        </Button>
        <Button href="https://github.com/linken1414" variant="secondary">
          View my GitHub
        </Button>
        <Button href="/Jonathan-Francis-Corpuz-CV.pdf" variant="secondary" download>
          Download CV
        </Button>
      </div>
    </section>
  );
}
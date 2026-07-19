export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Jonathan Francis S. Corpuz
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/jonathan-francis-corpuz-318653386/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary text-sm hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          
          <a
            href="https://github.com/linken1414"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary text-sm hover:text-accent transition-colors"
          >
            GitHub
          </a>
          
          <a
            href="#links"
            className="text-accent text-sm font-medium hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </footer>
  );
}
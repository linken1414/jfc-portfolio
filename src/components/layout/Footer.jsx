export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-1">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Jonathan Francis S. Corpuz
        </p>
        <p className="text-text-secondary/60 text-xs font-mono">
          Built with React, Tailwind CSS & Claude Code
        </p>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Jonathan Francis S. Corpuz. Built with React & Tailwind.
        </p>
        <p className="text-text-secondary text-sm font-mono">
          Always learning.
        </p>
      </div>
    </footer>
  );
}
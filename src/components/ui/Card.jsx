export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface border border-border rounded-xl p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_var(--color-accent)]/20 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
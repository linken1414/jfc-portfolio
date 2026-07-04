export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
export default function Button({ children, href, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200";

  const variants = {
    primary: "bg-accent text-background hover:bg-accent-hover",
    secondary:
      "bg-surface text-text-primary border border-border hover:bg-surface-hover",
  };

  const classes = `${base} ${variants[variant]}`;

  // Only open in a new tab for genuine external links, not same-page anchors
  const isExternal = href && href.startsWith("http");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
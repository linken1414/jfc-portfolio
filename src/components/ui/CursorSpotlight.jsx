import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(34, 211, 238, 0.06), transparent 80%)",
      }}
    />
  );
}
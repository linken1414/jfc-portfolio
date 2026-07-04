import { useState, useEffect } from "react";

export default function Typewriter({
  phrases,
  typeSpeed = 40,
  eraseSpeed = 20,
  pauseDuration = 2000,
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "erasing"

  const currentPhrase = phrases[phraseIndex];

  useEffect(() => {
    let timeoutId;

    if (phase === "typing") {
      if (displayedText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        timeoutId = setTimeout(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      timeoutId = setTimeout(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, eraseSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setPhase("typing");
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, phase, currentPhrase, phrases.length, typeSpeed, eraseSpeed, pauseDuration]);

  return (
    <span>
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-pulse" />
    </span>
  );
}
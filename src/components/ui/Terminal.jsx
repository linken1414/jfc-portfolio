import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { terminalCommands } from "../../data/terminalCommands";
import { FaTerminal } from "react-icons/fa";

export default function Terminal() {
  const [showHint, setShowHint] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const scrollRef = useRef(null);

  // Reset the script whenever the terminal is reopened
  useEffect(() => {
    if (isOpen) {
      setLines([]);
      setCommandIndex(0);
    }
  }, [isOpen]);

  // Run through the scripted commands one at a time while open
  useEffect(() => {
    if (!isOpen || commandIndex >= terminalCommands.length) return;

    const { command, output } = terminalCommands[commandIndex];
    let charIndex = 0;
    let typedCommand = "";

    const typingInterval = setInterval(() => {
      charIndex++;
      typedCommand = command.slice(0, charIndex);

      setLines((prev) => {
        const withoutCurrent = prev.filter((l) => l.id !== commandIndex);
        return [...withoutCurrent, { id: commandIndex, command: typedCommand, output: null }];
      });

      if (charIndex >= command.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLines((prev) =>
            prev.map((l) => (l.id === commandIndex ? { ...l, output } : l))
          );
          setTimeout(() => setCommandIndex((i) => i + 1), 600);
        }, 300);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, [isOpen, commandIndex]);

  // Auto-scroll to bottom as new lines appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Show the attention hint a few seconds after load, hide it automatically after a while too
  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 3000);
    const hideTimer = setTimeout(() => setShowHint(false), 8000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setShowHint(false);
  }, [isOpen]);

  // Hide the hint if the user scrolls near the bottom of the page,
  // so it doesn't overlap the footer
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      if (scrolledToBottom) setShowHint(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <AnimatePresence>
          {showHint && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="bg-surface border border-border text-text-secondary text-xs font-mono px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Know me more in the terminal!
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="text-accent text-sm"
              >
                →
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-surface border border-border hover:border-accent/50 text-accent rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_-5px_var(--color-accent)] transition-all duration-300"
          aria-label="Open terminal"
        >
          <FaTerminal className="text-lg" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50"
            />

            {/* Terminal window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md h-96 bg-surface border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-text-secondary font-mono">
                  jonathan@portfolio: ~
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto text-text-secondary hover:text-text-primary"
                  aria-label="Close terminal"
                >
                  ✕
                </button>
              </div>

              {/* Output area */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2"
              >
                {lines.map((line) => (
                  <div key={line.id}>
                    <div className="text-text-primary">
                      <span className="text-accent">$</span> {line.command}
                    </div>
                    {line.output && (
                      <div className="text-text-secondary whitespace-pre-line pl-4">
                        {line.output}
                      </div>
                    )}
                  </div>
                ))}
                <span className="inline-block w-[2px] h-[1em] bg-accent align-middle animate-pulse" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
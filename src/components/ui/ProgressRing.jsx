import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProgressRing({ level, size = 56, strokeWidth = 4, color = "var(--color-accent)" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg ref={ref} width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: isInView ? offset : circumference }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}
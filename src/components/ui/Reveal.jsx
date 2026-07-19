import { motion } from "framer-motion";

const variants = {
  fade: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  },
  scale: {
    initial: { opacity: 0, y: 20, scale: 0.94 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
  },
};

export default function Reveal({ children, delay = 0, variant = "fade" }) {
  const { initial, whileInView } = variants[variant];

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
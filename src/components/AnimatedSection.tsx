import { motion } from 'framer-motion';

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Commence invisible et plus bas
      whileInView={{ opacity: 1, y: 0 }} // S'anime quand on scrolle dessus
      viewport={{ once: true, amount: 0.1 }} // Ne s'anime qu'une seule fois
      transition={{ duration: 0.8, ease: "easeOut" }} // Transition fluide
    >
      {children}
    </motion.div>
  );
}
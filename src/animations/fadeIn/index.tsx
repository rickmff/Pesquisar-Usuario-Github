import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay: number;
  repeat?: boolean;
}

export const FadeIn = ({ children, delay, repeat }:FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, transform: 'translateY(60px)' }}
    whileInView={!repeat ? { opacity: 1, transform: 'translateY(0px)' } : ''}
    animate={repeat ? { opacity: 1, transform: 'translateY(0px)' } : ''}
    viewport={{ once: true }}
    transition={{ duration: delay }}
  >
    {children}
  </motion.div>
);

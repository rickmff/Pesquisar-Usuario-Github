import { motion } from 'framer-motion';

interface DropDownProps {
  children: React.ReactNode;
  delay: number;
}

export const DropDown = ({ children, delay }:DropDownProps) => (
  <motion.div
    initial={{ opacity: 1, transform: 'translateY(-80px)' }}
    animate={{ opacity: 1, transform: 'translateY(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: delay }}
  >
    {children}
  </motion.div>
); 

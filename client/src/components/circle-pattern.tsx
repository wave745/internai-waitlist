import { motion } from "framer-motion";

interface CirclePatternProps {
  className?: string;
}

export function CirclePattern({ className }: CirclePatternProps) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="20"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.circle
          key={angle}
          cx={100 + Math.cos((angle * Math.PI) / 180) * 50}
          cy={100 + Math.sin((angle * Math.PI) / 180) * 50}
          r="10"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      ))}
    </svg>
  );
}

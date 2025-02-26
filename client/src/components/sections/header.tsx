import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold tracking-tight">
            Intern<span className="text-primary">Ai</span>
            <span className="text-primary">.</span>
          </h1>
        </motion.div>
      </div>
    </header>
  );
}

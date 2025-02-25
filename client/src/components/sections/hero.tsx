import { WaitlistForm } from "@/components/waitlist-form";
import { CirclePattern } from "@/components/circle-pattern";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <CirclePattern className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-primary/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your AI Intern for X is Here
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Automate your social media presence with AI-powered scheduling, engagement, and content management.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

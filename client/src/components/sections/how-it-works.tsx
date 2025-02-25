import { motion } from "framer-motion";
import { CirclePattern } from "@/components/circle-pattern";

const steps = [
  {
    number: "01",
    title: "Sign up for early access",
    description: "Join our waitlist to be first in line",
  },
  {
    number: "02",
    title: "Get notified at launch",
    description: "Receive exclusive access when we go live",
  },
  {
    number: "03",
    title: "Start automating",
    description: "Transform your X presence with AI",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden">
      <CirclePattern className="absolute bottom-0 left-0 w-[400px] h-[400px] text-primary/5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started with InternAI is simple. Follow these steps to
            revolutionize your social media management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-lg bg-white/5 border border-white/10"
            >
              <span className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

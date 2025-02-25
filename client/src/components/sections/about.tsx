import { CirclePattern } from "@/components/circle-pattern";
import { motion } from "framer-motion";
import { Clock, Calendar, MessageCircle, Bot } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Time-saving automation",
    description: "Let AI handle your routine social media tasks",
  },
  {
    icon: Calendar,
    title: "Seamless scheduling",
    description: "Plan and schedule your content effortlessly",
  },
  {
    icon: MessageCircle,
    title: "Smart engagement",
    description: "Automatically engage with your audience",
  },
  {
    icon: Bot,
    title: "AI assistant",
    description: "Your personal AI-powered social media manager",
  },
];

export function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <CirclePattern className="absolute top-0 right-0 w-[400px] h-[400px] text-primary/5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Revolutionize Your Social Media Management
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            InternAI automates scheduling, engagement, and content management on X,
            allowing you to focus on what matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white/5 border border-white/10"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

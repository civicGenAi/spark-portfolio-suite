import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Target, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Driven Platforms & Systems",
    description: "Building intelligent systems that automate processes, provide insights, and deliver personalized experiences at scale.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Code,
    title: "Web & Digital Product Development",
    description: "Crafting modern, responsive web applications with cutting-edge technologies and exceptional user experiences.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Target,
    title: "Strategic Planning & Innovation",
    description: "Developing comprehensive strategies that align technology initiatives with organizational goals and market opportunities.",
    gradient: "from-primary/20 to-accent/5",
  },
  {
    icon: Users,
    title: "Community Engagement & Youth Empowerment",
    description: "Creating programs and platforms that connect, educate, and empower young people across East Africa.",
    gradient: "from-accent/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Digital Content & Storytelling",
    description: "Producing compelling digital content that communicates impact, builds brand presence, and drives engagement.",
    gradient: "from-primary/20 to-primary/5",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining technical excellence with strategic vision to create solutions that drive real-world impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${service.gradient} border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2`}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

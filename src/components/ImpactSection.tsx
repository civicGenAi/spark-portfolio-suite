import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Award, Handshake, Rocket } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Youth Reached Across East Africa",
  },
  {
    icon: Award,
    value: 6,
    suffix: "",
    label: "National Innovation Awards",
  },
  {
    icon: Handshake,
    value: 15,
    suffix: "+",
    label: "Strategic Partnerships",
  },
  {
    icon: Rocket,
    value: 4,
    suffix: "",
    label: "AI-Powered Tools Launched",
  },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, (duration * 1000) / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span className="text-gradient-gold">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={isInView ? { scale: [0.8, 1.2, 1], opacity: [0, 0.5, 0.3] } : {}}
          transition={{ duration: 3 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={isInView ? { scale: [0.8, 1.2, 1], opacity: [0, 0.5, 0.3] } : {}}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Making a Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Impact & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that tell the story of commitment to excellence and community empowerment.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 md:p-8 rounded-3xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-primary/20 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <Rocket className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-3">
                Flagship Initiative
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Career na mimi Organization
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                A mission-driven organization empowering young Africans through AI-powered career guidance, 
                mentorship programs, and digital learning experiences. Bridging the gap between education 
                and meaningful career pathways.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                {["Mission-Driven", "Youth-Focused", "AI-Powered", "Mentorship"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Image/Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-card border border-border/50"
            >
              {/* Abstract visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-4 rounded-full bg-accent/20"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-primary-foreground">RM</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-20 h-20 rounded-xl bg-primary/10 backdrop-blur-sm" />
              <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-accent/10 backdrop-blur-sm" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 px-6 py-4 rounded-2xl glass-effect glow-gold"
            >
              <p className="text-3xl font-bold text-primary">6+</p>
              <p className="text-sm text-muted-foreground">National Awards</p>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Turning Vision Into
              <span className="text-gradient-gold"> Digital Reality</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I am a Developer & Digital Creator with deep expertise in AI, building innovative 
                web-based solutions that bridge education and career pathways.
              </p>
              <p>
                Recognized with <span className="text-foreground font-medium">three TEHAMA Awards 
                (Education, 2025)</span> and <span className="text-foreground font-medium">three 
                Arusha Innovation Week Championships (2025)</span>, my work reflects a strong 
                commitment to impact, excellence, and youth empowerment across East Africa.
              </p>
              <p>
                I collaborate with educational institutions, NGOs, and private-sector partners to 
                design mentorship programs, AI-driven career guidance systems, and digital learning 
                experiences that unlock opportunity and scale social impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["AI/ML", "Web Development", "Strategic Planning", "Community Building"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

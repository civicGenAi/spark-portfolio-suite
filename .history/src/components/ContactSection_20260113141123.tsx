import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, ArrowUpRight, Handshake, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={isInView ? { scale: [0.5, 1], opacity: [0, 0.5] } : {}}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Open to opportunities</span>
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build{" "}
            <span className="text-gradient-gold">Impact-Driven</span>
            <br />
            Technology Together.
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Ready to collaborate on projects that empower communities and drive meaningful change? Let's connect.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/rahman-mbahe-145807278/?originalSubdomain=tz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold text-lg hover:bg-secondary/80 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            
            <a
              href="mailto:rahmanmbahe07@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            
            <a
              href="https://www.instagram.com/rahman_mbahe/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-accent/20 text-accent-foreground rounded-full font-semibold text-lg hover:bg-accent/30 transition-all duration-300 w-full sm:w-auto justify-center border border-accent/30"
            >
              <Instagram className="w-5 h-5" />
              Instagram
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </motion.div>

          {/* Partner CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 mt-8 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Handshake className="w-4 h-4" />
            <span className="font-medium">Partner With Me</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

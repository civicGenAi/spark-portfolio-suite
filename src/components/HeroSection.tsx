import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 container-narrow px-6 text-center">
        {/* Decorative floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/4 left-10 md:left-20 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/3 right-10 md:right-20 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-emerald-500/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center"
          >
            <span className="text-2xl">💡</span>
          </motion.div>
        </motion.div>

        {/* Main headline - Clean and Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
        >
          <span className="text-gradient-gold">AI-Driven Solutions</span>
          <br />
          <span className="text-foreground">for Africa's Future.</span>
        </motion.h1>

        {/* Subtitle - Simple role description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12 font-medium"
        >
          Developer • AI Expert • Community Builder
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Explore My Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

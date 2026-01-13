import { motion } from "framer-motion";
import cvPdf from "../assests/cv.pdf";

const HeroSection = () => {
  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.4, 1, 0.4],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // Letter animation for title
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const title = "AI-Driven Developer";
  const subtitle = "Building Tomorrow's Solutions Today";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 md:pt-0">
      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <motion.div
          className="absolute top-10 left-5 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Secondary gradient blob */}
        <motion.div
          className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-accent/20 via-accent/5 to-transparent blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Animated circular rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-accent/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 container-narrow px-4 sm:px-6 text-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold text-primary">
              ✨ Award-Winning Developer & Innovator
            </span>
          </motion.div>
        </motion.div>

        {/* Main headline with staggered letter animation */}
        <motion.h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={char === " " ? "inline-block" : "inline-block"}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="text-gradient-gold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            for Africa's Digital Revolution
          </motion.span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-medium"
        >
          {subtitle}
        </motion.p>

        {/* Role tags with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["Full-Stack Developer", "AI Specialist", "Tech Innovator", "Youth Mentor"].map(
            (role, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold"
              >
                {role}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons with premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary Button - Download CV */}
          <a
            href={cvPdf}
            download
            className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2 overflow-hidden"
          >
            <motion.span
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              📥
            </motion.span>
            Download My CV
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </a>

          {/* Secondary Button */}
          <motion.a
            href="#work"
            className="px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              View My Work
            </motion.span>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/20"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Stats section with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto mb-16 px-4"
        >
          {[
            { number: "6+", label: "Awards & Recognition" },
            { number: "50+", label: "Projects Delivered" },
            { number: "10K+", label: "Lives Impacted" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 rounded-2xl backdrop-blur-sm bg-white/5 border border-primary/10 hover:border-primary/30 transition-colors duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgb(var(--color-primary))" }}
            >
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.2, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator with premium styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
              Scroll to explore
            </span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2 relative"
              animate={{ borderColor: ["rgb(var(--color-primary) / 0.3)", "rgb(var(--color-primary) / 0.6)", "rgb(var(--color-primary) / 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

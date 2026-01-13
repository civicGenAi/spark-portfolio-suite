import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingIndicator = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Main loading animation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hexagonal loader */}
        <div className="relative w-48 h-48 mb-12">
          {/* Outer hexagon ring */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={`outer-${i}`}
              className="absolute inset-0"
              style={{
                transform: `rotate(${i * 60}deg)`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-emerald-400 to-transparent rounded-full" />
            </motion.div>
          ))}

          {/* Middle rotating squares */}
          <motion.div
            className="absolute inset-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`square-${i}`}
                className="absolute w-8 h-8 rounded-lg border-2 border-cyan-400"
                style={{
                  top: i < 2 ? '0%' : 'auto',
                  bottom: i >= 2 ? '0%' : 'auto',
                  left: i % 2 === 0 ? '0%' : 'auto',
                  right: i % 2 === 1 ? '0%' : 'auto',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Inner pulsing orbs */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 blur-xl"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              animate={{
                scale: [1, 1.5, 1],
                rotate: 360,
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Orbiting satellites */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8 - i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 10px rgba(16, 185, 129, 0.5)",
                    "0 0 20px rgba(6, 182, 212, 0.8)",
                    "0 0 10px rgba(16, 185, 129, 0.5)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Loading text with glitch effect */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{
              textShadow: [
                "0 0 10px rgba(16, 185, 129, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.8)",
                "0 0 10px rgba(16, 185, 129, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mb-2">
              Loading
            </h2>
          </motion.div>

          {/* Animated percentage */}
          <motion.div
            className="text-2xl font-mono text-cyan-400"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.span
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {Array.from("...").map((dot, i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {dot}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Prismatic progress bars */}
        <div className="mt-12 flex flex-col gap-2 w-80">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm"
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, 
                    rgba(16, 185, 129, ${0.5 + i * 0.2}) 0%, 
                    rgba(6, 182, 212, ${0.5 + i * 0.2}) 50%, 
                    rgba(16, 185, 129, ${0.5 + i * 0.2}) 100%)`,
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2 - i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            </div>
          ))}
        </div>

        {/* Status text */}
        <motion.p
          className="mt-8 text-white/50 text-sm font-medium tracking-widest uppercase"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing Experience
        </motion.p>
      </div>

      {/* Animated corner decorations */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M 0,30 L 0,0 L 30,0"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.5)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M 100,70 L 100,100 L 70,100"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Grid overlay with perspective */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};

export default LoadingIndicator;
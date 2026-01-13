import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import proImage from "../assests/pro.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSkills, setShowSkills] = useState(false);

  const skills = {
    "Development": [
      "Java", "PHP", "HTML/CSS", "JavaScript",
      "React", "Laravel", "MySQL"
    ],
    "AI & Data": [
      "Machine Learning", "AI Solutions", "Data Analysis",
      "Power BI", "SPSS", "Excel Analytics"
    ],
    "Design & Creative": [
      "Adobe Photoshop", "Adobe Illustrator",
      "Adobe After Effects", "Adobe Premiere Pro", "CapCut"
    ],
    "Project & Leadership": [
      "Project Management", "Team Leadership",
      "Stakeholder Engagement", "Strategic Planning",
      "Digital Innovation"
    ],
    "Technical": [
      "Systems Analysis", "IT Support",
      "Database Management", "Git", "Web Development"
    ]
  };

  return (
    <>
      <section id="about" className="section-padding bg-background" ref={ref}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left - Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-card border border-border/50"
              >
                <img
                  src={proImage}
                  alt="Rahman Mbahe"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Awards Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 px-6 py-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-emerald-400/30"
              >
                <p className="text-3xl font-bold text-emerald-400">6+</p>
                <p className="text-sm text-white/70">National Awards</p>
              </motion.div>
            </div>

            {/* Right - Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4"
              >
                About Me
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Technology Expert & 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> AI Innovator</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8"
              >
                <p>
                  Full-stack developer and AI expert building intelligent solutions for education, 
                  youth empowerment, and digital transformation across Africa.
                </p>
                <p>
                  Award-winning technologist with <span className="text-foreground font-medium">6+ national 
                  recognitions</span> including TEHAMA Awards and Tanzania AI Forum Hackathon winner. 
                  Experienced in managing complex projects for NGOs, startups, and academic institutions.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setShowSkills(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-full font-semibold text-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative flex items-center gap-2">
                  View My Skills
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Modal */}
      <AnimatePresence>
        {showSkills && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowSkills(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-emerald-400/30 rounded-3xl p-8 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowSkills(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Skills & Expertise
                  </h3>
                  <p className="text-white/60 text-lg">
                    Full-stack development, AI solutions, and digital innovation
                  </p>
                </motion.div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-300">
                      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
                        {category}
                      </h4>
                      
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-emerald-400/10 hover:border-emerald-400/30 hover:text-white transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-400/20 rounded-2xl"
              >
                <h4 className="text-lg font-bold text-white mb-3">Recent Certifications & Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-white/70">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>Tanzania AI Forum Hackathon 2025 - 2nd Place</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>Best Use of ICT in Education - TEHAMA Awards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>JA Digital Entrepreneurship Program</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>UN Content Development Certificate (FUNZI)</span>
                  </div>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => setShowSkills(false)}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400/50 rounded-full text-white font-medium transition-all"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;
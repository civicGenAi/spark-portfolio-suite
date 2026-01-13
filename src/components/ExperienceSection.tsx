import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Chief Executive Officer",
    company: "AgroCare Company",
    period: "May 2025 – Present",
    type: "Full-time",
    description: "Leading agricultural technology innovation and sustainable farming solutions across the region.",
  },
  {
    role: "Executive Officer",
    company: "YUNA Chapter, Arusha",
    period: "April 2024 – Present",
    type: "Full-time",
    description: "Driving youth empowerment initiatives and coordinating community engagement programs.",
  },
  {
    role: "Chief Executive Officer",
    company: "Career na mimi Organization",
    period: "October 2023 – Present",
    type: "Founder",
    description: "Founded and lead an organization dedicated to bridging career guidance gaps for young Africans through AI and mentorship.",
  },
  {
    role: "Digital Content Creator",
    company: "RACAS Foundation",
    period: "March 2024 – January 2025",
    type: "Contract",
    description: "Created impactful digital content to amplify the foundation's mission and reach across East Africa.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Career Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of leadership and impact across technology, community development, and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className={`ml-16 md:ml-0 p-6 md:p-8 rounded-3xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group`}>
                  {/* Type badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                    {exp.type}
                  </span>

                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>

                  <div className={`flex items-center gap-4 mb-4 text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="font-display text-2xl font-bold mb-6">Education</h3>
          <div className="inline-block p-6 rounded-2xl bg-gradient-card border border-border/50">
            <p className="font-semibold text-lg mb-1">Institute of Accountancy Arusha</p>
            <p className="text-muted-foreground">Certificate in Information Technology & Graphics Design (2022)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

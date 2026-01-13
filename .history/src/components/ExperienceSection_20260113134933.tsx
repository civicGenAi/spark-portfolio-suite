import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Project Creator",
    company: "PPRA",
    location: "Dodoma",
    period: "2025",
    type: "Project",
    description: "Conceptualized and developed AI-based project aligned with public sector innovation and digital transformation goals.",
  },
  {
    role: "Project Manager",
    company: "Career Na Mimi",
    location: "E3 Empower & JA Africa",
    period: "2023 – 2024",
    type: "Leadership",
    description: "Led end-to-end management of youth-focused digital innovation projects. Coordinated multidisciplinary teams and oversaw development of AI-based career guidance solutions.",
  },
  {
    role: "Volunteer IT Expert – Startup Center",
    company: "Institute of Accountancy Arusha (IAA)",
    location: "Arusha",
    period: "2024",
    type: "Volunteer",
    description: "Provided technical expertise supporting digital systems and innovation activities. Assisted in website management and digital tools setup for startup teams.",
  },
  {
    role: "Digital Creator & Website Manager",
    company: "Racas Foundation",
    location: "Dar es Salaam",
    period: "2023",
    type: "Digital",
    description: "Designed and managed foundation's website and digital platforms. Produced multimedia content and improved digital visibility through strategic content.",
  },
  {
    role: "Arusha Hub Lead & Part-Time Designer",
    company: "Climate Hub",
    location: "Arusha",
    period: "2023",
    type: "Leadership",
    description: "Led Arusha Hub activities coordinating youth participation in climate action initiatives. Designed promotional materials and supported communication strategies.",
  },
  {
    role: "Chapter Lead",
    company: "YUNA (United Nations)",
    location: "Arusha",
    period: "2024",
    type: "Leadership",
    description: "Provided leadership to youth chapter activities aligned with UN SDGs. Coordinated digital campaigns and represented chapter in forums.",
  },
];

const education = [
  {
    degree: "Diploma in Computer Science",
    institution: "Institute of Accountancy Arusha (IAA)",
    location: "Arusha",
    year: "2025",
  },
  {
    degree: "Certificate in Information Technology",
    institution: "Institute of Accountancy Arusha (IAA)",
    location: "Arusha",
    year: "2023",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Career Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Experience</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Leadership and impact across technology, AI innovation, and community development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-cyan-400/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className={`ml-16 md:ml-0 p-6 md:p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group relative overflow-hidden`}>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    {/* Type badge */}
                    <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 mb-4">
                      {exp.type}
                    </span>

                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>

                    <div className={`flex flex-col gap-2 mb-4 text-white/60 text-sm ${
                      index % 2 === 0 ? "md:items-end" : ""
                    }`}>
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-emerald-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-white/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-black" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Education
            </h3>
            <p className="text-white/60">Academic foundation in technology and innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                
                <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 group-hover:border-emerald-400/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      {edu.year}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-white mb-2 text-lg">
                    {edu.degree}
                  </h4>
                  <p className="text-white/60 text-sm mb-1">{edu.institution}</p>
                  <p className="text-white/40 text-sm">{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-400/20 text-center"
        >
          <h4 className="text-xl font-bold text-white mb-4">Certifications & Recognition</h4>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/70">
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">TEHAMA Awards Winner</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">AI Forum Hackathon 2nd Place</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">JA Digital Entrepreneurship</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">UN Content Development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle, FaArrowsAltH, FaStar } from "react-icons/fa";

const WorkExperience = ({ isLightMode }) => {
  const experiences = [
    {
      role: "Freelance Graphic Designer",
      company: "Upwork",
      period: "2026 - Present",
      description: "Delivering high-quality custom graphic design services to international clients, managing complete brand identities, and creating professional digital assets.",
      highlights: ["Client Communication", "Brand Identity", "Custom Design Solutions"]
    },
    {
      role: "Graphic Designer_ Freelance Project",
      company: "Aibimz Malaysia",
      period: "Previous",
      description: "Designed creative marketing materials, social media graphics, and visual layouts tailored for international market standards.",
      highlights: ["International Projects", "Marketing Collateral", "Social Media Graphics"]
    },
    {
      role: "Senior Lead of Creative Team & Social Media Manager",
      company: "Evren AI",
      period: "Previous",
      description: "Managing social media channels, leading the creative team, and overseeing brand identity, visual assets, and digital design rollouts.",
      highlights: ["Rebranding & Corporate Identity", "Social Media Management", "Team Leadership"]
    },
    {
      role: "Social Media Handler | Branding _ Graphic Designer",
      company: "Iseedoc",
      period: "Previous",
      description: "Created structured visual presentations, user interface elements, and professional corporate branding materials.",
      highlights: ["Corporate Branding", "Visual Presentations", "UI Elements"]
    },
    {
      role: "Graphic Design Intern & Employee",
      company: "Issmaart Group of Industry",
      period: "Previous",
      description: "Worked on technical design roles, creating custom promotional assets, marketing materials, and corporate graphics.",
      highlights: ["Print & Digital Media", "Brand Collateral", "Visual Content"]
    },
    {
      role: "Designer_ Digital Branding",
      company: "Truth Marketing",
      period: "Previous",
      description: "Handled promotional campaigns, advertising designs, and visual content to boost brand engagement and client outreach.",
      highlights: ["Advertising Design", "Campaign Assets", "Brand Engagement"]
    }
  ];

  const fallingSkills = [
    { label: "Digital Printing", x: -250, y: -20, rotate: -5 },
    { label: "Social Handling", x: -150, y: -10, rotate: 4 },
    { label: "Freelancing", x: -50, y: -25, rotate: -8 },
    { label: "Video Editing", x: 50, y: -15, rotate: 6 },
    { label: "Visual Storyteller", x: 150, y: -20, rotate: -4 },
    { label: "Creative Lead", x: 250, y: -10, rotate: 7 }
  ];

  return (
    <section id="Experience" className={`relative min-h-screen py-20 flex flex-col justify-center overflow-hidden transition-colors duration-500 ${
      isLightMode 
        ? 'bg-gradient-to-br from-[#FAF6F0] via-[#F3ECE1] text-[#2D2926]' 
        : 'bg-[#121016] text-white'
    }`}>
      
      {/* Background Glowing Light Shades */}
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          
          <div className="relative inline-flex items-center justify-center mb-4 pt-10">
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-center pointer-events-none">
              <div className="relative w-full max-w-5xl flex justify-center">
                {fallingSkills.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, y: -40, opacity: 0 }}
                    whileInView={{ scale: 1, x: item.x, y: item.y, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 140, 
                      damping: 11, 
                      delay: 0.3 + (i * 0.08) 
                    }}
                    className={`absolute px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-2xl border backdrop-blur-md flex items-center gap-2 whitespace-nowrap pointer-events-auto ${
                      isLightMode 
                        ? 'bg-white/90 border-cyan-300 text-gray-800 shadow-cyan-500/10' 
                        : 'bg-black/40 border-cyan-500/30 text-white shadow-lg backdrop-blur-xl'
                    }`}
                  >
                    <FaStar className="text-cyan-400 text-xs" />
                    <span className="text-cyan-300">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative z-20 inline-flex items-center justify-center p-5 rounded-3xl border backdrop-blur-md ${
                isLightMode 
                  ? 'bg-white border-cyan-300 text-cyan-600 shadow-lg shadow-cyan-500/10' 
                  : 'bg-black/40 border-cyan-500/30 text-cyan-400 shadow-lg backdrop-blur-xl'
              }`}
            >
              <FaBriefcase className="text-3xl text-cyan-400" />
            </motion.div>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Experience</span>
          </motion.h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mx-auto" />
          
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>
            My professional journey and milestones in the creative industry.
          </p>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border backdrop-blur-md mt-2 ${
            isLightMode 
              ? 'bg-white/80 border-cyan-300 text-cyan-700 shadow-sm' 
              : 'bg-black/40 border-cyan-500/30 text-gray-300 backdrop-blur-xl'
          }`}>
            <FaArrowsAltH className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-300">Scroll or swipe horizontally to explore more</span>
          </div>
        </div>

        {/* Experience Horizontal Slider Container */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-4 custom-scrollbar">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`min-w-[320px] sm:min-w-[480px] lg:min-w-[540px] flex-shrink-0 snap-center p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-2xl ${
                  isLightMode 
                    ? 'bg-white border-gray-200 shadow-cyan-500/5 hover:border-cyan-400' 
                    : 'bg-black/40 border-cyan-500/30 backdrop-blur-xl hover:border-cyan-400/60 shadow-2xl shadow-black/80'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      isLightMode 
                        ? 'bg-cyan-50 text-cyan-700 border-cyan-200' 
                        : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 backdrop-blur-md'
                    }`}>
                      <FaCalendarAlt className="text-xs" />
                      {exp.period}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                      <FaBuilding className="text-xs text-cyan-400" />
                      {exp.company}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                    {exp.role}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                    {exp.description}
                  </p>
                </div>

                <div>
                  <div className={`w-full h-px mb-4 ${isLightMode ? 'bg-gray-200' : 'bg-cyan-500/20'}`} />
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                          isLightMode 
                            ? 'bg-cyan-50/50 text-cyan-900 border-cyan-200' 
                            : 'bg-white/5 text-cyan-300 border-cyan-500/20 backdrop-blur-sm'
                        }`}
                      >
                        <FaCheckCircle className="text-xs text-cyan-400" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom Scrollbar Styling with Cyan -> Purple -> Pink Gradient */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899);
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;
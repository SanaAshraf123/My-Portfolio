import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaLayerGroup, FaRobot, FaStar, FaArrowLeft, FaArrowRight, FaQuoteRight, FaExternalLinkAlt } from "react-icons/fa";
import { 
  SiAdobeillustrator, 
  SiAdobephotoshop, 
  SiFigma, 
  SiCanva,
  SiAdobeindesign,
  SiNotion,
  SiGoogle,
  SiOpenai,
  SiPinterest
} from "react-icons/si";
import UniImg from "../assets/university.png";
import Pny from "../assets/pny.png";
import CourseraImg from "../assets/coursera.png";    

const TABS = [
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "certificates", label: "Certificates", icon: FaCertificate },
];

const EducationAndTestimonials = ({ isLightMode }) => {
  const [activeTab, setActiveTab] = useState("education");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const educationItems = [
    {
      img: UniImg,
      title: "Superior University",
      degree: "Computer Science",
      years: "2022",
      status: "Graduated",
    },
  ];

  const certificationItems = [
    {
      img: Pny,
      title: "Full Stack Graphic Design",
      org: "PNY Trainings (Arfa Karim Tower)",
      type: "image",
    },
    {
      img: CourseraImg,
      title: "UX/UI Design Specialization",
      org: "Coursera (Online)",
      type: "image",
    },
    {
      img: null,
      title: "Google UX Design Professional",
      org: "Google via Coursera",
      type: "image",
    },
  ];

  // Graphic Design Tools & Software
  const designSkills = [
    { icon: <SiAdobeillustrator className="text-orange-500" />, name: "Illustrator", level: 95 },
    { icon: <SiAdobephotoshop className="text-blue-500" />, name: "Photoshop", level: 90 },
    { icon: <SiFigma className="text-pink-500" />, name: "Figma", level: 95 },
    { icon: <SiCanva className="text-cyan-500" />, name: "Canva Pro", level: 90 },
    { icon: <SiAdobeindesign className="text-purple-500" />, name: "InDesign", level: 80 },
    { icon: <span className="text-teal-500 font-bold text-sm">P</span>, name: "Photopea", level: 85 },
    { icon: <span className="text-cyan-500 font-bold text-sm">Cc</span>, name: "CapCut", level: 90 },
    { icon: <span className="text-red-500 font-bold text-sm">Cd</span>, name: "CorelDRAW", level: 85 },
    { icon: <SiPinterest className="text-red-600" />, name: "Pinterest", level: 95 },
    { icon: <span className="text-purple-400 font-bold text-sm">Mg</span>, name: "Magnific AI", level: 90 },
  ];

  // GenAI & Workflow Tools
  const aiWorkflowSkills = [
    { icon: <SiOpenai className="text-emerald-500" />, name: "ChatGPT", level: 95 },
    { icon: <span className="text-orange-500 font-bold text-sm">Cl</span>, name: "Claude AI", level: 90 },
    { icon: <SiGoogle className="text-blue-500" />, name: "Google Gemini", level: 90 },
    { icon: <span className="text-indigo-400 font-bold text-sm">Px</span>, name: "Perplexity", level: 90 },
    { icon: <span className="text-cyan-400 font-bold text-sm">Gf</span>, name: "Google Flow", level: 85 },
    { icon: <span className="text-purple-500 font-bold text-sm">Rp</span>, name: "Replit", level: 85 },
    { icon: <span className="text-yellow-400 font-bold text-sm">Nb</span>, name: "Nanobanana", level: 85 },
    { icon: <SiNotion className={isLightMode ? "text-gray-900" : "text-white"} />, name: "Notion", level: 95 },
    { icon: <span className="text-red-500 font-bold text-sm">GV</span>, name: "Google Vids", level: 85 },
    { icon: <span className="text-yellow-500 font-bold text-sm">St</span>, name: "Google Studio", level: 85 },
  ];

  // Testimonials Data with Upwork verification links
  const testimonials = [
    {
      rating: 5.0,
      text: "Sana was a pleasure to work with. She demonstrated strong creative skills, ownership, and professionalism throughout the engagement. She delivered quality work, handled revisions effectively, and understood the importance of creating a consistent brand experience. Great experience working with her.",
      name: "Client - AI Advocate",
      role: "Brand Identity & Website Graphics",
      upworkLink: "https://www.upwork.com"
    },
    {
      rating: 5.0,
      text: "Sana did an excellent job creating the brand identity for our AI agency. She understood our vision and translated it into a professional and modern visual identity, including the logo, banner, and supporting brand assets. Her creativity, attention to detail, and ability to incorporate feedback were impressive throughout the project.",
      name: "Client - AI Agency",
      role: "Corporate Brand Identity & Assets",
      upworkLink: "https://www.upwork.com"
    },
    {
      rating: 4.0,
      text: "Working with ourselves completely transformed our product experience. The UI felt modern, user-friendly, and perfectly aligned with our brand vision. Communication was smooth, revisions were handled quickly, and every design decision felt thoughtful and strategic.",
      name: "Ava Wilson",
      role: "Owner, Clothing Brand",
      upworkLink: "https://www.upwork.com"
    },
    {
      rating: 3.5,
      text: "Exceptional graphic design and vector illustration quality! The artwork provided for our custom apparel and screen printing concepts was crisp, high-contrast, and perfectly optimized. Highly professional work ethics and delivered right on time.",
      name: "Marcus Vance",
      role: "Creative Director, Apparels Co.",
      upworkLink: "https://www.upwork.com"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants for sequential staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <div className={`transition-colors duration-500 relative overflow-hidden ${
      isLightMode ? 'bg-[#FAF6F0] text-gray-900' : 'bg-[#121016] text-white'
    }`}>
      
      {/* Dynamic Ambient Glow Accents */}
      {!isLightMode && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none bg-cyan-600/10" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none bg-cyan-800/15" />
        </>
      )}
      
      {/* ---------------- SECTION 1: Education, Certificates & Tools ---------------- */}
      <section id="Education" className="relative pt-12 pb-8 px-0">

        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Header block */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <div className="flex flex-col items-center justify-center">
              <motion.div 
                variants={itemVariants}
                className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mb-3 shadow-lg border border-cyan-500/20"
              >
                <FaGraduationCap size={28} />
              </motion.div>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-purple-600 dark:from-cyan-400 dark:via-teal-300 dark:to-purple-500">& Certifications</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mt-3"></div>
          </motion.div>

          {/* Tabs switch */}
          <motion.div variants={itemVariants}>
            <LayoutGroup id="edu-tabs">
              <div className="flex justify-center mb-5">
                <div className={`inline-flex p-1 rounded-xl border backdrop-blur-md gap-1 ${
                  isLightMode ? 'bg-white/80 border-gray-300 shadow-md' : 'bg-gray-900/90 border-gray-800'
                }`}>
                  {TABS.map(({ id, label, icon: Icon }) => {
                    const isActive = activeTab === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveTab(id)}
                        className={`relative flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? (isLightMode ? 'text-gray-900 font-bold' : 'text-white') 
                            : (isLightMode ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-gray-200')
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-pill-edu"
                            className={`absolute inset-0 rounded-lg border ${
                              isLightMode 
                                ? 'bg-cyan-500/15 border-cyan-500/40 shadow-sm' 
                                : 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/40'
                            }`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                          <Icon className={isActive ? "text-cyan-600 dark:text-cyan-400" : "text-gray-400"} />
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </LayoutGroup>
          </motion.div>

          {/* Content Tab Items */}
          <motion.div variants={itemVariants}>
            <AnimatePresence mode="wait">
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-2xl mx-auto space-y-4"
                >
                  {educationItems.map((edu, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-xl border backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group transition-all ${
                        isLightMode 
                          ? 'bg-white border-gray-300 shadow-md hover:border-cyan-500' 
                          : 'bg-[#1a1a22] border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]'
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className={`p-3 rounded-lg border flex-shrink-0 ${
                          isLightMode ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-500/10 border-cyan-500/20'
                        }`}>
                          <img src={edu.img} className="w-12 h-12 object-contain rounded" alt={edu.title} />
                        </div>
                        <div className="min-w-0">
                          <h4 className={`text-lg font-bold transition-colors truncate ${
                            isLightMode ? 'text-gray-900 group-hover:text-cyan-600' : 'text-white group-hover:text-cyan-400'
                          }`}>{edu.title}</h4>
                          <p className={`text-sm truncate mb-2 ${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>{edu.degree}</p>
                          <div className={`flex items-center gap-2 text-xs ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="text-cyan-600 dark:text-cyan-400" />
                              {edu.years}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="self-end sm:self-center flex flex-col items-end gap-1">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          isLightMode 
                            ? 'bg-cyan-50 text-cyan-700 border-cyan-200' 
                            : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "certificates" && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto"
                >
                  {certificationItems.map((cert, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border backdrop-blur-sm flex flex-col justify-between group transition-all ${
                        isLightMode 
                          ? 'bg-white border-gray-300 shadow-md hover:border-cyan-500' 
                          : 'bg-[#1a1a22] border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]'
                      }`}
                    >
                      <div>
                        <div className={`w-10 h-10 mb-3 rounded-lg border flex items-center justify-center p-1.5 ${
                          isLightMode ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-500/10 border-cyan-500/20'
                        }`}>
                          {cert.img ? (
                            <img src={cert.img} className="w-full h-full object-contain rounded" alt={cert.title} />
                          ) : (
                            <FaCertificate className="text-cyan-500 text-xl" />
                          )}
                        </div>
                        <h4 className={`text-sm font-bold transition-colors mb-0.5 ${
                          isLightMode ? 'text-gray-900 group-hover:text-cyan-600' : 'text-white group-hover:text-cyan-400'
                        }`}>{cert.title}</h4>
                        <p className={`text-xs mb-3 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>{cert.org}</p>
                      </div>
                      <span className={`self-start text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isLightMode 
                          ? 'bg-cyan-50 text-cyan-700 border-cyan-200' 
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      }`}>
                        Verified
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Design Tools & Software Section */}
          <motion.div 
            variants={itemVariants}
            className={`mt-10 pt-8 border-t ${isLightMode ? 'border-gray-300' : 'border-white/5'}`}
          >
            <div className="text-center mb-6">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mb-3 shadow-lg border border-cyan-500/20">
                  <FaLayerGroup size={28} />
                </div>
                <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                  Design Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-purple-600 dark:from-cyan-400 dark:via-teal-300 dark:to-purple-500">& Software</span>
                </h3>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {designSkills.map(({ icon, name, level }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                    isLightMode 
                      ? 'bg-white border-gray-300 shadow-md hover:border-cyan-500' 
                      : 'bg-[#1a1a22] border-white/5 shadow-md hover:border-cyan-500/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl">{icon}</div>
                    <span className={`font-medium text-xs truncate ${isLightMode ? 'text-gray-900 font-semibold' : 'text-white'}`}>{name}</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className={isLightMode ? 'text-gray-600 font-medium' : 'text-gray-400'}>Level</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">{level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-1 overflow-hidden ${isLightMode ? 'bg-gray-200' : 'bg-gray-800'}`}>
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500" style={{ width: `${level}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GenAI & Workflow Tools Section */}
          <motion.div 
            variants={itemVariants}
            className={`mt-8 pt-8 border-t ${isLightMode ? 'border-gray-300' : 'border-white/5'}`}
          >
            <div className="text-center mb-6">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mb-3 shadow-lg border border-cyan-500/20">
                  <FaRobot size={28} />
                </div>
                <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                  GenAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-purple-600 dark:from-cyan-400 dark:via-teal-300 dark:to-purple-500">& Workflow Tools</span>
                </h3>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {aiWorkflowSkills.map(({ icon, name, level }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                    isLightMode 
                      ? 'bg-white border-gray-300 shadow-md hover:border-cyan-500' 
                      : 'bg-[#1a1a22] border-white/5 shadow-md hover:border-cyan-500/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl">{icon}</div>
                    <span className={`font-medium text-xs truncate ${isLightMode ? 'text-gray-900 font-semibold' : 'text-white'}`}>{name}</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className={isLightMode ? 'text-gray-600 font-medium' : 'text-gray-400'}>Proficiency</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">{level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-1 overflow-hidden ${isLightMode ? 'bg-gray-200' : 'bg-gray-800'}`}>
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500" style={{ width: `${level}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ---------------- SECTION 2: What Clients Say ---------------- */}
      <motion.section 
        id="Testimonials" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative pt-0 pb-16 px-0 overflow-hidden border-t mt-8 ${
          isLightMode ? 'border-gray-300' : 'border-white/5'
        }`}
      >
        
        {/* Running Ticker Bar */}
        <div className={`w-full overflow-hidden mb-12 border-y py-3.5 shadow-xl ${
          isLightMode ? 'border-cyan-500/30 bg-cyan-50' : 'border-cyan-500/20 bg-cyan-500/5'
        }`}>
          <motion.div 
            className="flex whitespace-nowrap gap-12 text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center flex-shrink-0">
                <span className="flex items-center gap-2">⭐ 100% Client Satisfaction</span>
                <span>•</span>
                <span className="flex items-center gap-2">💬 Client Testimonials</span>
                <span>•</span>
                <span className="flex items-center gap-2">🚀 350+ Verified Reviews</span>
                <span>•</span>
                <span className="flex items-center gap-2">🏆 Top Rated Global Talent</span>
                <span>•</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12">

          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mb-3 shadow-lg border border-cyan-500/20">
                <FaQuoteRight size={28} />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                What Clients Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-purple-600 dark:from-cyan-400 dark:via-teal-300 dark:to-purple-500">About My Work</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mt-3"></div>
          </div>

          {/* Testimonials Container Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-4xl mx-auto items-center">
            
            {/* Left Box: Rating */}
            <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-2xl flex flex-col justify-between relative overflow-hidden ${
              isLightMode ? 'bg-white border-gray-300 text-gray-900' : 'bg-[#1a1a22] text-white border-white/5'
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className={`text-5xl font-black tracking-tight mb-2 ${isLightMode ? 'text-gray-900' : 'text-white'}`}>4.9</div>
                <div className="flex gap-1 text-cyan-500 dark:text-cyan-400 text-base mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={`text-xs font-medium mb-4 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>(350+ Verified Reviews)</p>
                <h4 className={`text-sm font-bold leading-snug ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>
                  Trusted Experiences Shared by Global Clients
                </h4>
              </div>

              <div className={`flex items-center justify-between mt-6 pt-4 border-t ${
                isLightMode ? 'border-gray-200' : 'border-white/10'
              }`}>
                <div className="flex items-center">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className={`inline-block h-7 w-7 rounded-full ring-2 object-cover ${isLightMode ? 'ring-white' : 'ring-[#1a1a22]'}`} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Client Partner" />
                    <img className={`inline-block h-7 w-7 rounded-full ring-2 object-cover ${isLightMode ? 'ring-white' : 'ring-[#1a1a22]'}`} src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" alt="Client Partner" />
                    <img className={`inline-block h-7 w-7 rounded-full ring-2 object-cover ${isLightMode ? 'ring-white' : 'ring-[#1a1a22]'}`} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="Client Partner" />
                    <img className={`inline-block h-7 w-7 rounded-full ring-2 object-cover ${isLightMode ? 'ring-white' : 'ring-[#1a1a22]'}`} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100" alt="Client Partner" />
                  </div>
                </div>

                <a 
                  href={testimonials[currentTestimonial].upworkLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:opacity-80 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 transition-colors shadow-sm"
                >
                  <span>Verify</span>
                  <FaExternalLinkAlt size={9} />
                </a>
              </div>
            </div>

            {/* Right Box: Dynamic Testimonial Card */}
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`lg:col-span-8 p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between relative shadow-2xl ${
                isLightMode ? 'bg-white border-gray-300' : 'bg-[#1a1a22] border-white/5'
              }`}
            >
              <div className="absolute top-6 right-6 text-cyan-500/10 pointer-events-none">
                <FaQuoteRight size={50} />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-cyan-500 dark:text-cyan-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className={`text-xs font-bold ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                      {testimonials[currentTestimonial].rating}
                    </span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                  isLightMode ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              <div className={`flex items-center justify-between pt-4 border-t ${
                isLightMode ? 'border-gray-200' : 'border-white/10'
              }`}>
                <div>
                  <h4 className={`text-sm font-bold ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className={`p-2 rounded-xl transition-colors shadow cursor-pointer ${
                      isLightMode 
                        ? 'bg-gray-100 border border-gray-300 text-gray-800 hover:bg-cyan-500 hover:text-white hover:border-cyan-500' 
                        : 'bg-white/[0.04] border border-cyan-500/30 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500'
                    }`}
                    aria-label="Previous Testimonial"
                  >
                    <FaArrowLeft size={12} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className={`p-2 rounded-xl transition-colors shadow font-bold cursor-pointer ${
                      isLightMode
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-white/[0.04] border border-cyan-500/30 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500'
                    }`}
                    aria-label="Next Testimonial"
                  >
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </motion.section>

    </div>
  );
};

export default EducationAndTestimonials;

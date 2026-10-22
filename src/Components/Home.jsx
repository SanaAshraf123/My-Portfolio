import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaCode, FaRocket, FaMoon } from "react-icons/fa";
import Myself from "../assets/Myself.jpg";

const Home = ({ isLightMode, setIsLightMode }) => {
  const glowVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${isLightMode ? 'bg-[#FAF6F0] text-[#2D2926]' : 'bg-[#121016] text-white'} pt-12 md:pt-16`}>
      
      {/* Robotic Background Text */}
      <motion.div 
        className="absolute top-5 md:top-10 left-0 w-full text-center pointer-events-none z-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.5 }}
      >
        <h2 className={`text-[12vw] font-black tracking-[0.2em] uppercase select-none ${isLightMode ? 'text-transparent bg-clip-text bg-gradient-to-b from-cyan-600/15 via-purple-500/10 to-transparent' : 'text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent'}`}>
          PORTFOLIO
        </h2>
      </motion.div>

      {/* Animated Background Grid */}
      <div className={`absolute inset-0 bg-cyber-grid ${isLightMode ? 'opacity-10' : 'opacity-20'}`}></div>
      
      {/* Glow Orbs (Royal Cyan & Purple - No Orange) */}
      <motion.div
        className="absolute top-10 left-4 md:top-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
        variants={glowVariants}
        animate="pulse"
      />
      <motion.div
        className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
        variants={glowVariants}
        animate="pulse"
        transition={{ delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-0 sm:py-12 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* --- TOGGLE SWITCH --- */}
            <motion.div 
              className="mt-2 mb-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`inline-flex items-center p-1 rounded-full border shadow-md ${isLightMode ? 'bg-[#F0EEEA] border-[#E5E2DE]' : 'bg-[#1D1924]/80 border-cyan-500/30'} backdrop-blur-md`}>
                
                {/* Moon Button (Dark Mode) */}
                <button
                  onClick={() => setIsLightMode(false)}
                  className={`flex items-center justify-center w-8 h-7 rounded-full transition-all duration-300 cursor-pointer ${!isLightMode ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-sm' : 'text-gray-400 hover:text-cyan-400'}`}
                  title="Dark Mode"
                >
                  <FaMoon className="text-xs" />
                </button>

                {/* In Heaven Button (Light Mode with Royal Vibe) */}
                <button
                  onClick={() => setIsLightMode(true)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${isLightMode ? 'bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-500 text-white shadow-md shadow-purple-500/20' : 'text-gray-300 hover:text-white'}`}
                >
                  In Heaven
                </button>

              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="w-full max-w-4xl overflow-hidden lg:max-w-none"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="mb-3 text-center text-4xl font-bold leading-tight sm:mb-4 sm:text-5xl md:text-6xl lg:text-left lg:text-7xl xl:text-6xl">
                <span className={isLightMode ? 'text-[#2D2926]' : 'text-white'}>Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-extrabold">Sana Ashraf</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="w-full max-w-2xl overflow-hidden lg:max-w-none"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="mb-2 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4 lg:flex-row lg:justify-start lg:text-left">
                <p className={`text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl ${isLightMode ? 'text-[#443F3B]' : 'text-gray-300'}`}>
                  Visual Storyteller & Creative Lead
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className={`mx-auto max-w-xl px-2 text-center text-base leading-relaxed sm:text-lg sm:px-0 md:text-xl lg:mx-0 lg:text-left ${isLightMode ? 'text-[#5C5753]' : 'text-gray-400'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I didn't start in design. My academic background was in IT and tech, 
              and though I moved through different paths, none of them felt truly real. 
              Design was the first thing that gave me both obsession and peace. I 
              learned the rules, broke them, and slowly built my own visual language. 
              Today, every project you see here is part of the world I dreamed of 
              creating built from late nights and loud thoughts ♨︎_♨︎
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 self-center sm:mt-8 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:w-auto lg:self-start lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                to="Contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="block w-full sm:inline-block sm:w-auto"
              >
                <motion.button
                  type="button"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 sm:w-auto sm:px-8 sm:py-4 sm:text-base lg:w-auto cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get in Touch
                    <FaRocket className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link
                to="Projects"
                smooth={true}
                offset={-80}
                duration={500}
                className="block w-full sm:inline-block sm:w-auto"
              >
                <motion.button
                  type="button"
                  className={`flex w-full items-center justify-center rounded-xl border border-purple-500/40 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-purple-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base lg:w-auto cursor-pointer ${isLightMode ? 'bg-purple-500/10 text-purple-700 font-bold hover:bg-purple-500/20' : 'bg-gray-900/40 backdrop-blur-md text-purple-300 hover:bg-purple-500/10'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Image with Circular Frame */}
          <motion.div
            className="relative flex justify-center lg:justify-end py-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [-15, 15, -15]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              
              {/* Glow Effect Behind Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-30 pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* TOP-LEFT Badge */}
              <motion.div
                className={`absolute top-2 left-2 p-3 rounded-xl border border-cyan-500/40 shadow-lg shadow-cyan-500/20 z-20 backdrop-blur-md ${isLightMode ? 'bg-[#FAF6F0]/95 border-gray-300' : 'bg-[#1D1924]/90'}`}
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaCode className="text-cyan-400 text-xl drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
              </motion.div>

              {/* TOP-RIGHT Hire Me Badge */}
              <motion.div
                className="absolute top-4 right-2 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Link to="Contact" smooth={true} offset={-80} duration={500}>
                  <button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 border border-purple-400/50">
                    <span>👩‍💻 Let's Connect</span>
                  </button>
                </Link>
              </motion.div>

              {/* MAIN PROFILE IMAGE */}
              <div className="relative z-10 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full p-1.5 bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 shadow-2xl overflow-hidden group">
                <motion.img
                  src={Myself}
                  alt="Sana Ashraf"
                  className={`w-full h-full object-cover rounded-full transition-transform duration-500 ${isLightMode ? 'bg-[#FAF6F0]' : 'bg-[#121016]'} group-hover:scale-105`}
                />
              </div>

              {/* BOTTOM-LEFT Open to Work */}
              <motion.div
                className={`absolute bottom-4 left-2 px-3.5 py-2 rounded-xl border border-cyan-500/40 shadow-lg shadow-cyan-500/20 z-20 backdrop-blur-md flex items-center gap-2 ${isLightMode ? 'bg-[#FAF6F0]/95 border-gray-300' : 'bg-[#1D1924]/90'}`}
                animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className={`text-xs font-semibold tracking-wide ${isLightMode ? 'text-[#2D2926]' : 'text-gray-200'}`}>Open to Work</span>
              </motion.div>

              {/* BOTTOM-RIGHT Rocket */}
              <motion.div
                className={`absolute bottom-2 right-4 p-3 rounded-xl border border-purple-500/40 shadow-lg shadow-purple-500/20 z-20 backdrop-blur-md ${isLightMode ? 'bg-[#FAF6F0]/95 border-gray-300' : 'bg-[#1D1924]/90'}`}
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <FaRocket className="text-purple-400 text-xl drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
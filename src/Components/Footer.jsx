import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { SiUpwork, SiBehance } from "react-icons/si";
import { FaRocket } from "react-icons/fa";

const Footer = ({ isLightMode }) => {
  const currentYear = new Date().getFullYear();

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
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <footer
      id="Footer"
      className={`relative py-12 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 border-t ${
        isLightMode 
          ? 'bg-[#FAF6F0] text-gray-900 border-gray-300' 
          : 'bg-[#121016] text-white border-cyan-500/20'
      }`}
    >
      {/* Background Ambient Glow Accents */}
      {!isLightMode && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      )}

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start sm:items-center mb-8">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-2 justify-center sm:justify-start">
              <div className={`p-2.5 rounded-xl border ${
                isLightMode ? 'bg-cyan-50 border-cyan-200 text-cyan-600' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
              }`}>
                <FaRocket size={20} />
              </div>
              <h2 className={`text-xl font-extrabold tracking-tight ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                Sana Ashraf
              </h2>
            </div>
            <p className={`text-xs sm:text-sm text-center sm:text-left ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
              Graphic Designer & Brand Identity Specialist
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#Home" className={`transition-colors ${isLightMode ? 'text-gray-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}>Home</a>
              <a href="#About" className={`transition-colors ${isLightMode ? 'text-gray-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}>About</a>
              <a href="#Projects" className={`transition-colors ${isLightMode ? 'text-gray-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}>Projects</a>
              <a href="#Contact" className={`transition-colors ${isLightMode ? 'text-gray-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}>Contact</a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">Connect</h3>
            <div className="flex flex-col gap-2.5">
              <motion.a
                href="mailto:iamsanaashraf999@gmail.com"
                className={`flex items-center gap-2 transition-colors ${isLightMode ? 'text-gray-600 hover:text-cyan-600' : 'text-gray-400 hover:text-cyan-400'}`}
                whileHover={{ x: 5 }}
              >
                <MdOutlineEmail size={18} />
                <span className="text-xs sm:text-sm">iamsanaashraf999@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors ${isLightMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-400 hover:text-purple-400'}`}
                whileHover={{ x: 5 }}
              >
                <CiLinkedin size={18} />
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors ${isLightMode ? 'text-gray-600 hover:text-blue-600' : 'text-gray-400 hover:text-blue-400'}`}
                whileHover={{ x: 5 }}
              >
                <SiBehance size={16} />
                <span className="text-xs sm:text-sm">Behance</span>
              </motion.a>
              <motion.a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors ${isLightMode ? 'text-gray-600 hover:text-emerald-600' : 'text-gray-400 hover:text-emerald-400'}`}
                whileHover={{ x: 5 }}
              >
                <SiUpwork size={16} />
                <span className="text-xs sm:text-sm">Upwork</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`w-full h-px my-6 ${isLightMode ? 'bg-gray-300' : 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent'}`}></div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className={`flex items-center justify-center text-xs sm:text-sm ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}
        >
          <span>© {currentYear} Sana Ashraf. All rights reserved.</span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
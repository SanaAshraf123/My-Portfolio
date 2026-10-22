import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-blue text-white shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-300 group"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="text-lg sm:text-xl group-hover:animate-bounce" />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-cyber-cyan/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;


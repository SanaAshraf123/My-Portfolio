import { useState, useEffect } from "react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = ({ isLightMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navItems = ["Home", "About", "Experience", "Projects", "Education", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Register scroll spy events
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });

    Events.scrollEvent.register("end", (to) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    // Manual scroll detection for better accuracy
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.getElementById(item);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const offset = 150;

      let active = "Home";

      for (const section of sections) {
        const sectionTop = section.top + scrollPosition;
        const sectionBottom = sectionTop + section.height;

        if (
          scrollPosition + offset >= sectionTop - 100 &&
          scrollPosition + offset < sectionBottom - 100
        ) {
          active = section.id;
          break;
        }
      }

      if (scrollPosition < 100) {
        active = "Home";
      }

      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition + viewportHeight >= documentHeight - 100) {
        active = "Contact";
      }

      setActiveSection(active);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [navItems]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`relative z-[100] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-colors duration-300 ${
          menuOpen
            ? "border-b border-cyber-cyan/20 bg-cyber-darker shadow-lg shadow-black/50 md:border-transparent md:bg-transparent md:shadow-none"
            : scrolled
              ? "glass-effect shadow-2xl shadow-cyber-cyan/20"
              : "bg-transparent"
        }`}
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <span className={`text-2xl md:text-3xl font-bold tracking-wider ${isLightMode ? 'text-gray' : 'text-gradient'}`} style={{ fontFamily: "'Dancing Script', cursive" }}>
                Sana's World
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item;
              return (
                <li key={index}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={(to) => setActiveSection(to)}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                      isActive 
                        ? "text-cyber-cyan font-bold" 
                        : isLightMode 
                          ? "text-cyber-blue hover:text-cyber-purple" 
                          : "text-gray-300 hover:text-cyber-cyan"
                    }`}
                  >
                    {/* Gradient text effect on hover or general */}
                    <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-cyber-cyan group-hover:to-cyber-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item}
                    </span>
                    
                    {/* Active indicator underline */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover background */}
                    <span className={`absolute inset-0 bg-cyber-cyan/10 rounded-lg transition-opacity duration-300 -z-10 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-cyber-cyan/40 bg-cyber-dark text-cyber-cyan shadow-md shadow-cyber-cyan/20 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            {menuOpen ? (
              <RiCloseLine size={28} className="shrink-0" aria-hidden />
            ) : (
              <RiMenu3Line size={28} className="shrink-0" aria-hidden />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-cyber-darker/95 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, type: "spring", damping: 28 }}
              className="fixed top-0 right-0 z-[70] flex h-full w-[min(100%,20rem)] flex-col border-l border-cyber-cyan/25 bg-cyber-dark shadow-2xl sm:w-80 md:hidden"
            >
              <div className="flex shrink-0 justify-end border-b border-white/10 bg-cyber-darker px-4 py-3 sm:px-5 sm:py-4">
                <button
                  type="button"
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-cyan/40 bg-cyber-cyan/15 text-cyber-cyan transition-colors hover:bg-cyber-cyan/25"
                  onClick={() => setMenuOpen(false)}
                >
                  <RiCloseLine size={26} className="shrink-0" aria-hidden />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6 sm:px-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={(to) => setActiveSection(to)}
                      className={`block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-cyber-cyan bg-cyber-cyan/20 border-l-4 border-cyber-cyan"
                          : "text-gray-300 hover:text-cyber-cyan hover:bg-cyber-cyan/10"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
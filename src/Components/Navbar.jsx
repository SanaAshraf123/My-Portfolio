import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Logo */}
      <div className="w-full fixed top-0 z-50 bg-[#1A1A1D] shadow-md p-4">
        <span className="text-2xl font-extrabold tracking-wide text-[#A64D79] drop-shadow-lg">
          Portfolio
        </span>
      </div>

      <nav className="mt-10 items-center justify-between px-10 md:px-20 py-6 bg-[#1A1A1D] shadow-md relative">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#EAEAEA]">
          {["Home", "About", "Experience", "Projects", "Education", "Contact"].map((item, index) => (
            <li key={index} className="text-lg font-semibold cursor-pointer transition-all duration-300 group-hover:text-[#6A1E55]">
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#6A1E55] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#A64D79]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-2/3 h-full bg-[#3B1C32] shadow-lg flex flex-col items-center pt-20 gap-6 md:hidden"
            >
              {["Home", "About", "Experience", "Projects", "Education", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-lg font-semibold text-[#EAEAEA] hover:text-[#6A1E55] transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

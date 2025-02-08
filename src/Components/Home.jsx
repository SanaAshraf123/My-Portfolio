import { motion } from "framer-motion";
import Myself from "../assets/Myself.jpg";

const Home = () => {
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-10 md:px-20 md:py-0 bg-gradient-to-br from-[#1A1A1D] to-[#2D2D32]">
      {/* Left Section - Text */}
      <motion.div 
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="overflow-hidden"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#A64D79] to-[#FF6B6B] bg-clip-text text-transparent">
            Hi, I am Esha Shakir
          </h1>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl md:text-3xl font-medium mb-6 text-[#C0C0C0]">
            AI Engineer &amp; Machine Learning
          </p>
        </motion.div>

        <motion.p 
          className="text-base md:text-lg mb-8 text-[#888888] max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Transforming complex problems into intelligent solutions through deep learning and innovative AI architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="flex items-center gap-2 bg-gradient-to-r from-[#6A1E55] to-[#A64D79] text-white py-3 px-8 rounded-full font-semibold hover:from-[#A64D79] hover:to-[#6A1E55] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="relative md:w-1/2 flex justify-center"
        variants={floatingVariants}
        animate="float"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#A64D79] to-[#6A1E55] blur-2xl opacity-20 rounded-full w-64 h-64 md:w-96 md:h-96" />
        <motion.img 
          src={Myself} 
          alt="Esha Shakir" 
          className="relative z-10 rounded-full w-48 h-48 md:w-80 md:h-80 object-cover border-4 border-[#FFFFFF10] shadow-2xl hover:shadow-3xl transition-all duration-300"
          whileHover={{ scale: 1.02, rotate: 2 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;

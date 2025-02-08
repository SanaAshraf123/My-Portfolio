import { motion } from "framer-motion";
import PropTypes from "prop-types";
import bannerImg from "../../assets/banner.jpg";

const ProjectCard = ({ title, main, imgSrc = bannerImg, demoLink, sourceCode }) => {
  return (
    <motion.div
      className="relative p-6 md:p-8 flex flex-col w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#1A1A1D]/50 
      rounded-2xl text-[#EAEAEA] transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>

      {/* Image Section */}
      {imgSrc && (
        <img className="w-full h-48 object-cover rounded-lg" src={imgSrc} alt={title} />
      )}

      {/* Title */}
      <h3 className="mt-4 text-xl md:text-2xl font-bold leading-normal text-purple-400">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm md:text-lg py-2 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 
            transition-all duration-300 transform hover:scale-105"
          >
            Live Demo 🚀
          </a>
        )}
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm md:text-lg py-2 px-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 
            transition-all duration-300 transform hover:scale-105"
          >
            Source Code 📜
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Prop Validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  demoLink: PropTypes.string,
  sourceCode: PropTypes.string,
};

export default ProjectCard;



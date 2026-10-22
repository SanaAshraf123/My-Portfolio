import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, main, imgSrc, demoLink, priority }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between group bg-[#1a1a22] border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] hover:-translate-y-1.5"
    >
      {/* Project Image Preview with Gradient Overlay */}
      <div className="relative overflow-hidden h-52 sm:h-56 bg-[#121016]">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a22] via-[#1a1a22]/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Floating Category/Badge pill */}
        <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
          <span className="text-[11px] text-cyan-300 font-semibold uppercase tracking-wider">Featured Work</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
            {main}
          </p>
        </div>

        {/* View Project Button */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <a
            href={demoLink || "https://www.behance.net/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-cyan-400/10 hover:bg-cyan-400 hover:text-gray-900 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(0,217,255,0.08)] cursor-pointer group/btn"
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="text-[10px] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
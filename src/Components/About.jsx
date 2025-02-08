
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../assets/aboutmepic.jpg";

const About = () => {
  return (
    <>
      <motion.div
        className="relative h-1 bg-gradient-to-r from-transparent via-[#A64D79] to-transparent mx-20 my-12"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      
      <motion.div
        id="About"
        className="text-[#EAEAEA] flex flex-col md:flex-row items-center bg-gradient-to-br from-[#1A1A1D] to-[#2D2D32] shadow-2xl mx-4 md:mx-20 rounded-2xl p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-br from-[#A64D79] to-[#3B1C32] opacity-20" />
        
        {/* Image Section */}
        <motion.div
          className="flex justify-center w-full md:w-1/2 relative group"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#A64D79] to-[#3B1C32] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <motion.img
              className="h-64 md:h-80 rounded-xl shadow-2xl object-cover border-4 border-transparent bg-gradient-to-br from-[#A64D79] to-[#3B1C32] bg-origin-border hover:scale-105 transition-transform duration-300"
              src={AboutImg}
              alt="About"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-[#A64D79] to-[#3B1C32] bg-clip-text text-transparent">
              About Me
            </span>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-[#A64D79] to-[#3B1C32] rounded-full" />
          </h2>

          <motion.ul className="space-y-6">
            {[
              {
                title: "AI Engineer",
                description: "Experienced AI Engineer with a proven track record experienced AI Engineer with a proven track record in AI-driven solutions. Expertise innatural language processing (NLP), generativeAI. Skilled in integrating large language models(LLMs) and Retrieval-Augmented Generation (RAG) techniques to solve complex business challenges effectively.",
                color: "#A64D79",
              },
             
            ].map((item, index) => (
              <motion.li
                key={index}
                className="relative p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r from-[#1A1A1D] to-[#2D2D32] hover:shadow-lg group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-2 rounded-full bg-gradient-to-br from-[#A64D79] to-[#3B1C32]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IoArrowForward
                      size={24}
                      className={`text-white transform transition-transform group-hover:rotate-45`}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-md text-[#EAEAEA]/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#A64D79] to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;



import { motion } from "framer-motion";

import { GiArtificialIntelligence } from "react-icons/gi";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-[#0A0A0E] text-[#EAEAEA]">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#A64D79]">
        Work Experience
      </h1>

      <div className="w-24 mx-auto border-t-4 border-[#A64D79] my-6"></div>

     

      {/* Experience Cards */}
      <div className="flex justify-center mt-10">
        <motion.div
          className="w-full md:w-3/5 bg-[#1A1A1D] bg-opacity-80 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4">
            <GiArtificialIntelligence color="#FFD700" size={40} />
            <div>
              <h1 className="text-2xl font-semibold">Solutyics</h1>
              <h2 className="text-lg font-semibold text-[#A64D79]">
                Machine Learning Internee
              </h2>
              <p className="text-sm text-gray-400">NOV, 2024 - Jan, 2025</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            <li className="text-gray-300 flex gap-2 items-start">
              <span className="text-[#A64D79]">•</span> Built and optimized ML models using Python, TensorFlow, and Keras.
            </li>
            <li className="text-gray-300 flex gap-2 items-start">
              <span className="text-[#A64D79]">•</span> Designed data pipelines for cleaning, preprocessing, and feature selection.
            </li>
            <li className="text-gray-300 flex gap-2 items-start">
              <span className="text-[#A64D79]">•</span> Deployed AI applications with Flask and Streamlit.
            </li>
            <li className="text-gray-300 flex gap-2 items-start">
              <span className="text-[#A64D79]">•</span> Conducted EDA with Pandas and Matplotlib to extract insights.
            </li>
            <li className="text-gray-300 flex gap-2 items-start">
              <span className="text-[#A64D79]">•</span> Applied deep learning for advanced tasks like image processing.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;



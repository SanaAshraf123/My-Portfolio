import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-[#0A0A0E] text-white">
      {/* Section Title */}
      <motion.h1
        className="text-4xl md:text-5xl text-center font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      {/* Section Divider */}
      <div className="col-span-3 border-t-2 border-[#A64D79] my-8"></div>

      {/* Project Cards Grid */}
      <motion.div
        className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProjectCard
          title="Loan Approval Prediction"
          main="
            Built ML models to predict loan approval using Random Forest.
            Preprocessed data, applied feature selection, and deployed API.
          "
          demoLink="#"
          sourceCode="https://github.com/eshashakir"
        />

        <ProjectCard
          title="Cat vs. Dog Classification"
          main="
            Developed a CNN with TensorFlow & Keras to classify images.
            Applied image augmentation, normalization & achieved high accuracy.
          "
          demoLink="#"
          sourceCode="https://github.com/eshashakir"
        />

        <ProjectCard
          title="Sales Performance Analysis"
          main="
            Web-based sales data analysis tool with AI-generated insights.
            Integrated OpenAI GPT & Streamlit for forecasting.
          "
          demoLink="#"
          sourceCode="https://github.com/eshashakir"
        />
      </motion.div>
    </div>
  );
};

export default Projects;





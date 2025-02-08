import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  SiTensorflow,
  SiKeras,
  SiStreamlit,
  SiOpenai,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPlotly,
} from "react-icons/si";
import UniImg from "../assets/university.png";
import Superior from "../assets/superior.png";
import Pny from "../assets/pny.png";
import CosmiCode from "../assets/COSMICODE.webp";
import Navttc from "../assets/navttc.webp";





const Education = () => {

  const educationItems = [
    {
      img: UniImg,
      title: "University Name",
      degree: "Bachelor's in Computer Science",
      years: "2018 - 2022",
    },
    {
      img: Superior,
      title: "Superior College",
      degree: "Intermediate in Computer Science",
      years: "2016 - 2018",
    },
  ];
  
  const certificationItems = [
    {
      img: CosmiCode,
      title: "AI & Machine Learning Certification",
      org: "CosmiCode Academy",
    },
    {
      img: Navttc,
      title: "Full Stack Development",
      org: "NAVTTC Pakistan",
    },
    {
      img: Pny,
      title: "Full Stack Development",
      org: "NAVTTC Pakistan",
    },
  ];
   
  const technologies = [
    { icon: <GiArtificialIntelligence color="#FFD700" />, name: "Machine Learning", level: 90 },
    { icon: <SiTensorflow color="#FF6F00" />, name: "TensorFlow", level: 80 },
    { icon: <SiKeras color="#D00000" />, name: "Keras", level: 75 },
    { icon: <SiStreamlit color="#FF4B4B" />, name: "Streamlit", level: 85 },
    { icon: <SiOpenai color="#10A37F" />, name: "OpenAI", level: 80 },
    { icon: <SiScikitlearn color="#F7931E" />, name: "Deep Learning", level: 85 },
    { icon: <SiFlask color="#FFFFFF" />, name: "Flask", level: 70 },
    { icon: <FaPython color="#FFD43B" />, name: "Python Programming", level: 95 },
    { icon: <SiNumpy color="#013243" />, name: "NumPy", level: 85 },
    { icon: <SiPandas color="#130754" />, name: "Pandas", level: 80 },
    { icon: <SiPlotly color="#1F77B4" />, name: "Matplotlib", level: 75 }
  ];

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

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };



  return (
    <div id="Education" className="p-10 md:p-24 bg-[#0A0A0E] text-white overflow-hidden">
    <motion.h1
      className="text-4xl md:text-5xl text-center font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      Education & Certifications
    </motion.h1>

    <motion.div
      className="relative h-1 bg-gradient-to-r from-transparent via-[#A64D79] to-transparent mx-20 my-12"
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-10 right-40 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        transition={{ duration: 3.5 }}
      />

      {/* Education Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">EDUCATION</h2>
        
        {educationItems.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1D] to-[#0F0F12] shadow-2xl border border-white/10 hover:border-pink-500/30 transition-all group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
            <motion.img 
              src={edu.img} 
              className="w-24 mx-auto mb-4 rounded-lg shadow-lg border-2 border-white/10"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              {edu.title}
            </h3>
            <p className="text-sm text-gray-300 text-center mt-2">{edu.degree}</p>
            <p className="text-xs text-gray-400 text-center mt-1">{edu.years}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold text-purple-400 mb-6 glow-text">CERTIFICATIONS</h2>
        
        {certificationItems.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1D] to-[#0F0F12] shadow-2xl border border-white/10 hover:border-purple-500/30 transition-all group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
            <motion.img 
              src={cert.img} 
              className="w-24 mx-auto mb-4 rounded-lg shadow-lg border-2 border-white/10"
              whileHover={{ scale: 1.1 }}
            />
            <div className="text-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{cert.org}</p>
              <div className="mt-3 inline-block px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                Verified
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    
      
          {/* Technologies Section with Scroll Animation */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-purple-400 mb-6">
          Technologies & Skills
        </h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {technologies.map(({ icon, name, level }, index) => (
            <motion.div
              key={name}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center transition-all hover:scale-105 hover:shadow-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                {icon}
                <p className="text-lg font-semibold text-white">{name}</p>
                <p className="text-md font-semibold text-purple-300">{level}%</p>
              </div>

              {/* Gradient Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3 mt-3 relative">
                <motion.div
                  className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ boxShadow: "0px 0px 8px rgba(236, 72, 153, 0.6)" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
  </div>
  );
};

export default Education;





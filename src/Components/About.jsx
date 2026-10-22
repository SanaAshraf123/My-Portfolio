import { motion } from "framer-motion";
import { FaPaintBrush, FaHeart, FaUserCheck, FaBehance, FaLinkedinIn, FaDownload } from "react-icons/fa";

const About = () => {
  // Services / What I Do tags
  const services = [
    "Logo Design",
    "Complete Branding",
    "Posters",
    "Flyers",
    "Banners",
    "Mockups",
    "Social Management",
    "Post Creation",
    "Carousels",
    "Business Cards",
    "Brochures",
    "Digital Work",
    "Print Media",
    "Video Editing",
    "Visual Content",
    "UI Design",
    "Landing Pages",
    "Custom Portfolios"
  ];

  // Professional Soft Skills
  const softSkills = [
    "Creative Direction",
    "Visual Storytelling",
    "Attention to Detail",
    "Effective Communication",
    "Problem Solving",
    "Adaptability"
  ];

  // Hobbies & Creative Outlets
  const hobbies = [
    "Sketching",
    "Visual Story Conceptualization",
    "Music Curation",
    "Photography",
    "Dramas & Anime",
    "Continuous Learning"
  ];

  return (
    <section id="About" className="relative min-h-screen py-24 flex items-center justify-center bg-[#121016] text-white transition-colors duration-500 overflow-hidden">
      {/* Background Glowing Light Shades */}
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Intro & Socials */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Upper Content Group */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-500/10">
                  <FaPaintBrush className="text-lg" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With over 4+ years of experience in the creative field, I handle everything you need to bring a brand to life. From creating unique logos and complete brand identities to designing eye-catching posters, flyers, banners, and managing social media, I take care of all your digital and print media needs.
              </p>

              {/* Gradient Highlighted Box Area */}
              <div className="py-2">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent pl-4 py-3 rounded-r-xl border-l-4 border-cyan-400 italic shadow-inner">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-medium">
                    "I love clean designs that are easy to understand. While most people choose loud and crowded colors, white is my favorite risk because it gives a very clean and fresh look. I know the rules of design, and I break them carefully to make your brand stand out."
                  </span> ♨︎_♨︎
                </p>
              </div>
            </div>

            {/* Bottom Socials & Download Section */}
            <div className="pt-6 pb-2 border-t border-cyan-500/20 mt-auto">
              <h4 className="text-sm font-semibold tracking-wide text-gray-300 uppercase mb-3">Follow Me On</h4>
              <div className="flex items-center justify-between gap-4">
                
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.behance.net/SANAASHRAFBORAS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#1D1924]/80 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-md shadow-cyan-500/10 hover:scale-110"
                    aria-label="Behance"
                  >
                    <FaBehance className="text-lg" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/sana-ashraf-211834241/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#1D1924]/80 border border-purple-500/30 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md shadow-purple-500/10 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>

                  <a 
                    href="https://www.upwork.com/freelancers/~01cdef461e0ce0adaf?viewMode=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 rounded-xl bg-[#1D1924]/80 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-md shadow-emerald-500/10 hover:scale-110 flex items-center justify-center font-bold text-sm tracking-tighter"
                    aria-label="Upwork"
                  >
                    UP
                  </a>
                </div>

                {/* Download CV Button */}
                <div>
                  <a 
                    href="/path-to-your-cv.pdf" 
                    download="Sana_Ashraf_CV.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                  >
                    <FaDownload className="text-xs" />
                    <span>Download CV</span>
                  </a>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Right Column - Professional Cards */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Card 1: What I Do */}
            <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-black/70 backdrop-blur-xl shadow-2xl hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FaPaintBrush className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">What I Do</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {services.map((service, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-black/50 text-cyan-300 border border-cyan-500/30 shadow-sm hover:scale-105 transition-transform"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Soft Skills */}
            <div className="p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-black/70 backdrop-blur-xl shadow-2xl hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FaUserCheck className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-black/50 text-purple-300 border border-purple-500/30 shadow-sm hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Hobbies & Creative Outlets */}
            <div className="p-6 sm:p-8 rounded-2xl border border-pink-500/20 bg-black/70 backdrop-blur-xl shadow-2xl hover:border-pink-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <FaHeart className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Hobbies & Creative Outlets</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-black/50 text-pink-300 border border-pink-500/30 shadow-sm hover:scale-105 transition-transform"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
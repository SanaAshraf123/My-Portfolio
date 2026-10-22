import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaEye, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  // Slider ke liye items (Images + Videos)
  const showcaseProjects = [
    { id: "01", title: "User Interface UI", subtitle: "UI/UX Design", type: "image", media: "/image-1.jpg" },
    { id: "02", title: "Mobile Screen UI", subtitle: "UI/UX Design", type: "image", media: "/image-2.png" },
    { id: "03", title: "Full Brand Identity Suit", subtitle: "Visual Branding", type: "image", media: "/image-3.png" },
    { id: "04", title: "Full Brand Identity", subtitle: "Visual Branding", type: "image", media: "/image-4.png" },
    { id: "05", title: "Web Screen UI", subtitle: "UI/UX Design", type: "image", media: "/image-5.png" },
    { id: "06", title: "Digital UserInterface UI", subtitle: "UI/UX Design", type: "image", media: "/image-6.png" },
    { id: "07", title: "SocialMedia Platform Post", subtitle: "Digital Designs", type: "image", media: "/image-7.png" },
    { id: "08", title: "Social Post", subtitle: "Digital Web Design", type: "image", media: "/image-8.png" },
    { id: "09", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-9.png" },
    { id: "10", title: "Conceptual Video Post", subtitle: "Post/Video Design", type: "image", media: "/image-10.png" },
    { id: "11", title: "AI Storytelling Video Project", subtitle: "Video Project", type: "video", media: "/video1.mp4" },
    { id: "12", title: "AI Storytelling Video Project", subtitle: "Video Project", type: "video", media: "/video2.mp4" },
    { id: "13", title: "AI Storytelling Video Project", subtitle: "Video Project", type: "video", media: "/video3.mp4" },
    { id: "14", title: "AI Storytelling Video Project", subtitle: "Video Project", type: "video", media: "/video4.mp4" },
    { id: "15", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-15.jpeg" },
    { id: "16", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-16.jpeg" },
    { id: "17", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-17.jpeg" },
    { id: "18", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-18.jpeg" },
    { id: "19", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-19.jpeg" },
    { id: "20", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-20.jpeg" },
    { id: "21", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-21.jpeg" },
    { id: "22", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-22.jpeg" },
     { id: "23", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-23.jpg" },
      { id: "24", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-24.jpg" },
       { id: "25", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-25.jpg" },
        { id: "26", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-26.jpeg" },
         { id: "27", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-27.png" },
          { id: "28", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-28.png" },
           { id: "29", title: "logos design on Tshirts", subtitle: "Logos Design", type: "image", media: "/image-29.png" },
            { id: "30", title: "Companines Personal Post", subtitle: "Posts Design", type: "image", media: "/image-30.png" },
            { id: "30", title: "Companines Carousel Post", subtitle: "Posts Design", type: "image", media: "/image-31.png" },
            { id: "30", title: "Carousel Post", subtitle: "Posts Design", type: "image", media: "/image-32.png" },
            { id: "30", title: "Carpusel Post", subtitle: "Posts Design", type: "image", media: "/image-33.png" },
            { id: "30", title: "Designs", subtitle: "Posts Design", type: "image", media: "/image-34.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // 👈 Alag alag videos ki sound control karne ke liye states (Slider aur Gallery ke liye alag)
  const [mutedSliderIndex, setMutedSliderIndex] = useState(null);
  const [mutedGalleryIndex, setMutedGalleryIndex] = useState(null);

  // Gallery Modal ke liye Items (Images + Videos)
  const allGalleryImages = [
    { title: "User Interface UI", category: "branding", type: "image", media: "/image-1.jpg" },
    { title: "Mobile Screen UI", category: "printing", type: "image", media: "/image-2.png" },
    { title: "AI Cartonic Storytelling Video", category: "video", type: "video", media: "/video1.mp4" },
    { title: "Full Brand Identity Suit", category: "printing", type: "image", media: "/image-3.png" },
    { title: "Web Screen UI", category: "posters", type: "image", media: "/image-5.png" },
    { title: "Full Brand Identity Suit", category: "social", type: "image", media: "/image-4.png" },
    { title: "Digital UserInterface UI", category: "logos", type: "image", media: "/image-6.png" },
    { title: "AI Cartonic Storytelling Video", category: "video", type: "video", media: "/video2.mp4" },
    { title: "SocialMedia Platform Post", category: "ui", type: "image", media: "/image-7.png" },
    { title: "Social Post", category: "ui", type: "image", media: "/image-8.png" },
    { title: "Companies Personal Post", category: "ui", type: "image", media: "/image-9.png" },
    { title: "Conceptual Video Post", category: "ui", type: "image", media: "/image-10.png" },
    { title: "AI Cartonic Storytelling Video", category: "video", type: "video", media: "/video3.mp4" },
    { title: "AI Cartonic Storytelling Video", category: "video", type: "video", media: "/video4.mp4" },
     { title: "Social Post", category: "Designs", type: "image", media: "/image-15.jpeg" },
      { title: "Social Post", category: "Designs", type: "image", media: "/image-16.jpeg" },
       { title: "Social Post", category: "Designs", type: "image", media: "/image-17.jpeg" },
        { title: "Social Post", category: "Designs", type: "image", media: "/image-18.jpeg" },
         { title: "Social Post", category: "Designs", type: "image", media: "/image-19.jpeg" },
          { title: "Social Post", category: "Designs", type: "image", media: "/image-20.jpeg" },
           { title: "Social Post", category: "Designs", type: "image", media: "/image-21.jpeg" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-22.jpeg" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-23.jpg" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-24.jpg" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-25.jpg" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-26.jpeg" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-27.png" },
            { title: "Social Post", category: "Designs", type: "image", media: "/image-28.png" },
            { title: "logos design on Tshirts", category: "Logos", type: "image", media: "/image-29.png" },
            { title: "Web User Interface", category: "ui", type: "image", media: "/image-30.png" },
            { title: "Companines Carousel Post", category: "Post Design", type: "image", media: "/image-31.png" },
            { title: "Carousel Post", category: "Post Design", type: "Post Design", media: "/image-32.png" },
            { title: "Carousel Post", category: "Post Design", type: "Post Design", media: "/image-33.png" },
            { title: "Designs Post", category: "Design", type: "Design", media: "/image-34.png" }
  ];

  const filteredImages = activeTab === "all" 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === activeTab);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const marqueeItems = ["Branding", "Digital work", "Printing Work", "Social Work", "Posters", "Logos", "UI", "Videos"];

  return (
    <>
      <section id="Projects" className="relative pt-6 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-[#121016] text-white">
        
        {/* Background Glowing Light Shades */}
        <div className="absolute top-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* --- DESIGNER TICKER BAR --- */}
        <div className="w-full overflow-hidden py-3.5 border-y mb-12 shadow-xl bg-[#121016] border-white/5 text-gray-300">
          <motion.div
            className="flex whitespace-nowrap gap-12 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 shrink-0">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                  {text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 opacity-80" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 space-y-3"
          >
            <span className="text-cyan-400 font-medium tracking-[0.3em] uppercase text-xs block mb-3">
              CURATED ARTWORKS
            </span>
            
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2 flex flex-wrap items-center justify-center gap-x-3 text-white">
                <span className="relative inline-block pb-2">
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent font-black">
                    Collection
                  </span>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </span>
                <span className="font-bold opacity-90">of My Creative Journey</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed mt-4 text-gray-300">
              Take a look around — every design tells a visual story, built with clean geometry, balanced whitespace, and artistic passion.
            </p>
          </motion.div>

          {/* View Gallery Button */}
          <motion.div 
            className="mb-14"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-medium transition-all duration-300 group cursor-pointer border backdrop-blur-md shadow-lg bg-white/[0.04] border-cyan-500/30 text-white hover:border-cyan-500/50 hover:bg-white/[0.08] shadow-[0_8px_25px_rgba(0,217,255,0.1)]"
            >
              <span className="font-medium tracking-wide">Explore Full Gallery</span>
              <div className="w-7 h-7 rounded-full bg-cyan-400/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-gray-900 flex items-center justify-center transition-all">
                <FaArrowRight className="text-xs" />
              </div>
            </button>
          </motion.div>

          {/* Interactive 3D Showcase Slider */}
          <div className="relative w-full max-w-6xl mx-auto h-[390px] sm:h-[420px] flex items-center justify-center overflow-visible mb-16">
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 sm:left-2 z-40 w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl bg-white/[0.04] border-cyan-500/30 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-0 sm:right-2 z-40 w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl bg-white/[0.04] border-cyan-500/30 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
            >
              <FaChevronRight className="text-sm" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              {showcaseProjects.map((proj, idx) => {
                const offset = (idx - currentIndex + showcaseProjects.length) % showcaseProjects.length;
                const isThisVideoMuted = mutedSliderIndex !== idx; // 👈 Check karein ke kya sirf yeh wali video muted hai ya nahi
                
                let xPos = "0px";
                let scaleVal = 1;
                let opacityVal = 0;
                let zIndexVal = 0;
                let blurVal = "blur(0px)";

                if (offset === 0) {
                  xPos = "0px";
                  scaleVal = 1;
                  opacityVal = 1;
                  zIndexVal = 30;
                  blurVal = "blur(0px)";
                } else if (offset === 1) {
                  xPos = "240px";
                  scaleVal = 0.85;
                  opacityVal = 0.7;
                  zIndexVal = 20;
                  blurVal = "blur(1px)";
                } else if (offset === 2) {
                  xPos = "440px";
                  scaleVal = 0.7;
                  opacityVal = 0.3;
                  zIndexVal = 10;
                  blurVal = "blur(2px)";
                } else if (offset === showcaseProjects.length - 1) {
                  xPos = "-240px";
                  scaleVal = 0.85;
                  opacityVal = 0.7;
                  zIndexVal = 20;
                  blurVal = "blur(1px)";
                } else if (offset === showcaseProjects.length - 2) {
                  xPos = "-440px";
                  scaleVal = 0.7;
                  opacityVal = 0.3;
                  zIndexVal = 10;
                  blurVal = "blur(2px)";
                }

                return (
                  <motion.div
                    key={idx}
                    animate={{ 
                      x: xPos, 
                      scale: scaleVal, 
                      opacity: opacityVal,
                      filter: blurVal
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ zIndex: zIndexVal }}
                    className={`absolute w-[250px] sm:w-[290px] rounded-3xl overflow-hidden border shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#1a1a22] border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] ${
                      opacityVal === 0 ? 'pointer-events-none' : 'cursor-pointer'
                    }`}
                    onClick={() => {
                      if (offset === 1) nextSlide();
                      if (offset === showcaseProjects.length - 1) prevSlide();
                      if (offset === 0) setIsGalleryOpen(true);
                    }}
                  >
                    <div 
                      className="h-[320px] sm:h-[340px] w-full overflow-hidden relative group bg-neutral-900 flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        if (proj.type === "video") {
                          // Agar yehhi video pehle se unmuted hai toh mute kar do, warna iski awaz khol do
                          setMutedSliderIndex(mutedSliderIndex === idx ? null : idx);
                        }
                      }}
                    >
                      {proj.type === "video" ? (
                        <>
                          <video
                            src={proj.media}
                            autoPlay
                            loop
                            muted={isThisVideoMuted}
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 text-[10px] border border-white/20">
                            {isThisVideoMuted ? "🔇 Click for Sound" : "🔊 Sound On"}
                          </div>
                        </>
                      ) : (
                        <img
                          src={proj.media}
                          alt={proj.title}
                          className="w-full h-full object-contain p-2 object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                      
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 z-10">
                        <span className="text-xs text-cyan-300 font-medium">#{proj.id}</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#1a1a22]/80 flex justify-between items-center shadow-lg z-10">
                        <div className="text-left">
                          <h4 className="font-semibold text-sm truncate text-white">{proj.title}</h4>
                          <span className="text-[11px] block text-gray-400">{proj.subtitle}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsGalleryOpen(true);
                          }}
                          className="w-9 h-9 rounded-xl bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 flex items-center justify-center text-xs transition-all cursor-pointer"
                          title="View Gallery"
                        >
                          <FaEye />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* --- CLOSING / OUTRO SECTION --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 pt-12 border-t border-white/10 text-left max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-2"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-12 bg-cyan-400"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-medium">/ THE CREATIVE ODYSSEY CONTINUES</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                Every project begins as <span className="text-cyan-400">uncertainty.</span>
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                What you've seen here is a collection of experiments, obsessions, mistakes, iterations, and <span className="text-purple-400">breakthroughs</span>. Thanks for spending a few minutes inside my creative world.
              </p>

              <div className="pt-2">
                <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">[ WHAT HAPPENS NEXT ? ]</span>
                <p className="text-lg font-semibold text-white">
                  Hopefully, <span className="text-cyan-400 underline decoration-cyan-500/50 underline-offset-4"> a conversation.</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl max-w-sm w-full text-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/15 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 py-6">
                  <span className="inline-block text-3xl mb-3">☕</span>
                  <h4 className="font-bold text-lg text-white mb-2">Let's Create Together</h4>
                  <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                    Have a project in mind or want to collaborate? My inbox is always open.
                  </p>
                  <a
                    href="#Contact" 
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
                  >
                    <span>Get In Touch</span>
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Full Art Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-2xl overflow-y-auto px-4 sm:px-8 py-12 bg-[#121016]/95 text-white"
          >
            <div className="max-w-7xl mx-auto">
              
              <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                <div>
                  <span className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-semibold block mb-1">
                    Creative Portfolio Showcase
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Sana's Art Gallery
                  </h2>
                </div>
                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-all cursor-pointer bg-white/5 border-white/10 text-gray-300 hover:text-white hover:border-cyan-400"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  { id: "all", label: "All Works" },
                  { id: "branding", label: "Branding" },
                  { id: "printing", label: "Printing Work" },
                  { id: "social", label: "Social Work" },
                  { id: "posters", label: "Posters" },
                  { id: "logos", label: "Logos" },
                  { id: "ui", label: "UI" },
                  { id: "video", label: "AI Video" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-xl font-medium text-sm capitalize transition-all duration-300 border cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-md shadow-cyan-500/10"
                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredImages.map((img, idx) => {
                  const isThisGalleryVideoMuted = mutedGalleryIndex !== idx; // 👈 Gallery ke liye individual state

                  return (
                    <motion.div
                      key={idx}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl overflow-hidden border shadow-xl transition-all bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-cyan-500/30"
                    >
                      <div 
                        className="h-72 overflow-hidden relative group bg-neutral-900 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          if (img.type === "video") {
                            setMutedGalleryIndex(mutedGalleryIndex === idx ? null : idx);
                          }
                        }}
                      >
                        {img.type === "video" ? (
                          <>
                            <video
                              src={img.media}
                              autoPlay
                              loop
                              muted={isThisGalleryVideoMuted}
                              playsInline
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 text-[10px] border border-white/20">
                              {isThisGalleryVideoMuted ? "🔇 Click for Sound" : "🔊 Sound On"}
                            </div>
                          </>
                        ) : (
                          <img
                            src={img.media}
                            alt={img.title}
                            className="w-full h-full object-contain p-2 object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        )}

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-xs flex items-center gap-2">
                            <span>View Artwork</span>
                            <FaExternalLinkAlt />
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex justify-between items-center">
                        <h4 className="font-medium text-base text-white">{img.title}</h4>
                        <span className="text-xs uppercase px-2.5 py-1 rounded-lg border bg-white/5 text-cyan-300 border-white/10">
                          {img.category}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
import { useState } from "react";
import About from "./Components/About";
import Experience from "./Components/Experiance";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education";
import ContactForm from "./Components/ContactForm";
import ScrollToTop from "./Components/Scroll";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${isLightMode ? 'bg-[#F8F9FA] text-gray-900' : 'bg-cyber-darker text-white'}`}>
      {/* Global Background Effects */}
      <div className={`fixed inset-0 bg-cyber-grid pointer-events-none z-0 ${isLightMode ? 'opacity-5' : 'opacity-10'}`}></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        
        {/* Alternating background colors for sections when In Heaven (light mode) is active */}
        <section id="Home" className={`transition-colors duration-500 ${isLightMode ? 'bg-[#F8F9FA]' : 'bg-cyber-darker'}`}>
          <Home isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        </section>
        
        <section id="About" className={`transition-colors duration-500 ${isLightMode ? 'bg-white' : 'bg-cyber-darker'}`}>
          <About isLightMode={isLightMode} />
        </section>
        
        <div className={`transition-colors duration-500 ${isLightMode ? 'bg-[#F8F9FA]' : 'bg-cyber-darker'}`}>
          <Experience isLightMode={isLightMode} />
        </div>
        
        <section id="Projects" className={`transition-colors duration-500 ${isLightMode ? 'bg-white' : 'bg-cyber-darker'}`}>
          <Projects isLightMode={isLightMode} />
        </section>
        
        <section id="Education" className={`transition-colors duration-500 ${isLightMode ? 'bg-[#F8F9FA]' : 'bg-cyber-darker'}`}>
          <Education isLightMode={isLightMode} />
        </section>
        
        <section id="Contact" className={`transition-colors duration-500 ${isLightMode ? 'bg-white' : 'bg-cyber-darker'}`}>
          <ContactForm isLightMode={isLightMode} />
        </section>
        
        <Footer isLightMode={isLightMode} />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
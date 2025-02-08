import About from "./Components/About";
import Experience from "./Components/Experiance"; 
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="bg-[#1A1A1D] h-auto w-full">
      <Navbar />
      <section id="Home"><Home /></section>
      <section id="About"><About /></section>
     <Experience />
      <section id="Projects"><Projects /></section>
      <section id="Education"><Education /></section>
      <section id="Contact"><ContactForm /></section>
      <Footer />
    </div>
  );
}

export default App;

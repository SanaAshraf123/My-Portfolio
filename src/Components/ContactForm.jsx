import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", message: "" };
    
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|pk)$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus("Please fill in all fields correctly.");
      return;
    }
    try {

      // iahan pir service id dani ha or Template id or user id 
      const response = await emailjs.send(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        formData, 
        "YOUR_USER_ID"
      );
      


      if (response.status === 200) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Something went wrong, please try again.");
      }
    } catch (error) {
      setFormStatus(`Something went wrong - ${error}`);
    }
  };

  return (
    <section id="Contact" className="relative p-8 md:p-16 lg:p-24 text-white min-h-screen bg-gradient-to-br from-[#1a1a1d] via-[#2d1a24] to-[#3b1c32]">
      <div className="absolute inset-0 bg-[url('/subtle-grid.png')] opacity-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <div className="bg-glass backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#FF7EB3] to-[#A64D79] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div 
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#ffffff08] to-[#ffffff02] border border-white/5"
              >
                <h2 className="text-2xl font-semibold mb-6 text-[#FF7EB3]">Connect With Me</h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-[#A64D79] group-hover:bg-[#FF7EB3] transition-colors">
                      <MdOutlineEmail size={24} className="text-white" />
                    </div>
                    <span className="text-[#d1d1d1] group-hover:text-[#FF7EB3] transition-colors">
                      eshas2453@gmail.com
                    </span>
                  </li>
                  <a href="https://www.linkedin.com/in/eshashakir" target="_blank" rel="noopener noreferrer" className="block">
                    <li className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-[#A64D79] group-hover:bg-[#FF7EB3] transition-colors">
                        <CiLinkedin size={24} className="text-white" />
                      </div>
                      <span className="text-[#d1d1d1] group-hover:text-[#FF7EB3] transition-colors">
                        in/eshashakir
                      </span>
                    </li>
                  </a>
                  <a href="https://github.com/eshashakir" target="_blank" rel="noopener noreferrer" className="block">
                    <li className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-[#A64D79] group-hover:bg-[#FF7EB3] transition-colors">
                        <FaGithub size={24} className="text-white" />
                      </div>
                      <span className="text-[#d1d1d1] group-hover:text-[#FF7EB3] transition-colors">
                        github/eshashakir
                      </span>
                    </li>
                  </a>
                </ul>
              </motion.div>

              <div className="hidden lg:block relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7EB366] to-[#A64D7966] blur-[100px] opacity-30"></div>
                <div className="relative h-full rounded-xl border border-white/10 bg-[#ffffff05] backdrop-blur-sm"></div>
              </div>
            </div>

            {/* Contact Form */}
            {/* idher handle submit ka functio n use ho raha jo email send kara ga  */}
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#ffffff0d] border border-white/10 rounded-xl text-white placeholder-[#ffffff50] focus:outline-none focus:border-[#FF7EB3] focus:ring-2 focus:ring-[#FF7EB333] transition-all"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-2 text-[#ffffff80] pointer-events-none transition-all duration-300"
                >
                  Name
                </label>
                {errors.name && <p className="text-[#FF6F61] text-sm mt-2 ml-2">{errors.name}</p>}
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#ffffff0d] border border-white/10 rounded-xl text-white placeholder-[#ffffff50] focus:outline-none focus:border-[#FF7EB3] focus:ring-2 focus:ring-[#FF7EB333] transition-all"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-2 text-[#ffffff80] pointer-events-none transition-all duration-300"
                >
                  Email
                </label>
                {errors.email && <p className="text-[#FF6F61] text-sm mt-2 ml-2">{errors.email}</p>}
              </div>

              <div className="relative">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#ffffff0d] border border-white/10 rounded-xl text-white placeholder-[#ffffff50] focus:outline-none focus:border-[#FF7EB3] focus:ring-2 focus:ring-[#FF7EB333] transition-all resize-none"
                  placeholder=" "
                  rows="4"
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-2 text-[#ffffff80] pointer-events-none transition-all duration-300"
                >
                  Message
                </label>
                {errors.message && <p className="text-[#FF6F61] text-sm mt-2 ml-2">{errors.message}</p>}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF7EB3] to-[#A64D79] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#FF7EB333] transition-all"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </motion.button>

              {formStatus && (
                <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
                  formStatus.includes("successfully") 
                    ? "bg-green-900/30 text-green-400" 
                    : "bg-red-900/30 text-red-400"
                }`}>
                  {formStatus}
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;



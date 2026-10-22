import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { SiUpwork, SiBehance } from "react-icons/si";
import { FaPaperPlane } from "react-icons/fa";
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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Sana Ashraf",
        reply_to: formData.email,
        from_contact: "N/A",
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Something went wrong, please try again.");
      }
    } catch (error) {
      setFormStatus(`Something went wrong - ${error.text || error.message}`);
    }
  };

  const floatingPills = [
    { title: "Brand Identity", rotate: "-6deg" },
    { title: "Custom Merch", rotate: "8deg" },
    { title: "Printing Work", rotate: "-4deg" },
    { title: "Graphic Design", rotate: "6deg" },
    { title: "Social Design", rotate: "-8deg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="Contact" 
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 min-h-screen overflow-hidden bg-[#121016] text-white"
    >
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16 pt-4">
          <span className="text-cyan-400 font-semibold tracking-[0.25em] uppercase text-xs block mb-3">
            READY TO COLLABORATE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 text-white">
            Got a Dream Project?<span className="text-cyan-400">✨</span>
          </h2>
          <p className="text-base sm:text-xl font-light max-w-xl mx-auto text-gray-300">
            Let's Create It Together!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto overflow-hidden px-2">
            {floatingPills.map((pill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                style={{ rotate: pill.rotate }}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md cursor-default border shadow-sm bg-[#121016] border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.15)]"
              >
                {pill.title}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="rounded-3xl border p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-xl bg-[#121016] border-cyan-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            
            <div className="space-y-6">
              <div className="rounded-2xl border p-6 sm:p-8 bg-[#121016] border-cyan-500/25">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Let's talk about everything!
                </h3>
                <p className="text-sm mb-8 font-light text-gray-400">
                  Don't like forms? Send me an email directly or connect with me on my professional profiles.
                </p>

                <ul className="space-y-5">
                  <motion.li whileHover={{ x: 5 }} className="flex items-center gap-4 group cursor-pointer">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold">
                      <MdOutlineEmail className="h-5 w-5" />
                    </div>
                    <span className="text-sm sm:text-base transition-colors break-all text-gray-300 group-hover:text-cyan-400">
                      iamsanaashraf999@gmail.com
                    </span>
                  </motion.li>

                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="block">
                    <motion.li whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-bold">
                        <CiLinkedin className="h-6 w-6" />
                      </div>
                      <span className="text-sm sm:text-base transition-colors text-gray-300 group-hover:text-purple-400">
                        LinkedIn Profile
                      </span>
                    </motion.li>
                  </a>

                  <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="block">
                    <motion.li whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-bold">
                        <SiBehance className="h-5 w-5" />
                      </div>
                      <span className="text-sm sm:text-base transition-colors text-gray-300 group-hover:text-blue-400">
                        Behance Portfolio
                      </span>
                    </motion.li>
                  </a>

                  <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="block">
                    <motion.li whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 font-bold">
                        <SiUpwork className="h-5 w-5" />
                      </div>
                      <span className="text-sm sm:text-base transition-colors text-gray-300 group-hover:text-emerald-400">
                        Upwork Profile
                      </span>
                    </motion.li>
                  </a>
                </ul>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-4 text-sm transition-all focus:outline-none focus:ring-2 bg-[#121016] border-cyan-500/25 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400/30"
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400 ml-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-4 text-sm transition-all focus:outline-none focus:ring-2 bg-[#121016] border-cyan-500/25 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400/30"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400 ml-1">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border p-4 text-sm transition-all focus:outline-none focus:ring-2 bg-[#121016] border-cyan-500/25 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400/30"
                  placeholder="Tell me about your project or idea..."
                  rows="4"
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400 ml-1">{errors.message}</p>}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 217, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-cyan-400 text-black py-4 px-8 rounded-xl text-base font-bold shadow-lg shadow-cyan-400/20 hover:bg-cyan-300 transition-all cursor-pointer"
              >
                <FaPaperPlane className="text-sm" />
                <span>Send Message</span>
              </motion.button>

              {formStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-xl text-center text-sm border ${
                    formStatus.includes("successfully") 
                      ? "border-green-500/30 text-green-400 bg-green-500/10" 
                      : "border-red-500/30 text-red-400 bg-red-500/10"
                  }`}
                >
                  {formStatus}
                </motion.div>
              )}
            </motion.form>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
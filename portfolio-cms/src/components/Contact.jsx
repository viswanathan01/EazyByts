import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Title from "./Title";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    


try {
  await emailjs.send(
    "service_jt4g2zc",
    "template_m6spz5c",
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject, 
      message: formData.message
    },
    "9afav2u9Qajc5aW2D"
  );
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" , subject: ""});
    } catch (error) {
      setStatus("Failed to send message. ❌");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-500 text-white">
      <div className="max-w-4xl mx-auto px-8">
        
        <motion.h2
          className="text-5xl font-extrabold  mb-14 text-center tracking-wider text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Title text1={"CONTACT"} text2={"ME"} />
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.2),_-6px_-6px_10px_rgba(255,255,255,0.2)] max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
         
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-2 text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none shadow-inner shadow-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-2 text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none shadow-inner shadow-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-2 text-lg">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none shadow-inner shadow-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-2 text-lg">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-none outline-none shadow-inner shadow-gray-900 focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            className="w-full cursor-pointer mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3 rounded-lg text-white font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {status && <p className="mt-4 text-green-400 text-center">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;



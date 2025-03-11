import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[100px] md:pt-[100px] pb-[80px] md:pb-[100px]">
      <Title text1={"ABOUT"} text2={"ME"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl w-full">
        
      <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all duration-300 ease-in-out"
          >
        <motion.div
          className="bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center p-6 rounded-3xl shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src={assets.pfp}
            className="h-60 w-60 object-cover rounded-3xl shadow-2xl"
            whileHover={{ rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 0.5 }}
          />

        </motion.div>
        </motion.div>

        <motion.div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full max-w-lg mx-auto">
          
          <motion.h1
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-cyan-300  ml-2 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)] text-3xl md:text-5xl  "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            SELF-SUMMARY
          </motion.h1>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all duration-300 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 mt-7 rounded-3xl shadow-lg"
            >
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-white text-3xl font-extrabold font-[Montserrat] mt-2"
              >
                VISWANATHAN R
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-gray-300 uppercase tracking-widest text-sm mt-2"
              >
                I'm a passionate Frontend Developer skilled in building dynamic, user-friendly websites with seamless experiences. I focus on performance, responsiveness, and modern design trends to create intuitive digital solutions.
              </motion.p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl w-full mt-12">
         
      <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all duration-300 ease-in-out"
          >
        <motion.div
          className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-white text-3xl font-bold mb-4 font-[Montserrat]">Experience</h2>
          <ul className="text-gray-300 text-md space-y-2 uppercase tracking-wide">
            <li> Frontend Developer Intern – <a href="https://www.edgeinterns.com/" target="_blank" className="text-blue-400"> EdgeInterns.ai </a> <br/> <span className="text-gray-500">(Feb/2025 - March/2025)</span> </li>
            <li> Web Developer Intern - <a href="https://eazybyts.com/" target="_blank"  className="text-blue-400">EazyByts</a><br/> <span className="text-gray-500">(march/2025 - april/2025)</span> </li>
          </ul>
        </motion.div>
        </motion.div>


        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-all duration-300 ease-in-out"
          >
        <motion.div
          className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-white text-3xl font-bold mb-4 font-[Montserrat]">Education</h2>
          <ul className="text-gray-300 text-md space-y-2 uppercase tracking-wide">
            <li>🎓 Bachelor's in Information Technology - <a href="https://alphagroup.edu/engineering/" target="_blank" className="text-blue-400"> Alpha College of Engineering, Thirumazhisai </a> <br/> <span className="text-gray-500">(2023 - 2027)</span></li>
          </ul>
        </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMe;

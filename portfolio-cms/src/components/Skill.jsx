import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { useData } from '../context/DataProvider';



const Skill = () => {
    const {skills}= useData();
  return (
    <section  className="py-24 bg-gray-500 text-white">
      <div className="max-w-5xl mx-auto px-8">
      
        <motion.h2
          className="text-5xl font-extrabold  mb-14 text-center tracking-wider text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 ,ease: "easeInOut"}}
          viewport={{ once: true }}
        >
          <Title text1={"MY"} text2={"SKILLS"}/>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          {skills.map((skill, index) => (
            
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.2),_-6px_-6px_10px_rgba(255,255,255,0.2)] transition-all hover:scale-105  hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
              initial={{ opacity: 0, x:-50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-300">{skill.name}</h3>
                <motion.span
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                  viewport={{ once: true }}
                >
                  {skill.level}
                </motion.span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 h-4 rounded-full shadow-md"
                  initial={{ width: "0%" }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
      
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

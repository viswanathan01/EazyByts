import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useData } from '../context/DataProvider';
import Title from '../components/Title';

const Project = () => {
  const { projects } = useData();
  const [loading, setLoading] = useState(true);

  // Simulate loading until projects are fetched
  useEffect(() => {
    if (projects && projects.length > 0) {
      setLoading(false);
    }
  }, [projects]);

  return (
    <div className='min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[110px] md:pt-[100px] pb-[80px] md:pb-[100px]'>
      <Title text1={"My"} text2={"Projects"} />

      {loading ? (
        // 🔹 Loading Animation
        <motion.div
                  className="flex flex-col justify-center items-center h-64"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="w-16 h-16 border-4 border-t-blue-400 border-white rounded-full animate-spin mb-4"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.p
                    className="text-white text-lg font-semibold tracking-wide"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    Loading Projects...
                  </motion.p>
                </motion.div>
      ) : (
        // 🔹 Projects Grid
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-[30px] items-center max-w-5xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300 ease-in-out"
            >
              <motion.div
                className="p-8 flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.2),_-6px_-6px_10px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full h-56 object-cover rounded-1xl shadow-2xl"
                  src={project.image}
                  alt={project.title}
                />

                <div className="flex flex-col justify-center items-center pt-5">
                  <p className="text-white text-lg uppercase font-semibold">{project.title}</p>
                  <p className="text-gray-400 text-md font-medium pt-2">{project.description}</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-between gap-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;

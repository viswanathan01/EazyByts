import React from "react";
import { motion } from "framer-motion";

const Title = ({ text1, text2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-flex gap-4 items-center mb-8 relative"
    >
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-cyan-300 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]"
      >
        {text1}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-cyan-300 font-extrabold ml-2 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
          {text2}
        </span>
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-16 sm:w-20 h-[3px] bg-gradient-to-r from-gray-400 to-cyan-300 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -right-6 -top-3 w-4 h-4 bg-gradient-to-r from-gray-500 to-cyan-300 shadow-2xl rounded-full"
      />
    </motion.div>
  );
};

export default Title;
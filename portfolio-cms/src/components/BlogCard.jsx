import { useParams,useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import Title from "./Title";
import { motion } from "framer-motion";
import React from "react";

const BlogCard = () => {
  const { _id } = useParams();
  const { blogs } = useData();
  const navigate = useNavigate();
  const blogIndex = blogs.findIndex((b) => b._id === _id);
  const blog = blogs.find((b) => b._id === _id);
    
  if (!blog) return <div className="min-h-screen pt-[150px] bg-black"><p className="text-white text-center">Blog not found <br/> <button onClick={() => navigate("/") } className="border-2 border-amber-200 cursor-pointer text-cyan-500">Go back to home</button></p></div>;

  return (
    <div className="min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[110px] md:pt-[120px] pb-[80px] md:pb-[100px]">
      <Title text1={''} text2={blog.title}/>

      <motion.div
        initial={{ opacity: 0, scale:0.3 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-3xl w-full"
        >

          <img src={blog.thumbnail} className="w-200 pt-7"  loading="lazy"/>

        <div className="pt-7">
        <p className="text-md text-cyan-400 uppercase font-semibold">{blog.category} / {blog.date} / {blog.readTime}</p>
        <div className="pt-4">
            {blog.description.split(".").map((sentence, index) =>
              sentence.trim() ? (
                <p key={index} className="text-md text-gray-300 uppercase pt-2 font-semibold mb-4">
                  {sentence}.
                </p>
              ) : null
            )}
        </div>

          <button 
            onClick={() => navigate("/blog")} 
            className="mt-6 cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3 rounded-lg text-white font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]">
            Back to Blogs
          </button>

          <div className="mt-8">
            {blogIndex > 0 && (
              <button
                className="px-4 cursor-pointer py-2 mr-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3 rounded-lg text-white font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                onClick={() => navigate(`/blog/${blogs[blogIndex - 1]._id}`)}
              >
                ← Previous
              </button>
            )}
            {blogIndex < blogs.length - 1 && (
              <button
                className="px-4 cursor-pointer py-2 ml-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3 rounded-lg text-white font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                onClick={() => navigate(`/blog/${blogs[blogIndex + 1]._id}`)}
              >
                Next →
              </button>
            )}
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default BlogCard;

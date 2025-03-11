import React from 'react'
import { motion } from "framer-motion";
import Title from '../components/Title'
import {Link} from "react-router-dom";
import { useData } from '../context/DataProvider';


const Blog = () => {
  const {blogs}= useData();
  return(
    <div className="min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[110px] md:pt-[120px] pb-[80px] md:pb-[100px]">
        <Title text1={"Latest"} text2={"Posts"} />

          <div className="grid grid-cols-1  md:grid-cols-2 gap-10 pt-[30px] md:pt-[30px] items-center max-w-5xl w-full">
            { blogs.map((blog,index)=>(
                <motion.div
                key={blog._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 ease-in-out"
                >
                  <motion.div
                  className=" p-8 flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.2),_-6px_-6px_10px_rgba(255,255,255,0.2)] transition-all hover:scale-105  hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                  initial={{ opacity: 0, x:-50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  >
                    <div>
                    <img 
                     className="w-full h-56 object-cover rounded-1xl shadow-2xl"
                      src={blog.thumbnail} />
                    </div>
                    <div
                      className='pt-[15px] md:pt-[30px]'>

                        <p className="text-sm text-blue-400 uppercase font-semibold">{blog.category} / {blog.date} / {blog.readTime}</p>
                        <p className="text-md  text-white uppercase pt-2  font-semibold">{blog.excerpt} </p>
                              <Link
                        to={`/blog/${blog._id}`}
                        className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                </motion.div>
                </motion.div>

            ))

            }
          </div>


    </div>


  );
}

export default Blog
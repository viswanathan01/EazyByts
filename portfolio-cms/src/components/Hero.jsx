import React from 'react'
import { easeInOut, motion } from "framer-motion";
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";
import Title from './Title';


const Hero = () => {
    const navigate = useNavigate();

  return (
    
    <section 
    
      className='min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[110px] md:pt-[100px] pb-[80px] md:pb-[100px]'
      >
        <Title text1={"WELCOME TO"} text2={"MY PAGE"}/>
         {/* ROW 1 */}
        {/* About-Me with my image */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="transition-all duration-300 ease-in-out"
                     >
            <motion.div 
            initial={{scale:0.3}}
            animate={{scale:1}}
            transition={{duration:0.9, ease:"easeInOut"}}
            onClick={() => navigate("/about-me")}
            className="cursor-pointer grid grid-cols-1 h-80 md:grid-cols-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl p-6 shadow-[6px_6px_10px_rgba(0,0,0,0.2),_-6px_-6px_10px_rgba(255,255,255,0.2)] hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]">
                <motion.div
                initial={{opacity:0.5}}
                animate={{opacity:1}}
                transition={{duration:1,ease:'easeInOut'}}
                className="flex justify-center items-center">
                    <img src={assets.pfp} className="h-50 w-50 object-cover rounded-tl-3xl rounded-br-3xl shadow-2xl" />
                </motion.div>
                <div className="flex flex-col justify-center text-left ">
                    <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:easeInOut}} className="text-gray-200 uppercase tracking-wider text-sm">Web Developer</motion.p>
                    <motion.h1 initial={{x:75,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:easeInOut}} className="text-white text-4xl font-extrabold font-[Montserrat]">Viswanathan</motion.h1>
                    <motion.p initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:easeInOut}} className="text-gray-300 mt-2">I'm a Web Developer based in India</motion.p>
                </div>
            </motion.div>
            </motion.div>


            {/* MOVING TEXT */}
            <motion.div className='flex flex-col justify-between gap-5'
             initial={{scale:0.3}}
             animate={{scale:1}}
             transition={{duration:1 ,ease:'easeInOut'}}>
                <motion.div
                    className='overflow-hidden bg-gradient-to-r from-gray-600 to-gray-800 rounded-full text-white py-4 w-full'
                >
                    <motion.h1
                    className="text-1xl font-bold uppercase whitespace-nowrap"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration:10, ease: "linear" }}
                    >
                        <span class=" font-extrabold text-indigo-300 drop-shadow-lg"> Crafting Digital Experiences</span>
                        <span class=" font-semibold text-pink-300 animate-pulse"> ✦ </span>
                        <span class=" font-extrabold text-blue-300 drop-shadow-lg">Web Developer</span>
                        <span class=" font-semibold text-pink-300 animate-bounce"> • </span>
                        <span class=" font-extrabold text-violet-300 drop-shadow-lg"> Full-Stack Engineer 🚀</span>        
                    </motion.h1>
                            
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/*ABOUT ME */}
                <motion.div
                 onClick={() => navigate("/about-me")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col cursor-pointer items-center justify-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                >
                    <motion.div 
                        initial={{opacity:0.5}}
                        animate={{opacity:1}}
                        transition={{duration:1,ease:'easeInOut'}}
                        className="flex justify-center">
                    <img src={assets.aboutme} className="w-auto h-24 rounded-2xl shadow-md" />
                    </motion.div>
                    <div className="text-center pt-5">
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="text-gray-300 uppercase tracking-wide text-sm"
                    >
                        More About Me
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="text-white text-3xl font-extrabold font-[Montserrat] mt-2"
                    >
                        Credentials
                    </motion.h1>
                    </div>
                </motion.div>

                     {/*PROJECTS */}
                <motion.div
                 onClick={() => navigate("/projects")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col cursor-pointer items-center justify-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                >
                    <motion.div 
                        initial={{opacity:0.5}}
                        animate={{opacity:1}}
                        transition={{duration:1,ease:'easeInOut'}}
                        className="flex justify-center">
                    <img src={assets.myworks} className="w-auto h-24 rounded-2xl shadow-md" />
                    </motion.div>
                    <div className="text-center pt-5">
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="text-gray-300 uppercase tracking-wide text-sm"
                    >
                        Showcase
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="text-white text-3xl font-extrabold font-[Montserrat] mt-2"
                    >
                        Projects
                    </motion.h1>
                    </div>
                </motion.div>

                </motion.div>


            </motion.div>
            
        </div>

          {/* ROW 2 */}
          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">


                 {/*BLOG */}
               <motion.div
                onClick={() => navigate("/blog")}
                            initial={{scale:0.3}}
                            animate={{scale:1}}
                            transition={{duration:1 ,ease:'easeInOut'}}
               >
                    <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col cursor-pointer items-center justify-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                      >
                          <motion.div 
                              initial={{opacity:0.5}}
                              animate={{opacity:1}}
                              transition={{duration:1,ease:'easeInOut'}}
                              className="flex justify-center">
                          <img src={assets.gfonts} className="w-auto h-24 rounded-2xl shadow-md" />
                          </motion.div>
                          <div className="text-center pt-5">
                          <motion.p
                              initial={{ opacity: 0, y: -30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, ease: easeInOut }}
                              className="text-gray-300 uppercase tracking-wide text-sm"
                          >
                              Blog
                          </motion.p>
                          <motion.h1
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, ease: easeInOut }}
                              className="text-white text-3xl font-extrabold font-[Montserrat] mt-2"
                          >
                              Blogs
                          </motion.h1>
                          </div>
                      </motion.div>
                      
               </motion.div>
               
                 {/*EXPERIENCE*/}
              <motion.div
              initial={{scale:0.3}}
              animate={{scale:1}}
              transition={{duration:1 ,ease:'easeInOut'}}
              >

              <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex flex-row gap-6  items-center justify-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                    >
                      {[
                        { number: "1+", label: "Years of Experience" },
                        { number: "10+", label: "Completed Projects" },
                        { number: "5+", label: "Tech Stacks Mastered" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col justify-center items-center w-45 h-45 bg-gray-00 rounded-3xl shadow-lg px-4 py-6 text-center transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                          <h1 className="font-extrabold text-white text-3xl">{item.number}</h1>
                          <p className="font-medium text-gray-300 text-sm mt-2">{item.label}</p>
                        </motion.div>
                      ))}
                </motion.div>
              </motion.div>

                 {/*SKILLS*/}
              <motion.div
               onClick={() => navigate("/skill")}
                            initial={{scale:0.3}}
                            animate={{scale:1}}
                            transition={{duration:1 ,ease:'easeInOut'}}
               >
                    <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col cursor-pointer items-center justify-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
                      >
                          <motion.div 
                              initial={{opacity:0.5}}
                              animate={{opacity:1}}
                              transition={{duration:1,ease:'easeInOut'}}
                              className="flex justify-center">
                          <img src={assets.skills} className="w-auto h-24 rounded-2xl shadow-md" />
                          </motion.div>
                          <div className="text-center pt-5">
                          <motion.p
                              initial={{ opacity: 0, y: -30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, ease: easeInOut }}
                              className="text-gray-300 uppercase tracking-wide text-sm"
                          >
                              specialization
                          </motion.p>
                          <motion.h1
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, ease: easeInOut }}
                              className="text-white text-3xl font-extrabold font-[Montserrat] mt-2"
                          >
                              Skills
                          </motion.h1>
                          </div>
                      </motion.div>
                      
               </motion.div>



        </div>


        
    </section>
  )
}

export default Hero














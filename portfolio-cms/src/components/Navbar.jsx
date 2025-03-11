import React, { useState } from 'react'
import {easeOut, motion} from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg border border-white/20  text-white shadow-md z-50'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
        <motion.h1 initial={{scale:0.5}} whileHover={{rotateY:360}} animate={{scale:1}} transition={{duration:1, ease:'easeOut' }}><Link to='/' className="text-2xl text-white font-bold hover:text-cyan-400">VN</Link></motion.h1>
            <ul className="hidden md:flex space-x-6">
            <motion.li initial={{x:-100}} animate={{x:0}} transition={{duration:1, ease:"easeInOut"}}><Link to="/" className="nav-link font-medium">Home</Link></motion.li>
            <motion.li initial={{y:-100}} animate={{y:0}} transition={{duration:1, ease:"easeInOut"}}><Link to="/projects" className="nav-link font-medium">Projects</Link></motion.li>
            <motion.li initial={{y:100}} animate={{y:0}} transition={{duration:1, ease:"easeInOut"}}><Link to="/blog" className="nav-link font-medium">Blog</Link></motion.li>
            <motion.li initial={{x:100}} animate={{x:0}} transition={{duration:1, ease:"easeInOut"}}><Link to="/contact" className="nav-link font-medium">Contact</Link></motion.li>
            
            <motion.li initial={{x:100}} animate={{x:0}} transition={{duration:1, ease:"easeInOut"}}><Link to="/login" className="nav-link font-medium">Login</Link></motion.li>
            </ul>
            <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 relative">
            <span className={`absolute block h-0.5 w-full bg-white transform transition duration-300 ease-in-out 
              ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`} />
            <span className={`absolute block h-0.5 w-full bg-white transform transition duration-300 ease-in-out 
              ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute block h-0.5 w-full bg-white transform transition duration-300 ease-in-out 
              ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`} />
          </div>
        </button>
        </div>

        <div className={`md:hidden absolute w-full bg-white/10 backdrop-blur-lg border border-white/20  text-white shadow-md  transition-all duration-300 ease-in-out 
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li><Link to="/" className="text-white hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/blog" className="text-white hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" className="text-white hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Login</Link></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = import.meta.env.VITE_API_URL;
      const blogRes = await axios.get(`${API_URL}/api/blogs`);
      const projectRes = await axios.get(`${API_URL}/api/projects`);
      const skillRes = await axios.get(`${API_URL}/api/skills`);

      setBlogs(blogRes.data);
      setProjects(projectRes.data);
      setSkills(skillRes.data);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ blogs, projects, skills }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};






















/*import React, { createContext, useContext } from "react";
import { assets } from '../assets/assets';

const DataContext = createContext();

const data ={
  blogs: [
    {
      id: 1,
      title: "Mastering CSS Grid: The Ultimate Guide",
      category: "Web Development",
      date: "March 5, 2025",
      readTime: "6 min read",
      thumbnail: assets.cssGrid,
      excerpt: "Learn how to harness the power of CSS Grid to build modern, responsive layouts effortlessly.",
      description: "CSS Grid is one of the most powerful layout systems available in CSS. It provides web developers with a two-dimensional grid-based approach that allows for flexible and efficient design layouts. In this comprehensive guide, we will explore how to define grid containers, set up rows and columns, and make use of advanced techniques such as grid-template-areas, implicit and explicit grids, and grid auto-flow. You'll also learn best practices for making your CSS Grid layouts fully responsive, accessible, and optimized for all screen sizes. By the end of this article, you’ll be able to create complex layouts with minimal effort, improving both design consistency and user experience."
    },
    {
      id: 2,
      title: "React vs Vue: Which One Should You Choose?",
      category: "Frontend Frameworks",
      date: "February 20, 2025",
      readTime: "8 min read",
      thumbnail: assets.reactVsVue,
      excerpt: "A detailed comparison between React and Vue to help you decide which framework suits your next project.",
      description: "When choosing between React and Vue, developers often wonder which framework best fits their needs. React, backed by Facebook, is known for its component-based structure, virtual DOM, and vast ecosystem. Vue, on the other hand, offers a more intuitive and lightweight framework with built-in state management and an easy learning curve. In this article, we dive deep into performance benchmarks, ecosystem maturity, real-world use cases, and developer experience. Whether you are building a large-scale web application or a small personal project, understanding the strengths and weaknesses of each framework will help you make an informed decision."
    },
    {
      id: 3,
      title: "The Future of Web Animation with Framer Motion",
      category: "UI/UX Design",
      date: "January 15, 2025",
      readTime: "5 min read",
      thumbnail: assets.framerMotion,
      excerpt: "Discover how Framer Motion is revolutionizing web animations and improving user experiences.",
      description: "Animations are an integral part of modern web design, enhancing user engagement and visual appeal. Framer Motion is a powerful React library that simplifies the creation of smooth animations with minimal code. This article covers how to get started with Framer Motion, including key concepts like motion components, variants, and gesture-based interactions. We'll also explore real-world examples, such as page transitions, interactive UI elements, and scroll animations. If you want to elevate your website's interactivity and create visually stunning animations with ease, this guide is your perfect starting point."
    },
    {
      id: 4,
      title: "How to Optimize Your Website for Better Performance",
      category: "Performance Optimization",
      date: "December 10, 2024",
      readTime: "7 min read",
      thumbnail: assets.websiteopti,
      excerpt: "Speed is everything! Learn the best practices to enhance your website’s loading time and overall performance.",
      description: "A slow-loading website can result in higher bounce rates, poor user experience, and lower search rankings. Optimizing website performance involves a combination of front-end and back-end techniques, including image compression, lazy loading, caching, minification of CSS and JavaScript, and using Content Delivery Networks (CDNs). In this guide, we break down these strategies with practical implementations. We will also discuss modern performance monitoring tools like Lighthouse and WebPageTest to help you analyze and improve your site’s loading speed. By following these steps, you can significantly enhance your website’s performance, leading to better user retention and search engine rankings."
    },
    {
      id: 5,
      title: "The Rise of AI in Web Development",
      category: "Artificial Intelligence",
      date: "November 1, 2024",
      readTime: "9 min read",
      thumbnail: assets.aiInWeb,
      excerpt: "AI is reshaping how we develop websites. Explore the latest AI tools and trends in web development.",
      description: "Artificial Intelligence is revolutionizing web development by automating repetitive tasks, optimizing performance, and personalizing user experiences. AI-powered tools like GitHub Copilot, ChatGPT for code generation, and automated UI builders are changing how developers work. In this article, we explore how AI-driven solutions improve code efficiency, accelerate prototyping, and enhance accessibility. We'll also discuss the ethical implications of AI in web design and the future of AI-powered chatbots, voice interfaces, and predictive analytics in web applications. If you’re curious about how AI is transforming the way websites are built, this deep dive into AI-powered web development is a must-read."
    }
  ]
,  
  skills:[
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "Python", level: "80%" },
    { name: "Tailwind CSS", level: "75%" },
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "75%" },
    { name: "MongoDB", level: "65%" },
    { name: "Web Scraping", level: "75%" },
    { name: "Bootstrap", level: "85%" },
    { name: "SQL", level: "90%" },
    { name: "DSA", level: "50%" },
    { name: "Data Analytics", level: "60%" },
    { name: "C Programming", level: "70%" },
    { name: "Java", level: "60%" },
    { name: "UI/UX", level: "70%" },
  ],

   projects : [
    {
      id: 1,
      title: "Portfolio Website with CMS",
      description: "An advanced portfolio website featuring dynamic content updates using a CMS, smooth animations with Framer Motion.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion",],
      github: "https://github.com/viswanathan01/",
      liveDemo: "https://your-portfolio.com",
      image: assets.portf,
    },
    {
      id: 2,
      title: "Keyboard Testing App",
      description: "A web-based tool to check the functionality of keyboard keys in real-time with visual feedback.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/viswanathan01/",
      liveDemo: "https://vkeyboardtest.ccbp.tech/",
      image: assets.keyBoard,
    },
    {
      id: 3,
      title: "E-Commerce Product Page UI",
      description: "A sleek, interactive product page with a product card, image carousel, quantity selector, and animated size selection.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/viswanathan01/ecommerce-website",
      liveDemo: "https://vnshop.vercel.app/",
      image: assets.ecom,
    },
    
    {
      id: 4,
      title: "To-Do List with Local Storage",
      description: "A lightweight and responsive To-Do List app that saves tasks in local storage for persistent tracking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/viswanathan01/",
      liveDemo: "https://viswatodoapp.ccbp.tech/",
      image: assets.todo,
    },
    {
      id: 5,
      title: "Color Generator",
      description: "A web app that generates different shades of colors randomly.",
      technologies: ["HTML", "CSS", "JS"],
      github: "https://github.com/viswanathan01/",
      liveDemo: "https://viswacolorgen.ccbp.tech/",
      image: assets.colorGen,
    },
    {
      id: 6,
      title: "Calculator App",
      description: "A simple and elegant calculator application for performing basic arithmetic operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/viswanathan01/",
      liveDemo: "https://viswacalc.ccbp.tech/",
      image: assets.Calc,
    },
    {
      id: 7,
      title: "Food Munch Website",
      description: "A food delivery website showcasing various dishes with a user-friendly interface and smooth navigation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/viswanathan01/",
      liveDemo: "https://viswasfoodmunch.ccbp.tech/",
      image: assets.FoodMunch,
    },
  ]
  
}


export const DataProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};




*/




import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import AdminPanel from "./components/AdminPanel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute

const App = () => {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:_id" element={<BlogCard />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="/projects" element={<Project />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </DataProvider>
  );
};

export default App;
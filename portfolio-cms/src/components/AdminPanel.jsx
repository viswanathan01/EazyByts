import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaBlog, FaProjectDiagram, FaTools } from "react-icons/fa";


export default function AdminPanel() {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState("blogs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const defaultItem = {
    blogs: { title: "", category: "", date: "", readTime: "", thumbnail: "", excerpt: "", description: "" },
    projects: { title: "", description: "", technologies: [], github: "", liveDemo: "", image: "" },
    skills: { name: "", level: "" },
  };

  const [newItem, setNewItem] = useState(defaultItem[activeTab]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setNewItem(defaultItem[activeTab]);
    setEditingItem(null);
  }, [activeTab]);

  const fetchData = async () => {
    try {
      const [blogData, projectData, skillData] = await Promise.all([
        fetch("http://localhost:5000/api/blogs").then((res) => res.json()),
        fetch("http://localhost:5000/api/projects").then((res) => res.json()),
        fetch("http://localhost:5000/api/skills").then((res) => res.json()),
      ]);
      setBlogs(blogData);
      setProjects(projectData);
      setSkills(skillData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const formattedItem = {
        ...newItem,
        technologies: activeTab === "projects"
          ? newItem.technologies.split(",").map((tech) => tech.trim())
          : newItem.technologies,
        level: activeTab === "skills" ? `${newItem.level}%` : newItem.level, // Adds `%` only for skills
      };
      

      const url = `http://localhost:5000/api/${activeTab}`;
      const method = editingItem ? "PUT" : "POST";
      const endpoint = editingItem ? `${url}/${editingItem._id}` : url;

      await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedItem),
      });

      fetchData();
      setNewItem(defaultItem[activeTab]);
      setEditingItem(null);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleEdit = (item) => {
    setNewItem({
      ...item,
      technologies: activeTab === "projects"
        ? item.technologies.join(", ")
        : item.technologies,
    });
    setEditingItem(item);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/${activeTab}/${id}`, { method: "DELETE" });
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen pt-[100px] bg-gray-500">
      {/* 🏠 Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-5 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
      >
        <button className="text-white cursor-pointer text-xl absolute top-4 right-4" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>
        <h2 className="text-white text-2xl font-bold mb-6">Admin Panel</h2>
        <div className="flex flex-col gap-4">
          {[
            { id: "blogs", label: "Blogs", icon: <FaBlog /> },
            { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
            { id: "skills", label: "Skills", icon: <FaTools /> },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded-md text-white transition-all ${
                activeTab === tab.id ? "bg-blue-500" : "hover:bg-gray-600"
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>
      {/* 📌 Content Area */}
      <div className="flex-1 px-8 py-6">
        <button className="text-white text-xl cursor-pointer mb-4" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>

        {/* 🔹 Form */}
        <motion.div
          className="bg-gray-700 p-8 rounded-2xl shadow-lg max-w-xl mx-auto transition-all hover:shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl text-white font-semibold mb-4">
            {editingItem ? `Edit ${activeTab.slice(0, -1)}` : `Create ${activeTab.slice(0, -1)}`}
          </h3>

          {Object.keys(defaultItem[activeTab]).map((key) => (
            <div key={key} className="mb-3">
              <label className="block text-white text-sm capitalize py-2 font-medium">{key}</label>
                <input
                    type={key === "level" ? "number" : "text"}
                    placeholder={key}
                    className="border p-2 w-full rounded-md bg-gray-600 text-white"
                    value={newItem[key] || ""}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        [key]: key === "level"
                          ? Math.min(100, Math.max(1, Number(e.target.value) || 1)) // Ensures 1-100
                          : e.target.value,
                      })
                    }
                    min={key === "level" ? 1 : undefined}
                    max={key === "level" ? 100 : undefined}
                  />

             </div>
          ))}

          <button
            className=" cursor-pointer text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3 font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]"
            onClick={handleSubmit}
          >
            {editingItem ? "Update" : "Create"}
          </button>
        </motion.div>

        {/* 📋 Display Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {(activeTab === "blogs" ? blogs : activeTab === "projects" ? projects : skills).map(
            (item, index) => (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 ease-in-out"
              >
                <motion.div
                  className="p-6 flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {(activeTab === "blogs" || activeTab === "projects") && (
                    <img
                      className="w-full h-40 object-cover rounded-xl shadow-2xl"
                      src={item.thumbnail || item.image}
                      alt={item.title}
                    />
                  )}
                  <h4 className="text-lg text-white font-semibold mt-3">{item.title || item.name}</h4>
                  <p className="text-sm text-blue-400">{item.category || item.level || ""}</p>

                  <div className="flex justify-between w-full mt-4">
                    <button className=" text-white px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all p-3  font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button className=" text-white px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all p-3 rounded-lg  font-bold shadow-lg hover:shadow-[inset_6px_6px_10px_rgba(0,0,0,0.3),_inset_-6px_-6px_10px_rgba(255,255,255,0.2)]" onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

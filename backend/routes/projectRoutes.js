const express = require("express");
const Project = require("../models/Project");
const upload = require("../middleware/multer"); // Multer middleware
const cloudinary = require("../config/cloudinary"); // Cloudinary config
const router = express.Router();
// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Create a new blog with image upload
router.post("/", upload.single("thumbnail"), async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "projects",
      });
      imageUrl = result.secure_url;
    }

    const newProject = new Project({ ...req.body, thumbnail: imageUrl });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a blog with image upload
router.put("/:id", upload.single("thumbnail"), async (req, res) => {
  try {
    let imageUrl = req.body.thumbnail; // Keep the old image if no new image is uploaded

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "blogs",
      });
      imageUrl = result.secure_url;
    }

    const updatedProject = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, thumbnail: imageUrl },
      { new: true }
    );

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Delete a project
router.delete("/:id",  async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

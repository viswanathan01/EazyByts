const express = require("express");
const Blog = require("../models/Blog");
const upload = require("../middleware/multer");
const cloudinary = require("../config/cloudinary");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", upload.single("thumbnail"), async (req, res) => {
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      req.body.thumbnail = result.secure_url;
    }
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", upload.single("thumbnail"), async (req, res) => {
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      req.body.thumbnail = result.secure_url;
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
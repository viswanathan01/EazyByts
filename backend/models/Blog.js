const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  category: String,
  date: String,
  readTime: String,
  thumbnail: String,
  excerpt: String,
  description: String,
});

module.exports = mongoose.model("Blog", blogSchema);

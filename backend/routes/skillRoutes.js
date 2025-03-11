const express = require("express");
const Skill = require("../models/Skill");
const router = express.Router();

// Get all skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Add a new project (only for admins)
router.post("/", async (req, res) => {  // Add protect middleware here
 
  try {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Admin only: Update a blog
router.put("/:id", async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Delete a project
router.delete("/:id",  async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;



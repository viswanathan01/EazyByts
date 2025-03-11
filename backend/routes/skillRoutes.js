const express = require("express");
const Skill = require("../models/Skill");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", async (req, res) => { 
  try {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.put("/:id", async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id",  async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;



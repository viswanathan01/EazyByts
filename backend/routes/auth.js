const express = require("express");
const User = require("../models/User"); // Import User Model
const router = express.Router();
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware"); // Import the middleware



router.get("/admin", authMiddleware, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the admin panel" });
});



router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // Validate password (e.g., minimum length)
    if (!validator.isLength(password, { min: 6 })) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: email === process.env.ADMIN_EMAIL // Set isAdmin during signup
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
  

  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET, // Use a secret key from environment variables
        { expiresIn: "1h" } // Token expires in 1 hour
      );
  
      res.json({ message: "Login successful", isAdmin: user.isAdmin, token });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
module.exports = router;

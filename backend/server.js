const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const blogRoutes = require("./routes/blogRoutes");
const skillRoutes = require("./routes/skillRoutes");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/auth"); 

dotenv.config();
connectDB();
const allowedOrigins = [
    "http://localhost:5173", // Allow local development
    "https://vn-portfolio-eazy-byts.vercel.app", // Deployed frontend
  ];
const app = express();
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

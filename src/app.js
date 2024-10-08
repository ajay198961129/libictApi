const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

app.get("/",(req,res)=>{
  res.json("hello")
})

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;

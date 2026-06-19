require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const logger = require("./middleware/logger");

const app = express();


connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong"
  });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
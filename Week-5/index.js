const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");

// Middleware
app.use(logger);
app.use(express.json());

app.use("/api/users", usersRouter);

app.get("/" , (req, res) => {
  res.send("Welcome to the User Management API");
})

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong! Please try again later.",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

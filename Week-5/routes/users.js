const express = require("express");

const router = express.Router();

// In-memory user data
let users = [
  {
    id: 1,
    name: "Ram Sharma",
    email: "ram@gmail.com",
  },
  {
    id: 2,
    name: "Shyam Sharma",
    email: "shyam@gmail.com",
  },
  {
    id: 3,
    name: "Harshit Sharma",
    email: "harshit@gmail.com",
  },
  {
    id: 4,
    name: "Rohit Sharma",
    email: "rohit@gmail.com",
  },
];

//get all users
router.get("/", (req, res) => {
  res.json(users);
});

//get user by id
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  res.json(user);
});

//post create user
let nextId = 5;
router.post("/", (req, res, next) => {
  try {
    //name and email are required in the request body
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "name and email are required",
      });
    }
    const newUser = {
      id: nextId++,
      name,
      email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

//put update user
router.put("/:id", (req, res, next) => {
  try {
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if (!user) {
      return res.status(404).json({
        message: `user with ID ${req.params.id} not found`,
      });
    }

    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "name and email are required",
      });
    }

    user.name = name;
    user.email = email;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//patch update user
router.patch("/:id", (req, res, next) => {
  try {
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//delete user
router.delete("/:id", (req, res, next) => {
  try {
    const userIndex = users.findIndex(
      (u) => u.id === parseInt(req.params.id),
    );
    if (userIndex === -1) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    users.splice(userIndex, 1);
    res.json({
      message: "user deleted successfully",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

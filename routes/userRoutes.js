const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const User = require("../models/userModel");
const Course = require("../models/courseModel");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new err("Please add all required fields");
    }

    // Check if the user already exists
    let userexist = await User.findOne({ email });
    if (userexist) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the client exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Sign the JWT
    const token = jwt.sign({ id: user._id }, "abc123");

    return res.json({ message: "success", token: token, tag: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/addcourse", async (req, res) => {
  try {
    const { title, duration } = req.body;

    const course = new Course({
      title,
      duration,
    });

    const savedCourse = await course.save();

    res.json(savedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/allcourses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/auth", async (req, res) => {
  const token = req.body.token;

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, "abc123");

    // Get the user ID from the decoded token
    const userId = decoded.id;

    // Return the protected data
    res.json({ message: `Authenticated user: ${userId}`, tag: true });
  } catch (err) {
    // Return an error if the token is invalid
    res.status(401).json({ error: "You are not authenticated" });
  }
});
// router.post("/userdets", getUserbyId);

module.exports = router;

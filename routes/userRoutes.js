const express = require("express");
const router = express.Router();
const {
  Signup,
  Login,
  addCourse,
  getCourses,
  getMe,
  Authentication
} = require("../controllers/userController");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/addcourse", addCourse);
router.get("/allcourses", getCourses);
router.get("/auth", Authentication, getMe);

module.exports = router;
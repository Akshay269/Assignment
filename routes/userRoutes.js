const express = require("express");
const router = express.Router();
const {
  Signup,
  Login,
  addCourse,
  getCourses,
  getMe,
  getUserbyId,
  Authentication
} = require("../controllers/userController");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/addcourse", addCourse);
router.post("/allcourses", getCourses);
router.post("/auth", Authentication, getMe);
// router.post("/userdets", getUserbyId);


module.exports = router;
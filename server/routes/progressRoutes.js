const express = require("express");
const router = express.Router();
const studentAuth = require("../middleware/studentAuthMiddleware");
const teacherAuth = require("../middleware/teacherAuthMiddleware");
const { markComplete, getCourseProgress } = require("../controllers/progressController");

router.post("/complete/:lessonId",studentAuth,markComplete);

router.get("/courses/:courseId",teacherAuth,getCourseProgress);

module.exports=router;
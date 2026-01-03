const express = require("express");
const router = express.Router();
const teacherAuth = require("../middleware/teacherAuthMiddleware");
const studentAuth = require("../middleware/studentAuthMiddleware");

const{
    createCourse,
    getTeacherCourses,
    getAllCourses,
    enrollCourse
} = require("../controllers/courseController");


router.post("/create",teacherAuth,createCourse);
router.get("/teacher",teacherAuth,getTeacherCourses);

router.get("/",studentAuth,getAllCourses);
router.post("/:courseId/enroll",studentAuth,enrollCourse);

module.exports = router;
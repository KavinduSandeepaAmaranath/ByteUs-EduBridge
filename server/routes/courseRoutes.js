const express= require("express");
const teacherAuth =require("../middleware/teacherAuthMiddleware");
const studentAuth=require("../middleware/studentAuthMiddleware");
const { createCourse, getTeacherCourses, enrollCourse } = require("../controllers/courseController");
const router=express.router();

const{
     createCourse,
    getTeacherCourses,
    getAllCourses,
    enrollCourse
}= require("../controllers/courseController");


router.post("/create",teacherAuth,createCourse);
router.get("/teacher",teacherAuth,getTeacherCourses);

router.get("/",studentAuth,getAllCourses);
router.post("/:courseId/enroll",studentAuth,enrollCourse);
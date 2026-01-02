const express=require("express");
const router=express.router();
const teacherAuth=require("../middleware/teacherAuthMiddleware");
const studentAuth=require("../middleware/studentAuthMiddleware");
const{
    addLesson,
    getLessonByCourse
}=require("../controllers/lessonController");

//teacher adding lessons
router.post("/add",teacherAuth,addLesson);

//student viewing lessons by course
router.get("/:courseId",studentAuth,getLessonByCourse);

module.exports = router;

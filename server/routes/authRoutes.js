const express = require("express");
const {
    registerStudent,
    loginStudent,
    registerTeacher,
    loginTeacher,    
} = require("../controllers/authController")

const router = express.Router();
router.post("/studentRegister", registerStudent);
router.post("/studentLogin", loginStudent);
router.post("/teacherRegister", registerTeacher);
router.post("/teacherLogin", loginTeacher);

module.exports = router;     
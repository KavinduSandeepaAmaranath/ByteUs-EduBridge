const student = require("../models/student");
const teacher = require("../models/teacher");
const bcrypt = require("bcryptjs");
const genarateToken = require("../utils/genarateToken");

exports.registerStudent = async (req, res) => {
    try {
        const { name, studentId, email, password, confirmPassword } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({message:"Passwords does not match"});
        }
        
        const studentExists = await student.findOne({ email });
        if (studentExists) {
            return res.status(400).json({ message: "Student already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = await student.create({
            name,
            studentId,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            id: newStudent._id,
            name: newStudent.name,
            studentId: newStudent.studentId,
            email: newStudent.email,
            token: generateToken(newStudent._id),
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginStudent = async (req, res) => {
    try {
        const { studentId, password } = req.body;

        const student = await student.findOne({ email });
        if(!student) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json ({
            id: student._id,
            name: student.name,
            studentId: student.studentId,
            email: student.email,
            token: generateToken(student._id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.registerTeacher = async (req, res) => {
    try {
        const { name, teacherId, email, password } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({message:"passwords does not match"});
        }
        
        const teacherExists = await teacher.findOne({ email });
        if (teacherExists) {
            return res.status(400).json({ message: "Student already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newTeacher = await teacher.create({
            name,
            teacherId,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            id: newTeacher._id,
            name: newTeacher.name,
            teacherId: newTeacher.teacherId,
            email: newTeacher.email,
            token: generateToken(newTeacher._id),
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginTeacher = async (req, res) => {
    try {
        const { teacherId, password } = req.body;

        const teacher = await teacher.findOne({ email });
        if(!teacher) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, teacher.password);
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json ({
            id: teacher._id,
            name: teacher.name,
            studentId: teacher.teacherId,
            email: teacher.email,
            token: generateToken(teacher._id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


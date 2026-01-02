const course = require("../models/course");


//techer part

//creating course

const createCourse=async(req,res)=>{
    try{
        const{title,discription}=req.body;

        const courses=await course.create({
            title,
            discription,
            teacher:req.user.id
        });
        res.status(201).json(course);
    }catch(error){
        res.status(500).json({message:"course creation failed"});
    }
};

//get course teacher create
const getTeacherCourses=async(req,res)=>{
    try{
        const course= await course.find({teacher:req.user.id});
        res.json(courses);
    }catch (error){
        res.status(500).json({message:"failed to fetch courses"});
    }
};
//student

//get all courses

const getAllCourses =async(req,res)=>{
    try{
        const courses=await course.find().populate("teacher","name");
        res.json(courses);
    }catch(error){
        res.status(500).json({message:"failed to fetch courses"});
    }
};

//enroll student
const enrollCourse=async(req,res)=>{
        try{
            const course=await course.findById(req.params.courseId);

            if(!course)
                return res.status(404).json({message:"course not found"});
            if(course.enrolledStudents.includes(req.user.id)){
                return res.status(400).json({message:"Already enrolled"});
            }
            course.enrolledStudents.push(req.user.id);
            await course.save();

            res.json({message:"enrolled successfully"});
        }catch(error){
            res.status(500).json({message:"enrollment failed"});
        }
};

module.exports={
    createCourse,
    getTeacherCourses,
    getAllCourses,
    enrollCourse
};



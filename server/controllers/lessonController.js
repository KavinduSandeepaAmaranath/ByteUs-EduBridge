const lesson=require("../models/lessons");
const course=require("../models/course");

//teacher part
const addLesson= async(req,res)=>{
    try{
        const{title,content,courseId}=req.body;

        const course =await course.findById(courseId);
        if(!course){
            return res.status(403).json({message:"course not found"});
        }
        if(course.teacher.toString()!==req.user.id){
             return res.status(403).json({message:"Not authorized to add lesson to this course"});
        }
        const lesson=await lesson.create({
            title,
            content,
            courseId,
            createdBy:req.user.id

        });
        res.status(201).json({message:"lesson added successfully",lesson});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"failed to add lesson"});
    }
};

//student part
const getLessonsBycourse=async(req,res)=>{
    try{
        const{courseId }=req.params;

        const course=await course.findById({courseId});
        if(!course)return res.status(404).json({message:"course not foud"});

        const lessons=(await lesson.find({courseId})).toSorted({createdAt:1});
        res.json(lessons);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"failed to fetched lessons"});
    }
};

module.exports={
    addLesson,
    getLessonsBycourse
};

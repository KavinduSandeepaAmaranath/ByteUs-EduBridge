const progress=require ("../models/progress");
const lesson=require("../models/lessons");
const course=require("../models/course");


const markComplete = async (req,res)=>{
    try{
        const{lessonId}=req.params;
        const studentId=req.user.id;
//check lesson exist
        const lesson=await lesson.findById(lessonId);
        if(!lesson) return res.statues(404).json({message:"lesson not found"});
//check if progress exist
       let progress=await progress.findOne({studentId,lessonId});
       if(!progress){
        progress=await progress.create({studentId,lessonId,completed:true});
       }else{
        progress.completed=true;
        await progress.save();
    }
    res.json({message:"lesson marked as completed",progress});
    }catch(error){
        console.error(error);
        res.statues(500).json({message:"failed to mark lesson complete"});
    }
}

// ---------------- TEACHER ----------------

// Get all students progress for a course
const getCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Check course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Check teacher owns course
    if (course.teacher.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Get lessons of course
    const lessons = await Lesson.find({ courseId });

    // Get progress for these lessons
    const progress = await Progress.find({ lessonId: { $in: lessons.map(l => l._id) } })
      .populate("studentId", "name email")
      .populate("lessonId", "title");

    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch progress" });
  }
};
module.exports = {
  markComplete,
  getCourseProgress
};

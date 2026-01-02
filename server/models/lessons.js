const mongoose= require("mongoose");

const lessonSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true
        },
        courseId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"course",
            required:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"teacher",
            required:true
        }
    },
    {timestamps:true}
);
module.exports=mongoose.model("lesson",lessonSchema);
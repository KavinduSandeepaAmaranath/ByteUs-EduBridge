const mongoose = require("mongoose");

const courseSchema =new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        discription:{
            type:String,
            required:true,
        },
         teacher:
           {
             type:mongoose.Schema.Types.ObjectId,
             ref:"teacher",
             required:true
        },
        enrolledStudents:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"student"
        }]
    },
    {timestamps:true}

);
module.exports=mongoose.model("course",courseSchema);
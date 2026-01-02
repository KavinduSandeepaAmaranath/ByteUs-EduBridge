const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
    name:{type:String, required:true},
    stId:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},

},
    {timestamps: true}
);

module.exports = mongoose.model.student || mongoose.model("student", studentschema);

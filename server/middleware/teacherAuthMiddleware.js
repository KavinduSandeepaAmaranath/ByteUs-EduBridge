const jwt= require("jsonwebtoken");

const teacherAuth=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({message:"No token"});
        }

        const token=authHeader.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user={
            id:decoded.id,
            type:"teacher"
        };
        next();
    }catch(error){
        res.status(401).json({message:"Invalid token"});
    }
};

module.exports=teacherAuth;
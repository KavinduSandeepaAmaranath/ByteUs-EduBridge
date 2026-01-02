const jwt=require("jsonwebtoken");

const studentAuth=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({message:"no token"});
        }
        const token=authHeader.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user={
            id:decoded.id,
            type:"student"
        };
        next();
    }catch(error){
        res.status(401).json({message:"invalid token"});
    }
};
module.exports=studentAuth;
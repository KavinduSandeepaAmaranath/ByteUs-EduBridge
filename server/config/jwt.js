const jwt=require("jsonwebtoken");

const genarateToken=(userId)=>{
    return jwt.sign(
        {id :userId },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    );
};

const verifiyToken=(token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
};
module.exports={
    genarateToken,
    verifiyToken
};
const jwt=require('jsonwebtoken');
const JWT_SECRET=process.env.JWT_SECRET;
const authToken=async(req,res,next)=>{
    try{
        const token = req.cookies?.token 
        console.log("token",token);
        
        if(!token){
            return res.status(200).json({
                message:"user not logged in",
                error:true,
                success:false
            })
        }

        jwt.verify(token,JWT_SECRET,function(err,decoded){
            console.log(err);
            console.log("decoded",decoded);
            
            if(err){
                console.log("auth err",err); 
            }
            req.userId=decoded?.userId

            next();
        });
                
       
        
    }catch(err){
        res.status(400).json({
        message: err.message || err,
        data:[],
        error:true,
        success:false})
    }
}

module.exports=authToken;
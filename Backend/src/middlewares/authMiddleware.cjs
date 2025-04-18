const authToken=async(req,res,next)=>{
    try{
        const token = req.Cookies?.token || req.headers;       
         console.log("token:",token.cookie);
         if(!token){
            return res.status(401).json({
                message:"Unauthorized.Token missing.",
                data:[],
                error:true,
                success:'false'
            });
            next();
         }
        
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            data:[],
           error:true,
      success:false})
    }
}

module.exports=authToken;
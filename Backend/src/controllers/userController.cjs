const {registerUser,verifyUser,loginUser,findUserById}=require('../services/userServices.cjs')
const register=async(req,res)=>{
    const {username,email,password,profile}=req.body;
    console.log("logging details.....",username,password,email,profile);

    try{
        const response=await registerUser({username,password,email,profile});
        console.log(username,password,email,profile);
        
        res.status(200).json(response)
    }catch(error){
        console.error("error:",error);
        res.status(500).json({message: error.message || "Internal Server Error"})
    }
};

const verify=async(req,res)=>{
    try{
    const response=await verifyUser(req.params.token);
    res.redirect(response.redirect);
    }catch(error){
    res.status(403).json({message:error.message})
    }
};
const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const token=await loginUser({email,password});
        console.log(token);
        const tokenOption={
            httpOnly:true,
            secure:true
        }
        // res.cookie("token",token,tokenOption);
        res.cookie("token",token.token,tokenOption).status(200).json({token:token});
        
    }catch(error){
        res.status(401).json({error:error.message});
    };
}
const userDetails=async(req,res)=>{
    try{
        console.log("userId",req.userId);
        const userId=req.userId;
        const user= await findUserById({userId})
        res.status(200).json({
            data:user,
            error:false,
            success:true,
            message:"use details"
        })
        console.log("userInfo",user);
        
    }catch(err){
        res.status(400).json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

const userLogout=async(req,res)=>{
    try{
        res.clearCookie("token")
        res.json({
            message:"Logged out successfully",
            error:false,
            success:true,
            data:[]
        })
    }catch(err){
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }

}

module.exports={
    register,
    verify,
    login,
    userDetails,
    userLogout
}
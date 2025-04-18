const {registerUser,verifyUser,loginUser}=require('../services/userServices.cjs')
const register=async(req,res)=>{
    const {username,email,password,profile}=req.body;
    try{
        const response=await registerUser({username,password,email,profile});
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
        res.cookie("token",token,tokenOption);
        res.cookie("token",token,tokenOption).status(200).json({token:token});
        
    }catch(error){
        res.status(401).json({error:error.message});
    };
}
const userDetails=async()=>{
    try{

    }catch(err){
        res.status(400).json({
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
    userDetails
}
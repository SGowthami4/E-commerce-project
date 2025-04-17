const userService=require('../services/userServices.cjs')
const register=async(req,res)=>{
    const {username,email,password,profile}=req.body;
    try{
        const response=await userService.registerUser({username,password,email,profile});
        res.status(201).json(response)
    }catch(error){
        res.status(500).json({error:error.message})
    }
};
const verify=async(req,res)=>{
    try{
        const response=await userService.verifyUser(req.params.token);
        res.redirect(response.redirect);
    }catch(error){
    res.status(403).json({message:error.message})
    }
};

module.exports={
    register,
    verify
};
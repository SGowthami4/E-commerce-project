const express=require('express');
const {register,verify,login,userDetails,userLogout}=require('../controllers/userController.cjs')
const authToken=require('../middlewares/authMiddleware.cjs');
const router=express.Router();

router.post('/register',register);
router.get('/verify/:token',verify);
router.post('/login',login);
router.get('/user-details',authToken,userDetails)
router.get('/userLogout',userLogout)
module.exports=router;
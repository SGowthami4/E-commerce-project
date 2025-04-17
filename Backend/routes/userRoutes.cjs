const express=require('express');
const userController=require('../controllers/userController.cjs')
const router=express.Router();

router.post('/register',userController.register);
router.get('/verify/:token',userController.verify);
router.get('/login',userController.login);

module.exports=router;
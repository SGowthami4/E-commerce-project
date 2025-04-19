const express=require('express');
const {getAllProducts}=require('../controllers/productController.cjs')
const authToken=require('../middlewares/authMiddleware.cjs');
const router=express.Router();

router.get('/get',getAllProducts);

module.exports=router;
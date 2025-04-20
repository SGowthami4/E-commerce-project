const express=require('express');
const {getAllProducts,getDistinctproduct,productsByCategory}=require('../controllers/productController.cjs')
const authToken=require('../middlewares/authMiddleware.cjs');
const router=express.Router();

router.get('/get',getAllProducts);
router.get('/categoryProduct',getDistinctproduct);
router.post('/productByCategory',productsByCategory);
module.exports=router;
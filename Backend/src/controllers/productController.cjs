const {getProducts,categoryWiseProducts}=require('../services/productServices.cjs');

const getAllProducts=async(req,res)=>{
    try{
        const products=await getProducts();
        res.status(200).json({
            fetchedProducts:products,
            message:"fetched products successfuly",
            error:false,
            success:true
        })

    }catch(err){
        res.status(500).json({
            fetchedProducts:[],
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

const getDistinctproduct=async(req,res)=>{
    try{
        const products=await getCategoryProduct();
        res.status(200).json({
            categoryProduct:products,
            message:"fetched products successfuly",
            error:false,
            success:true
        })

    }catch(err){
        res.status(500).json({
            categoryProduct:[],
            message:err.message || err,
            error:true,
            success:false
        })
    }
}
const productsByCategory=async(req,res)=>{
    try{
        const {category}=req?.body;
        const products=await categoryWiseProducts({category});
        res.status(200).json({
            categoryWiseProducts:products,
            message:"fetched products by category successfuly",
            error:false,
            success:true
        })

    }catch(err){
        res.status(500).json({
            categoryWiseProducts:[],
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports={
    getAllProducts,
    getDistinctproduct,
    productsByCategory
}
const {getProducts}=require('../services/productServices.cjs');

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

module.exports={
    getAllProducts
}
const prisma=require('../prisma/prismaClient.cjs');
const getProducts=async()=>{
    let page=0;
    try{
        const products=await prisma.product.findMany({
            skip:page*15 ,
            take:15
        })
        return products

    }catch(error){
        console.error("Error loggin in",error.message)
    }
}

const getCategory=async(req,res)=>{
    try{
        const categoryProduct=await prisma.product.findMany({
            where:{},
             distinct:'category',
          
        })
        
        return categoryProduct
    }catch(error){
        console.error("Error loggin in",error.message)
    }
}
const categoryWiseProducts=async({category})=>{
    try{
        const products=await prisma.product.findMany({
                where:{category:category},
          
        })
        
        return products
    }catch(error){
        console.error("Error loggin in",error.message)
    }
}   

module.exports={
    getProducts,
    getCategory,
    categoryWiseProducts
}
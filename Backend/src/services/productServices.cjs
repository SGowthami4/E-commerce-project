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

module.exports={
    getProducts
}
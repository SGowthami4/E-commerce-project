import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaCartShopping} from 'react-icons/fa6';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function AllProducts() {
    const [allProducts,setAllProducts]=useState([])

    const fetchAllProducts=async()=>{
        const products=await fetch('http://localhost:3500/products/get',{
            method:'get'
        })
        const response=await products.json();
        if(response.success){
          console.log("fetchedProducts",response.fetchedProducts);
            setAllProducts(response.fetchedProducts)
        }
        if(response.error){
            console.log("failed to fetch products",response.message);   
            setAllProducts(response.fetchedProducts)
        }
    }
    
    useEffect(()=>{
        fetchAllProducts();
    },[])

  return (
    <div className="w-screen grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 place-items-center p-3">
  {
    allProducts ? (
      allProducts.map((product) => (
        <Card key={product.name} className="flex flex-col w-full max-w-xs h-[400px] shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden">
          
          <div className='flex justify-end p-2 text-sm font-bold'>
            {product.quantity > 0 
              ? (<p className='text-green-500'>Available</p>) 
              : (<p>Unavailable</p>)}
          </div>
          
          <CardMedia className="h-48 w-full bg-gray-100 flex items-center justify-center relative">
            <img 
              src={product?.image[0]} 
              alt={product.name} 
              className="object-contain w-full h-full" 
              
            />
            <span className='absolute top-2 right-2 p-2 bg-white rounded-full cursor-pointer'>
            <FavoriteBorderOutlinedIcon className='size-6 '/>
            </span>
          
          </CardMedia>

          <CardContent className="flex-1 flex flex-col justify-between p-4">
            <div>
              <p className="text-md font-bold">{product.name}</p>
              <p className="text-md font-bold"><span>₹</span>{product.price}</p>
              <p className="text-sm text-gray-600 line-clamp-1">{product.description}</p>
            </div>
            <Button variant='contained' className='flex gap-2 cursor-pointer'><FaCartShopping size={'1.2rem'} /> Add to cart</Button>
          </CardContent>
        </Card>
      ))
    ) : null
  }
</div>

  )
}

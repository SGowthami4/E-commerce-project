import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function CategoryList() {
    const [categoryProduct,setCategoryProduct]=useState([])
    const [loading,setLoading]=useState(false)
    const fetchCategoryProduct=async()=>{
        setLoading(true)
        const response=await fetch('https://e-commerce-project-0hn5.onrender.com/products/categoryProduct',{
            method:'get'
        })
        const data=await response.json()
        console.log("categoryProduct",data.categoryProduct);
        
        setLoading(false)
        setCategoryProduct(data.categoryProduct)
    }
    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-4 overflow-scroll scrollbar-none'>
        <div className='flex items-center justify-between gap-10'>
      {
        categoryProduct?.map((product)=>{
            return(
                <Link to={'/product-category/'+product?.category} key={product.category} className='cursor-pointer '>
                    <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                        <img src={product?.image[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all' />
                    </div>
                   <p className='text-center text-sm md:text-base capitalize pt-2'>{product?.category}</p>
                </Link>
            )
        })
      }
        </div>
            
    </div>
  )
}

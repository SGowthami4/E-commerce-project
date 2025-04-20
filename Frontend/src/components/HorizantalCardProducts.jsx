import React, { useEffect, useState } from 'react'
import fetchCategoryWiseProduct from './fetchCategoryWiseProduct'
import { FaAngleRight,FaAngleLeft } from 'react-icons/fa6'
export default function HorizantalCardProducts({category,heading}) {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const loadingList=new Array(13).fill(null)
    
    const fetchData=async()=>{
        setLoading(true)
        const products=await fetchCategoryWiseProduct(category);
        console.log("categorywise:" ,products.categoryWiseProducts);
        
        setLoading(false)
        setData(products?.categoryWiseProducts)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='container mx-auto p-4 my-6 relative'>
        <h2 className='text-2xl font-semibold py-4'>{heading}</h2>
 <div className='flex items-center gap-4 md:gap-6  overflow-scroll scrollbar-none'>
 <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' ><FaAngleLeft/></button>
 <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' ><FaAngleRight/></button>
{
            data?.map((product,index)=>{
                return (
                    <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex ' key={product.id}>
                        <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] hover:scale-110 transition-all'>
                            <img src={product.image[0]} alt="" className='object-scale-down h-full' />
                        </div>
                        <div className='p-4 grid'>
                            <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black' >{product?.name}</h2>
                            <p className='capitalize text-slate-500'>{product?.category}</p>
                            <div className=''>
                                <p className='text-black font-medium'><span>₹</span> {product?.price}</p>
                            </div>
                            <button className='bg-blue-700 hover:bg-blue-800 text-white px-2.5 py-0.5 rounded-full text-sm font-medium'>Add to Cart</button>                   
                         </div>
                        </div>)
        })
    }
                    </div>
     
           </div>
  )
}
        
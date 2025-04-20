import React, { useEffect, useState } from 'react'
import img1_mobile from '../assets/banner/img1_mobile.jpg'
import img2_mobile from '../assets/banner/img2_mobile.webp'
import img3_mobile from '../assets/banner/img3_mobile.jpg'
import img4_mobile from '../assets/banner/img4_mobile.jpg'
import img5_mobile from '../assets/banner/img5_mobile.png'


import image1 from '../assets/banner/img1.webp'
import image2 from '../assets/banner/img2.webp'
import image3 from '../assets/banner/img3.jpg'
import image4 from '../assets/banner/img4.jpg'
import image5 from '../assets/banner/img5.webp'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'


export default function BannerIamges() {
    const [currentImage,setCurrentImage]=useState(0)
    const desktopImages=[
        image1,image2,image3,image4,image5
    ]
    const mobileVersion=[
        img1_mobile,img2_mobile,img3_mobile,img4_mobile,img5_mobile
    ]
    const nextImage=()=>{
        if(desktopImages.length-1>currentImage){
            setCurrentImage((prev)=>prev+1)
        }
    }
    const previousImage=()=>{
        if(currentImage!=0){
            setCurrentImage((prev)=>prev-1)
        }
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(desktopImages.length-1>currentImage){
                setCurrentImage((prev)=>prev+1)
            }else{
                setCurrentImage(0)
            }
        },4000)
        return ()=>clearInterval(interval)
    },[currentImage])
  return (
    <div className='container mx-auto px-4 rounded '>
     <div className='h-60 md:h-72 w-full bg-slate-200 relative '>

        <div className='absolute z-10 w-full h-full md:flex items-center hidden'>
            <div className='flex justify-between w-full text-2xl'>
                <button className='bg-white shadow-md rounded-full p-1' onClick={previousImage}><FaAngleLeft/></button>
            <button className='bg-white shadow-md rounded-full p-1' onClick={nextImage}><FaAngleRight/></button>
            </div>
           
        </div>
        {/* destop screen */}
        <div className='hidden md:flex h-full w-full overflow-hidden'>

        {
            desktopImages.map((imageURL,index)=>{
                return(
                    <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{transform:`translateX(${currentImage*-100}%)`}}>
                    <img src={imageURL} alt={imageURL} className='w-full h-full' />
                    </div>
                )
            })
        }
        </div>

        {/* for mobiles */}

        <div className='flex h-full w-full overflow-hidden md:hidden'>

        {
            mobileVersion.map((imageURL,index)=>{
                return(
                    <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{transform:`translateX(${currentImage*-100}%)`}}>
                    <img src={imageURL} alt={imageURL} className='w-full h-full object-fill' />
                    </div>
                )
            })
        }
        </div>
       
     </div>
    </div>
  )
}

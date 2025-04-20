import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUserDetails } from './userSlice';
import { useState } from 'react';

export default function Header() {

  const user=useSelector(state=>state?.user?.user?.data);
  const dispatch=useDispatch()
  const [menuDisplay,setMenuDisplay]=useState(false)
  console.log("user Header :",user);

  const handleLogout=async()=>{
    const response=await fetch('https://e-commerce-project-0hn5.onrender.com/user/userLogout',{
      method:'get',
      credentials:'include'
    })
    const data=await response.json();
    if(data.success){
        toast.success(data.message)
        dispatch(setUserDetails(null))  //to set user data to null after deleting cookie
      }
      if(data.error){
        toast.error(data.message)
      }
    // console.log("logout",data);
    
  }
  
  return (
   <header className='h-20 shadow-md w-screen bg-white'>
     <div className='h-full container mx-auto flex items-center px-1 justify-between'>
        <div className='items-center'>
          <Link to={'/'}>
            <Logo />
            <h1 className='font-bold text-sm'>GadgetGlobe</h1>
          </Link>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-md border rounded-full focus-within:shadow pl-2 h-10'>
          <input type="text" placeholder='search product here...' className='w-full outline-none text-lg'/>
          <div className='text-lg min-w-[50px] h-10 flex items-center bg-gray-500 justify-center rounded-r-full text-white'>
          <GrSearch />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center' onClick={()=>setMenuDisplay((prev)=>!prev)}>
          <div className='text-3xl cursor-pointer' title='Profile'>
            {
              user?.profile ?
              (<img src={user?.profile} alt={user?.username} className='w-12 h-12 rounded-full' />):(<FaRegCircleUser />)}
          </div>
          {
            menuDisplay && (
              <div className='absolute bg-white -bottom-[3.5rem] h-fit p-2 shadow-lg rounded '>
            <nav>
              <Link to={'/becomeSeller'} className='whitespace-nowrap hover:bg-slate-100 p-2'>Become a Seller</Link>
            </nav>
          </div>
            )
          }  
          </div>
          <div className='text-2xl relative cursor-pointer' title='Cart'>
          <span>
          <FaShoppingCart />
            </span>
            <div className='bg-slate-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>
        <div>
          {
            user?.id?(<button onClick={handleLogout} className='px-3 py-1 rounded-full bg-slate-500 text-white hover:bg-slate-700'>Logout</button>):(<Link to={'/login'} className='px-3 py-1 rounded-full bg-slate-500 text-white hover:bg-slate-700'>Login</Link>
            )
          }
        </div>
        </div>
     </div>
   </header>
  )
}

import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
  
export default function App() {
  const fetchUserDetails= async()=>{
    const response=await fetch('http://localhost:3500/user/user-details',{
      method:'get',
      credentials:'include'
    })
    const data=await response.json();
    console.log("userData",data);
    
  }
  useEffect(()=>{
    fetchUserDetails();
  },[])
  return (
   <>
 <ToastContainer /> 
 <Header />
   <main className='min-h-[calc(100vh-140px)]'>
   <Outlet />
   </main>
   <Footer />
   </>
  )
}
import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import Context from './components/Context'
import { useDispatch } from 'react-redux'
import {setUserDetails} from './components/userSlice'

export default function App() {
  const dispatch=useDispatch()
  const fetchUserDetails= async()=>{
    const response=await fetch('http://localhost:3500/user/user-details',{
      method:'get',
      credentials:'include'
    })
    const data=await response.json();
    console.log("userData",data);
    if(data.success){
      dispatch(setUserDetails(data))
    }
    
  }
  useEffect(()=>{
    fetchUserDetails();
  },[])
  return (
   <>
   <Context.Provider value={{
         fetchUserDetails
   }}>

    <ToastContainer /> 
    <Header />
   <main className='min-h-[calc(100vh-140px)]'>
   <Outlet />
   </main>
   <Footer />
   </Context.Provider>
   </>
  )
}


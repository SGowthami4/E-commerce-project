import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
   <>
   <Header />
   <main className='min-h-[calc(100vh-140px)]'>
   <Outlet />
   </main>
   <Footer />
   </>
  )
}
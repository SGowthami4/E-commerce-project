import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
   <header className='h-20 shadow-md min-w-2 bg-white'>
     <div className='h-full container mx-auto flex items-center px-1 justify-between'>
        <div className='items-center'>
          <Link to={'/'}>
            <Logo />
            <h1 className='font-bold text-sm'>GadgetGlobe</h1>
          </Link>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-md border rounded-full focus-within:shadow pl-2 h-9'>
          <input type="text" placeholder='search product here...' className='w-full outline-none '/>
          <div className='text-lg min-w-[50px] h-9 flex items-center bg-gray-500 justify-center rounded-r-full text-white'>
          <GrSearch />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer' title='Profile'>
            <FaRegCircleUser />
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
          <Link to={'/login'} className='px-3 py-1 rounded-full bg-slate-500 text-white hover:bg-slate-700'>Login</Link>
        </div>
        </div>
     </div>
   </header>
  )
}

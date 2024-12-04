import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [NavItem,setNavItem]=useState(0);
  const {theme,setTheme}=useTheme();
useEffect(()=>{console.log(theme)},[theme])
  return (
    <div className=' flex justify-between items-center fixed z-10 w-full  px-[30px] font-navFont dark:bg-transparent dark:text-white  light:text-black font-semibold text-xl '>
        <div className='flex justify-start items-center gap-x-8 '>
          <div className='flex justify-start items-center gap-x-2 cursor-pointer' onClick={()=>{setNavItem(0)}}>
          <img src="https://static.thenounproject.com/png/5402474-512.png" alt="" className="w-[50px] h-[50px]   " />
           <p className='font-navFont'>Web Dev </p>
          </div>
            <p onClick={()=>{setNavItem(0)}} className={` px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==0?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Home</p>
            <p onClick={()=>{setNavItem(1)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==1?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Projects</p>
            <p onClick={()=>{setNavItem(2)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==2?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Skiils </p>
            <p onClick={()=>{setNavItem(3)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==3?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Experiencces</p>
            <p onClick={()=>{setNavItem(4)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==4?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Education</p>
            <p onClick={()=>{setTheme(theme ==='dark' ?'light':'dark')}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==5?'bg-slate-300 ':''} `}>Admin</p>
        </div>
    </div>
  )
}

export default NavBar
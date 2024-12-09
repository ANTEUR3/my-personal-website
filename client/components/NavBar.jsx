import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { CiLight } from "react-icons/ci";
import Link from 'next/link';
import Smmenu from './Smmenu';


const NavBar = () => {
  const [NavItem,setNavItem]=useState(2);
  const {theme,setTheme}=useTheme();

  const [smMenu,setSmMenu]=useState(false);
  
useEffect(()=>{console.log(theme)},[theme])

const toggleTheme = () => {
  if (typeof window !== 'undefined') {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }
};
  return (
    <div className='w-full ' >
    <div className={'flex  justify-between items-center fixed z-30  w-full  px-4 md:px-5 lg:pl-10 lg:pr-[90px]    font-navFont dark:bg-transparent dark:text-white  light:text-black font-semibold md:text-lg lg:text-lg '}>
        <div className='flex justify-start items-center gap-x-5 '>
          <div className='flex justify-start items-center gap-x-2 cursor-pointer mr-10' onClick={()=>{setNavItem(0)}}>
            <img src="https://static.thenounproject.com/png/5402474-512.png" alt="" className="w-[50px] h-[50px]   " />
              <p className='font-navFont'>Web Dev </p>
          </div>
            <Link href={'/'} onClick={()=>{setNavItem(0)}} className={`hidden lg:block  px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==0?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Home</Link>
            <Link href={'/Projects'} onClick={()=>{setNavItem(1)}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==1?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Projects</Link>
            <Link href={'/Projects'} onClick={()=>{setNavItem(2)}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==2?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Skiils </Link>
            <Link href={'/Projects'} onClick={()=>{setNavItem(3)}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==3?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Experiencces</Link>
            <Link href={'/Projects'} onClick={()=>{setNavItem(4)}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==4?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Education</Link>
            <Link href={'/Projects'} onClick={()=>{setNavItem(5)}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==5?'bg-slate-300 ':''} `}>Admin</Link>
        </div>
        <div className='flex items-center justify-end gap-x-3'>
           <div className="flex flex-col justify-center items-center cursor-pointer px-1 py-1 border rounded-md">
            {theme==='dark' ?       
                    <CiLight onClick={()=>{setTheme(theme ==='dark' ?'light':'dark')}} className='text-3xl'/>
                     : 
                    <MdOutlineDarkMode onClick={()=>{setTheme(theme ==='dark' ?'light':'dark')}} className='text-3xl'/>}
           </div>
           <div className="flex flex-col justify-center items-center cursor-pointer px-1 py-1 border rounded-md md:hidden">
               <LuMenu onClick={()=>{setSmMenu(!smMenu)}} className='text-3xl'/>
           </div>
        </div>
    </div>
    {smMenu ?<Smmenu handleMenu={setSmMenu} />:''}
    
    
    </div >
    
  )
}

export default NavBar
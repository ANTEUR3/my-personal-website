import { useTheme } from 'next-themes';
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { CiLight } from "react-icons/ci";
import Link from 'next/link';
import Smmenu from './Smmenu';
import { FaDev } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { appContext } from '@/DataContext';


const NavBar = () => {
  const {navItem,handleItem}=useContext(appContext);
  const {theme,setTheme}=useTheme();

  const [smMenu,setSmMenu]=useState(false);
  
useEffect(()=>{console.log(theme)},[theme])
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div className={`w-full  fixed z-30 ${isScrolled ?'bg-slate-100 dark:bg-slate-950':'bg-transparent'}` } >
    <div className={'flex  justify-between items-center   w-full  px-2 md:px-5 lg:pl-10 lg:pr-[90px] py-1    font-navFont dark:bg-transparent dark:text-white  light:text-black font-semibold md:text-lg lg:text-lg '}>
        <div className='flex justify-start items-center  gap-x-5 '>
          <div className='flex justify-start items-center gap-x-2 cursor-pointer mr-10' onClick={()=>{handleItem({payload:0})}}>
            <FaConnectdevelop  alt="" className="  text-slate-900 dark:text-white w-[30px] h-[30px] md:w-[45px] md:h-[45px] " />
              <p className='font-navFont'>Web Dev </p>
          </div>
            <Link href={'/'} onClick={()=>{handleItem({payload:0})}} className={`hidden lg:block  px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${navItem==0?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Home</Link>
            <Link href={'/Projects'} onClick={()=>{handleItem({payload:1})}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${navItem==1?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Projects</Link>
            <Link href={'/Skiils'} onClick={()=>{handleItem({payload:2})}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${navItem==2?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Skiils </Link>
            <Link href={'/Projects'} onClick={()=>{handleItem({payload:3})}} className={`hidden lg:block px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${navItem==3?'bg-gray-900 text-white dark:bg-blue-600 ':''} `}>Contacts</Link>
            
             </div>
        <div className='flex items-center justify-end gap-x-3'>
           <div className="flex flex-col justify-center items-center cursor-pointer px-1 py-1 border rounded-md">
            {theme==='dark' ?       
                    <CiLight onClick={()=>{setTheme(theme ==='dark' ?'light':'dark')}} className='text-xl md:text-3xl'/>
                     : 
                    <MdOutlineDarkMode onClick={()=>{setTheme(theme ==='dark' ?'light':'dark')}} className='text-xl md:text-3xl'/>}
           </div>
           <div className="flex flex-col justify-center items-center cursor-pointer px-1 py-1 border rounded-md lg:hidden">
               <LuMenu onClick={()=>{setSmMenu(!smMenu)}} className='text-xl md:text-3xl'/>
           </div>
        </div>
    </div>
    {smMenu ?<Smmenu handleMenu={setSmMenu} />:''}
    
    
    </div >
    
  )
}

export default NavBar
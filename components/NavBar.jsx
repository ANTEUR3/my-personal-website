import React, { useState } from 'react'

const NavBar = () => {
  const [NavItem,setNavItem]=useState(0);
  return (
    <div className='flex justify-between items-center  bg-gradient-to-r from-slate-400 to-blue-300 px-[30px] font-navFont '>
        <div className='flex justify-start items-center gap-x-8 '>
          <div className='flex justify-start items-center gap-x-2 cursor-pointer' onClick={()=>{setNavItem(0)}}>
          <img src="https://static.thenounproject.com/png/5402474-512.png" alt="" className="w-[50px] h-[50px]   " />
           <p className='font-navFont'>Web Dev </p>
          </div>
            <p onClick={()=>{setNavItem(0)}} className={` px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==0?'bg-slate-300 text-slate-900':''} `}>Home</p>
            <p onClick={()=>{setNavItem(1)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==1?'bg-slate-300 text-slate-900':''} `}>Projects</p>
            <p onClick={()=>{setNavItem(2)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==2?'bg-slate-300 text-slate-900':''} `}>Skiils </p>
            <p onClick={()=>{setNavItem(3)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==3?'bg-slate-300 text-slate-900':''} `}>Experiencces</p>
            <p onClick={()=>{setNavItem(4)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==4?'bg-slate-300 text-slate-900':''} `}>Education</p>
            <p onClick={()=>{setNavItem(5)}} className={`px-2 py-1 rounded-md transition-all duration-700 ease-in-out  cursor-pointer  ${NavItem==5?'bg-slate-300 text-slate-900':''} `}>Admin</p>
        </div>
    </div>
  )
}

export default NavBar
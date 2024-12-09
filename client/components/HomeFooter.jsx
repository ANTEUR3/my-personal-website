import React from 'react'
import { FaLinkedin  } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-y-7 '>
        <div className="col-span-1  flex justify-start items-center gap-x-5">
             <FaLinkedin  className='text-4xl text-black dark:text-blue-800  cursor-pointer '/>  
             <FaSquareFacebook className='text-4xl text-black dark:text-blue-800  cursor-pointer'/>  
             <FaGithub className='text-4xl text-black dark:text-blue-800  cursor-pointer'/>  
             <FaInstagramSquare className='text-4xl text-black dark:text-blue-800  cursor-pointer'/>  

        </div>
        <div className="col-span-1 -red-400 flex justify-start md:justify-center items-center gap-x-4 pr-[16px]">
            <button className='rounded-lg px-3 py-2 shadow-xl bg-gray-900 text-white dark:bg-blue-800 dark:text-white font-semibold hover:-translate-y-2 hover:scale-105 transition-transform duration-300 ease-out '>Projects</button>
            <button className='rounded-lg px-3 py-2 shadow-xl bg-gray-900 text-white dark:bg-blue-800 dark:text-white font-semibold hover:-translate-y-2 hover:scale-105 transition-transform duration-300 ease-out '>Contact me</button>
        </div>

    </div>
  )
}

export default HomeFooter
import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

const Framworks = () => {
  return (
    <div className='col-span-1 pt-2 w-full'>
        <div className='flex justify-start items-center pt-2 gap-x-2 dark:text-blue-500'>
            <RiTailwindCssFill   className='text-xl lg:text-2xl'/>
            <FaNodeJs   className='text-xl lg:text-2xl'/>
            <h3 className='text-xl lg:text-2xl font-semibold'>Framworks</h3> 

        </div>
        <div className="flex flex-col justify-start items-start pt-4 lg:gap-y-2 gap-y-3 ">
            <div className="flex justify-start items-center lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <FaReact   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
            <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>React.js</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'>I use framwoek to buils nice Single page applications with its nice features</p>
                </div>
            </div>
            <div className="flex justify-start items-center lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <FaNodeJs   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
                <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>PHP</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'>I can use PHP to build web applications with Laravel and handle Mysql databases </p>
                </div>
            </div>
            <div className="flex justify-start items-center lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <RiTailwindCssFill   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
                <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>Java</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'> i use java when i want to use OOP Programming or complexes algorithms </p>
                </div>
            </div>
            <div className="flex justify-start items-center lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <FaLaravel   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
                <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>Laravel</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'>I have previously built web apps with laravel and php</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Framworks
import React from 'react'
import { FaRegFileCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiPhpFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Languages = () => {
  return (
    <div className='col-span-1 pt-2 w-full '>
        <div className='flex justify-start items-center gap-x-2 pt-2 dark:text-blue-500'>
        <FaRegFileCode className='lg:text-2xl text-xl '/>
        <h3 className='lg:text-2xl text-xl font-semibold'>Languages</h3> 
        
        </div>
       
        <div className="flex flex-col justify-start items-start pt-4 gap-y-3 lg:gap-y-2  ">
            <div className="flex justify-start items-center  lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
                <IoLogoJavascript   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
                <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>Javascript</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'>I can use javascript to build web applications , with many their framwork </p>
                </div>
            </div>
            <div className="flex justify-start items-center  lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <RiPhpFill   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
            <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>PHP</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'>I can use PHP to build web applications with Laravel and handle Mysql databases </p>
                </div>
            </div>
            <div className="flex justify-start items-center  lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <FaJava   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
                <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>Java</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'> i use java when i want to use OOP Programming or complexes algorithms </p>
                </div>
            </div>
            <div className="flex justify-start items-center  lg:items-start gap-x-5 border border-gray-500 w-full rounded-lg pl-2 py-1">
            <FaPython   className='lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] dark:text-blue-500' />
                <div className='flex flex-col justify-start items-start lg:gap-y-1 pt-3'>
                    <p className='lg:text-xl font-semibold dark:text-white '>Python</p>
                    <p className='w-3/4 text-gray-700 dark:text-gray-500'>I use this language for mathematics functions with several libraries like numpay matplotlib ... </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Languages
import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "../components/NavBar.jsx";
import Footer from "@/components/Footer.jsx";
import { Signika_Negative } from "next/font/google";
import { blur } from "../public/images/blur.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import Skills from "@/components/Skiils/Skills.jsx";
import supabase from "../config/SupaBaseClient"
import { useEffect } from "react";

import GeneralInformations from "@/components/GeneralInformations.jsx";
import LanguagesAndTools from "@/components/LanguagesAndTools.jsx";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const navFont = Signika_Negative({
  subsets: ["latin"],
  variable: "--font-sofia",
});


export default function Home() {
  useEffect(()=>{console.log(supabase)},[])
  return (
    <div className="relative w-full min-h-screen pb-4 flex flex-col pt-[20px] md:pt-0 justify-center items-center ">
      
         <div className="dark:hidden relative h-screen w-full">
             <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-600 ">
                   <div className="absolute inset-0   bg-center bg-[url('/images/gplay.png')] backdrop-blur-md ">
                   </div>
    
              </div>
              <GeneralInformations /> 
          </div>
         
          <div className="hidden relative dark:block h-screen w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-800 hidden dark:block">
            
                   <div className="absolute inset-0  opacity-10 bg-center bg-[url('/images/gplay.png')] backdrop-blur-md dark:block hidden">
                   </div>
      
              </div>
              <GeneralInformations /> 
         </div>

       <LanguagesAndTools />
      </div>
      
  );
}

import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "../components/NavBar.jsx";
import Footer from "@/components/Footer.jsx";
import {Signika_Negative} from 'next/font/google'
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
   subsets:["latin"],
  variable: "--font-sofia",
  
});



export default function Home() {
  return (
    <div className={`${navFont.variable} w-full  `}>
       hello
    </div>
  );
}

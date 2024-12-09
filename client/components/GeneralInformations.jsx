import React from "react";
import HomeFooter from "./HomeFooter";

const GeneralInformations = () => {
  return (
    <div className="w-full min-h-screen  px-[35px] lg:pl-[200px] relative z-20  flex flex-col justify-center items-start gap-y-1 md:gap-y-7  ">
      <div className="flex justify-start items-start gap-x-10 md:flex-row flex-col ">
        <img
          src="/images/younes.png"
          className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] rounded-full shadow-xl border-2"
          alt=""
        />
        <div className="flex justify-start items-center gap-x-7 py-4 dark:text-white">
          <p className="sm:text-3xl md:text-5xl font-extrabold ">
            Hi , I'm <span className="dark:text-blue-600">Younes</span>  <br></br>{" "}
            <span className=""><span className="dark:text-blue-600">Full Stack</span> Web Developer</span>{" "}
          </p>
          <img
            src="/images/developer.png"
            alt=""
            className="w-[100px] h-[80px]"
          />
        </div>
      </div>
      <div className="md:text-2xl dark:text-white  ">
        <p> <span className="dark:text-blue-600 text-gray-900 font-bold">Full stack web developer</span> , i use serveral technologies like <span className="dark:text-blue-600 text-gray-900 font-bold">node.js next.js mongoDB</span> </p>
        <p>i work now on developing my self by try and learning latest tools</p>
        <p>i want to <span className="dark:text-blue-600 text-gray-900 font-bold">learn IA field</span>  in Future.</p>
      </div>
      <HomeFooter/>

    </div>
  );
};

export default GeneralInformations;

import { getProjectSkills } from "@/config/DataBaseFunctions";
import React, { useEffect, useMemo } from "react";
import Skills from "../Skiils/Skills";
import supabase from '@/config/SupaBaseClient';
import { useState } from "react";
const ProjectsIndex = ({ Projects,projectsSkills }) => {
  
  const DisplayProjects =  Projects.map((project, key) => {
      const skills=projectsSkills.filter((skills)=>  project.id==skills.Project)
      console.log(skills,project.id)
      return (
        <div
          key={project.id}
          className={`col-span-1 rounded-lg bg-cover    relative group flex justify-center items-center   cursor-pointer overflow-hidden h-[500px] md:h-[350px] lg:h-[300px] `}
          style={{ backgroundImage: `url(${project.PrincipaleImage})` }}
        >
          <div className=" bg-gradient-to-t from-gray-700 via-gray-600  to-transparent w-full h-[53%] bottom-0 absolute group-hover:h-[100%]  flex "></div>

          <div className="absolute   bottom-[48px]  left-4 transition-all text-yellow-400 font-bold duration-1000 group-hover:translate-y-[100px] ">
            {project.Name}
          </div>
          
          <div className="absolute flex justify-start items-center gap-x-2  bottom-[10px]  left-4 transition-all text-gray-600 font-bold duration-1000 group-hover:translate-y-14   ">
            {skills.map((skill,index)=>{
              return <p key={index} className="px-2 py-1 rounded-lg text-sm bg-slate-200">{skill.Skills.Name}</p>
            })
            
           }
          </div>
          <div className="absolute w-full flex justify-center items-center py-1  -translate-y-[200px] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
              <button className="px-3 py-2  bg-green-600 text-white font-semibold  rounded-lg hover:bg-green-400">Detaills</button>
          </div>
        </div>
      );
    });

  return (
    <div className="w-full px-10 lg:px-[30px] min-h-screen">
      <h1 className="lg:text-2xl text-xl font-semibold text-gray-950 lg:mb-1 dark:text-slate-100">Projects</h1>
      <p className="text-gray-700 lg:text-lg dark:text-slate-400">in the section you will found all my projects</p>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 relative z-10 pt-10 lg:pt-[30px]  ">
        {DisplayProjects}
      </div>
    </div>
  );
};

export default ProjectsIndex;

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
          onClick={()=>window.location.href=`/Projects/${project.id}`}
          key={project.id}
          className={`col-span-1 rounded-lg bg-cover gap-y-3 pr-2    relative group flex flex-col justify-end items-start border-2 border-black
               cursor-pointer overflow-hidden h-[200px] md:h-[350px] lg:h-[300px] `}
          //style={{ backgroundImage: `url(${project.PrincipaleImage})` }}
        >
          <img className="absolute inset-0 w-full lg:h-[300px] h-[200px] md:h-[350px] lg:group-hover:h-[250px] transition-all duration-700 ease-out" src={`images/ProjectImages/${project.PrincipaleImage}`} />
          <div className=" bg-gradient-to-t from-gray-500 via-gray-300  to-transparent w-full h-[53%] bottom-0 absolute group-hover:h-[100%] hidden  group-hover:flex "></div>
           
           <div className="absolute pb-2 translate-y-[200px] group-hover:translate-y-0 transition-transform duration-700 ease-in-out pr-2">
               <div className="relative gap-y-2 flex flex-col justify-end items-start pl-4">
                    <div className="   z-2 lg:text-lg   transition-all text-blue-700 font-semibold duration-1000 w-full overflow-hidden h-[25px]   ">
                         {project.Name}
                     </div>
                     <div className="font-semibold lg:text-lg">
                         {project.Description}
                     </div>
          
                     <div className=" flex justify-start items-center gap-x-2     transition-all text-gray-600 font-bold duration-1000   ">
                        {skills.map((skill,index)=>{
                             return <p key={index} className="px-2 py-1 rounded-lg text-sm bg-slate-200">{skill.Skills.Name}</p>
                        })
                         }
                     </div>
         
              
          
                </div>
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

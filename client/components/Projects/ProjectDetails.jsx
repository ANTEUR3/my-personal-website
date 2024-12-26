import React, { useMemo } from 'react'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
const ProjectDetails = ({project,projectSkills}) => {

  const Skills=useMemo(()=>{
    return projectSkills.map((Skill,key)=>{
      return <div key={key} className='px-2 py-1 rounded-lg font-semibold bg-gray-950 text-white '>
            {Skill.Skills.Name}
      </div>
    })
  },[projectSkills])
  console.log(project)
  return (
    <div className='px-3 w-[70%] '>
      <div className='w-full  border-b-[0.7px] border-gray-300 flex flex-col justify-start items-start gap-y-2 pt-2 pb-5 '>
        <h1 className='font-bold text-3xl'>{project.Name}</h1>
        <h1 className=' text-gray-800'>{project.Title}</h1>
      </div>
      <div className='w-full  border-b-2 border-gray-300 flex flex-col justify-start items-start gap-y-2 py-[25px]  '>
        <h1 className='font-bold text-3xl'>About {project.Name}</h1>
        <h1 className=' text-gray-800'>{project.Description}</h1>
      </div>
      <div className='w-full  border-b-2 border-gray-300 flex flex-col justify-start items-start gap-y-2 py-[25px]  '>
        <h1 className='font-bold text-3xl'>Features of {project.Name}</h1>
        <h1 className=' text-gray-800'>{project.Description}</h1>
      </div>
      <div className='w-full   flex  justify-between items-end  py-[25px]   '>
        <div className='flex flex-col justify-start items-start gap-y-2'>
        <h1 className='font-bold text-3xl'>Skills of {project.Name}</h1>
        <div className='flex justify-start items-center gap-x-3 pt-1'>{Skills}</div>
        
        </div>
        <Link href={project.Url} className='px-2 py-2 flex justify-between items-center gap-x-3 bg-slate-300 rounded-lg'>
          <FaGithub className='text-lg text-black'/>
          <p className='text-lg'>Visite Project</p>
        </Link>
       
      </div>
    </div>
  )
}

export default ProjectDetails
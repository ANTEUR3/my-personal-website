import React, { useMemo } from 'react'

const ProjectsIndex = ({Projects}) => {
  const DisplayProjects=useMemo(()=>{
    return Projects.map((project,index)=>{
            return <div key={index} className='col-span-1   relative group border border-red-600 cursor-pointer '>
                   <img src={project.PrincipaleImage} className='absolute  hover:opacity-30 ' alt="" />
                   <img src='/Images/blur.png' className='absolute   ' alt="" />

                   <div className='absolute  justify-start items-center gap-x-3 hidden group-hover:flex bottom-3  left-4'>
                                  gggg
                   </div>
           </div>
     })
  },[])
  return ( 
    <div className='w-full grid lg:grid-cols-3 gap-4 relative z-10 px-5'>
       {DisplayProjects}
       
    </div>
  )
}

export default ProjectsIndex
import ProjectsIndex from '@/components/Projects/ProjectsIndex';
import WaitingData from '@/components/WaitingData';
import supabase from '@/config/SupaBaseClient';
import React from 'react'
import { useState, useEffect } from 'react';

const index = () => {
  
 
  const [projects,setProjects]=useState([]);
  const [projectSkills,setProjectsSkills]=useState([]);

    useEffect(()=>{
      




        const fetchProjects= async ()=>{
            const {data,error}=await supabase
            .from('Prjcts')
            .select()

            if(error){
                console.log(error)
            }
            if(data){
                setProjects(data);
            }

            
        }
        const ProjectsSkills= async ()=>{
          const {data,error}=await supabase
    .from('ProjectSkills')
    .select('*,Skills(*)')
    

    if(error){
        console.log(error)
    }
     console.log(data)
      setProjectsSkills(data)

      }
        fetchProjects();
        ProjectsSkills();
       
    },[])
    useEffect(()=>{console.log(projects)},[projects])
    useEffect(()=>{console.log(projectSkills)},[projectSkills])

    
    
  return (
    <div className='relative min-h-screen w-full  dark:bg-slate-900 pt-[60px] lg:pt-[100px]' >

      {projects.length >0?
      <ProjectsIndex Projects={projects} projectsSkills={projectSkills} />
      :<WaitingData />}
        
        
    </div>
  )
}

export default index
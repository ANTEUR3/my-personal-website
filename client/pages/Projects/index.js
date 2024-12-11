import ProjectsIndex from '@/components/Projects/ProjectsIndex';
import WaitingData from '@/components/WaitingData';
import supabase from '@/config/SupaBaseClient';
import React from 'react'
import { useState, useEffect } from 'react';

const index = () => {
  const [projects,setProjects]=useState([]);
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
        fetchProjects();
    },[])
    useEffect(()=>{console.log(projects)},[projects])
 
  return (
    <div className='relative min-h-screen w-full bg-slate-50 dark:bg-slate-900 lg:pt-[100px]' >

      {projects.length >0?
      <ProjectsIndex Projects={projects} />
      :<WaitingData />}
        
        
    </div>
  )
}

export default index
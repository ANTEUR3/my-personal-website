import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { appContext } from '@/DataContext.js';
import WaitingData from '@/components/WaitingData';
import ProjectDetails from '@/components/Projects/ProjectDetails';

const project = () => {
    const [projectDiplay,setProjectDisplay]=useState(null);

    const router=useRouter();
    const project=router.query.project;
    const {projects}=useContext(appContext);
    useEffect(()=>{
      const projectsDis=projects.filter(p=>p.id==project)
      setProjectDisplay(projectsDis)
    },[projects])
  return (
    <div className='min-h-screen'>
      {projectDiplay ?<ProjectDetails project={projectDiplay} />:<WaitingData />}
    </div>
  )
}

export default project
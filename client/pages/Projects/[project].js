import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '@/DataContext.js';
import WaitingData from '@/components/WaitingData';
import ProjectDetails from '@/components/Projects/ProjectDetails';

const Project = () => {
    const [projectDisplay, setProjectDisplay] = useState(null);
    const [skills,setSkills]=useState([]);
    

    const router = useRouter();
    const projectId = router.query.project;
    const { projects,projectsSkills } = useContext(appContext);


    useEffect(() => {
        const projectData = projects.find(p => p.id == projectId);
        setProjectDisplay(projectData);
    }, [projects, projectId]);
    useEffect(() => {
      const projectSkills = projectsSkills.filter((Skill)=> Skill.Project==projectId);
      setSkills(projectSkills);
  }, [projectsSkills, projectId]);

    return (
        <div className='h-screen p-4 bg-gray-100 lg:pt-[100px] w-full  '>
            {projectDisplay ? (
                <div className='h-screen w-full px-3 flex justify-start items-start'>
                  <img className='lg:w-[30%] lg:h-[300px] lg:absolute right-3 tip-[100px]' src={projectDisplay.PrincipaleImage} />
                  <ProjectDetails project={projectDisplay} projectSkills={projectsSkills}/>
                </div>
            ) : (
                <WaitingData />
            )}
        </div>
    )
}

export default Project
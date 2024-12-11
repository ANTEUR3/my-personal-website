import React, { useMemo } from "react";

const ProjectsIndex = ({ Projects }) => {
  const DisplayProjects = useMemo(() => {
    return Projects.map((project, index) => {
      return (
        <div
          key={index}
          className={`col-span-1 rounded-lg bg-cover    relative group   cursor-pointer overflow-hidden lg:h-[300px] `}
          style={{ backgroundImage: `url(${project.PrincipaleImage})` }}
        >
          <div className=" bg-gradient-to-t from-black via-gray-400  to-transparent w-full h-[48%] bottom-0 absolute  flex "></div>

          <div className="absolute   bottom-[40px]  left-4 transition-all text-white font-bold duration-1000 group-hover:translate-y-16 ">
            {project.Name}
          </div>
          <div className="flex justify-start items-center gap-x-5 pl-4 absolute   bottom-[10px]  left-4 transition-all text-white font-bold duration-1000 group-hover:translate-y-14   ">
            <p>Anteur</p>
            <p>ounes</p>
            <p>2014</p>
          </div>
          <div className="absolute w-full flex justify-center items-center py-1  translate-y-20 group-hover:translate-y-0 lg:bottom-[30px] transition-transform duration-700 ease-in-out">
              <button className="px-3 py-2  bg-orange-400 text-white font-semibold  rounded-lg hover:bg-orange-600">Detaills</button>
          </div>
        </div>
      );
    });
  }, []);
  return (
    <div className="w-full lg:pl-[30px]">
      <h1 className="lg:text-2xl font-semibold text-gray-950 lg:mb-1 dark:text-slate-300">Projects</h1>
      <p className="text-gray-700 lg:text-lg dark:text-slate-400">in the section you will found all my projects</p>
      <div className="w-full grid lg:grid-cols-3 gap-4 relative z-10 lg:pt-[30px]  ">
        {DisplayProjects}
      </div>
    </div>
  );
};

export default ProjectsIndex;

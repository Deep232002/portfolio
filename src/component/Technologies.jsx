import React from 'react';
import { DiJavascript } from "react-icons/di";
import { FaReact, FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";

function Technologies() {
  const techStack = [
    { name: "JavaScript", icon: <DiJavascript className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-teal-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "Node.js", icon: <IoLogoNodejs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <div className='container mx-auto px-4 py-10'>
      <div className='text-3xl md:text-5xl font-extralight text-center mb-8 text-[#FF9800]'>
        Technologies
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10'>
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-6xl md:text-8xl">
              {tech.icon}
            </div>
            <span className="text-lg md:text-xl font-semibold mt-2">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;

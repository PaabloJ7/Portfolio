import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const LeftLane = () => {
  return (
    <div className="fixed left-12 bottom-0 hidden lg:block">
    <div className="flex flex-col items-center">
      <div className="space-y-4 mb-4">
        <a href="https://linkedin.com/in/pablosierra-dev" target="_blank" rel="noopener noreferrer" 
           className="text-mi-verde hover:text-gray-100 hover:scale-110 transition-transform">
          <FaLinkedin size={30} /></a>
        <br/>
        <a href="https://github.com/PaabloJ7" target="_blank" rel="noopener noreferrer"
           className="text-mi-verde hover:text-gray-100 hover:scale-110 transition-transform">
          <FaGithub size={30} /></a>
      </div>
      <div className="w-[1px] h-32 bg-gray-300 dark:bg-gray-700"></div>
    </div>
  </div>
  )
}

export default LeftLane
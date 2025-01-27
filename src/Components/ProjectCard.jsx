import React from 'react'

const ProjectCard = ({ title, content }) => {
  return (
    <a href="#" className="m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img 
        className="object-cover w-full rounded-t-lg h-[400px] md:h-[300px] md:w-96 md:rounded-none md:rounded-s-lg" 
        src="/src/assets/Macbook Pro & Air Device Mockups (Community).svg" 
        alt="Foto del proyecto VitalMe" 
      />
      <div className="flex flex-col justify-between p-8 leading-normal">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">VitalMe</h5>
        <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of</p>
      </div>
    </a>
  )
}

export default ProjectCard

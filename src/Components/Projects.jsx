import React from 'react'

const Projects = () => {
  return (
    <div className="flex justify-center items-center  md:mt-10
     ">
    <div className="bg-black/40 backdrop-blur-lg border border-white/18 rounded-lg p-8 shadow-lg ">
        <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">Symfony </a>

        <a href="#" className="bg-green-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2 mx-2">PHP</a>

        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Proyecto VitalMe</h2>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
          WebApp Fitness para controlar la salud de los usuarios, funcionalidades de registro de datos, seguimiento de la
          evolución de los datos, y generación de informes. </p>
        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"> Read more
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />  </a>
      </div>
      </div>
  )
}

export default Projects

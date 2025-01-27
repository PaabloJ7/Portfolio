import React from 'react'

const ProjectCard2 = ({ title, content }) => {
  return (
    <div className="m-auto flex flex-row bg-[#1C1C1C] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-6xl overflow-hidden">
      <div className="w-1/2 relative">
        <img 
          className="object-cover w-full h-auto p-5" 
          src="/src/assets/40shots_so.png" 
          alt="Foto del proyecto Mi Music" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-transparent to-transparent opacity-50"></div>
      </div>
      <div className="w-1/2 p-12 flex flex-col justify-center">
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-4 py-1.5 text-sm font-medium bg-[#2A2A2A] text-gray-300 rounded-full">
            PHP
          </span>
          <span className="px-4 py-1.5 text-sm font-medium bg-[#2A2A2A] text-gray-300 rounded-full">
            Symfony
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white tracking-tight">Soundwave</h1>
        
        <p className="mb-8 text-lg text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis fugiat fuga tenetur, minus ex et cumque, praesentium beatae quos aspernatur nemo incidunt quisquam nostrum nesciunt repudiandae neque vitae est!
        Deleniti aut quaerat, nostrum optio repudiandae repellendus adipisci quas corporis commodi esse dolor. 
       
        </p>

        <div className="flex gap-4">
          {/* Botón de GitHub */}
          <a 
            href="https://github.com/PaabloJ7/Proyecto-MiMusic" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#2A2A2A] rounded-full hover:bg-[#3A3A3A] transition-colors duration-200 w-fit"
          >
            <i className="h-4 w-7 fa-brands fa-github"></i>
            Código
          </a>

          {/* Botón de Saber Más */}
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#2A2A2A] rounded-full hover:bg-[#3A3A3A] transition-colors duration-200 w-fit"
          >
            <i className="h-4 w-7 fas fa-info-circle mr-1"></i>
            Saber más
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard2

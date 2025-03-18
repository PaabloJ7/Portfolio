import React from 'react';

const ProjectCard = ({ title, content }) => {
  return (
    <div id="Proyectos" className="m-auto flex flex-row max-w-7xl overflow-hidden">
      {/* Columna izquierda (foto del proyecto) */}
      <div className="w-1/2 relative z-10">
        <img 
          className="object-cover w-full h-full" 
          src="/images/40shots_so.png"
          alt="Foto del proyecto VitalMe" 
        />
      </div>

      {/* Columna derecha (descripción del proyecto y tecnologías) */}
      <div className="w-1/2 p-12 flex flex-col justify-center z-20 bg-transparent">
        <h1 className="mb-4 text-4xl font-bold text-white tracking-tight">
          Mi Music 
        </h1>
        
        <p className="mb-8 text-lg text-gray-400 leading-relaxed">
        Plataforma de streaming musical desarrollada con PHP y Symfony, implementando una arquitectura MVC y gestión de bases de datos MySQL. Incluye sistema de autenticación, gestión de playlists, reproductor de audio integrado y panel de administración para gestionar contenidos y usuarios.
        </p>

        {/* Tecnologías con iconos */}
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-300 rounded-full">
            <img 
              className="h-5 w-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
              alt="PHP" 
            />
            PHP
          </span>
          <span className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-300 rounded-full">
            <img 
              className="h-5 w-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" 
              alt="Symfony" 
            />
            Symfony
          </span>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/PaabloJ7/Proyecto-MiMusic" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#2A2A2A] rounded-full hover:bg-[#3A3A3A] transition-colors duration-200 w-fit"
          >
            <i className="h-4 w-7 fa-brands fa-github"></i>
            Código
          </a>

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
  );
};

export default ProjectCard;

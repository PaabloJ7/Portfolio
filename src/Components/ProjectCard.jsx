import React from 'react';

const ProjectCard = ({ title, description, image, technologies, githubLink, moreInfoLink }) => {
  return (
    <div className="m-auto mb-6 flex flex-row max-w-7xl overflow-hidden">
      {/* Columna izquierda (foto del proyecto) */}
      <div className="w-1/2 relative z-10 group">
        <img
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={`Foto del proyecto ${title}`}
        />
      </div>

      {/* Columna derecha (descripción del proyecto y tecnologías) */}
      <div className="w-1/2 p-12 flex flex-col justify-center z-20 bg-transparent">
        <h1 className="mb-4 text-4xl font-bold text-white tracking-tight">
          {title}
        </h1>

        <p className="mb-8 text-lg text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tecnologías con iconos */}
        <div className="flex flex-wrap gap-4 mb-6">
          {technologies.map((tech, index) => (
            <img
              key={index}
              className="h-8 w-8"
              src={tech.icon}
              alt={tech.name}
            />
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <a
            href={githubLink}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#1D2939] rounded-full hover:bg-[#3A3A3A] transition-colors duration-200 w-fit"
          >
            <i className="h-4 w-7 fa-brands fa-github"></i>
            Código
          </a>

          <a
            href={moreInfoLink}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#1D2939] rounded-full hover:bg-[#3A3A3A] transition-colors duration-200 w-fit"
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
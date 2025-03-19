import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Web App VitalMe",
      description: "Una aplicación completa para el seguimiento de tu estilo de vida saludable. Registra datos nutricionales de comidas consumidas y gastadas, establece objetivos nutricionales y mantiene un control detallado de tu progreso hacia una vida más saludable.",
      image: "/images/Macbook Pro & Air Device Mockups (Community).svg",
      technologies: [
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg", name: "Symfony" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
      ],
      githubLink: "https://github.com/PaabloJ7/Proyecto-VitalMe",
      moreInfoLink: "#",
    },
    {
      title: "Mi Music",
      description: "Plataforma de streaming musical desarrollada con PHP y Symfony, implementando una arquitectura MVC y gestión de bases de datos MySQL. Incluye sistema de autenticación, gestión de playlists, reproductor de audio integrado y panel de administración para gestionar contenidos y usuarios.",
      image: "/images/40shots_so.png",
      technologies: [
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg", name: "Symfony" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
      ],
      githubLink: "https://github.com/PaabloJ7/Proyecto-MiMusic",
      moreInfoLink: "#",
    },
  ];

  return (
    <div id="Proyectos" className="min-h-screen flex flex-col items-center justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
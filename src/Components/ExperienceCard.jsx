import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      jobTitle: "Desarrollador web",
      company: "Navantia, S.A, España",
      period: "Marzo 2024 - Junio 2024",
      description: "Trabajé en el desarrollo de intranets y web corporativa para Navantia, participando en la planificación y diseño de sus funcionalidades. Mejora de la experiencia de usuario y implementación de funcionalidades clave alineadas con los objetivos organizacionales."
    },
    {
      jobTitle: "Técnico informático",
      company: "Maximinos School Cluster, Portugal",
      period: "Marzo 2022 - Junio 2022",
      description: "Colaboración en la instalación y configuración de redes, mantenimiento de equipos informáticos y resolución de problemas técnicos, contribuyendo al soporte diario de la infraestructura tecnológica en un entorno académico."
    }
  ];

  return (
      <div className="container m-42 mx-auto max-w-6xl">

        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Línea vertical, movida a la izquierda */}
            <div className="absolute left-2.5 top-0 bottom-0 border-l-4 border-gray-600"></div>

            {experiences.map((experience, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'mb-12' : 'mt-12'} w-full`}>
                {/* Puntos en la línea */}
                <div className="w-6 h-6 bg-[#2A2A2A] rounded-full border-4 border-gray-600 z-10 flex items-center justify-center">
                  <span className="text-sm">{index + 1}</span>
                </div>

                {/* Descripción de la experiencia */}
                <div className="ml-6 text-left w-full">
                  <p className="text-lg text-gray-400">{experience.period}</p>
                  <h3 className="font-bold text-green-500 mb-2 text-2xl">{experience.jobTitle} - {experience.company}</h3>
                  <p className="text-lg text-gray-300">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ExperienceSection;

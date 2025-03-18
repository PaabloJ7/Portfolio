import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      jobTitle: "Desarrollador web",
      company: "Navantia, S.A, España",
      period: "Marzo 2024 - Junio 2024",
      description: "Trabajé en el departamento de Transformación Digital de Navantia, participando en el desarrollo de portales internos y páginas web corporativas. Contribuí al diseño y desarrollo de plataformas que facilitaban el acceso a información y formación para los nuevos empleados, mejoraban la comunicación interna y apoyaban la presentación de proyectos."
    },
    {
      jobTitle: "Técnico informático",
      company: "Maximinos School Cluster, Portugal",
      period: "Marzo 2022 - Junio 2022",
      description: "Colaboración en la instalación y configuración de redes, mantenimiento de equipos informáticos y resolución de problemas técnicos, contribuyendo al soporte diario de la infraestructura tecnológica en un entorno académico en el extranjero."
    }
  ];

  return (
      <div id="Experiencia" className="container m-42 mx-auto max-w-6xl">

        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Línea vertical, movida a la izquierda */}
            <div className="absolute left-2.5 top-0 bottom-0 border-l-4 border-gray-600"></div>

            {experiences.map((experience, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'mb-12' : 'mt-12'} w-full`}>
                {/* Puntos en la línea */}
                <div className="w-6 h-6 bg-[#00FF9F] rounded-full border-4 border-gray-600 z-10 flex items-center justify-center">
                </div>

                {/* Descripción de la experiencia */}
                <div className="ml-6 text-left w-full">
                  <h1 className="font-bold text-2xl">{experience.jobTitle} - {experience.company}</h1>
                  <p className="text-lg text-gray-400">{experience.period}</p>
                  <p className="text-lg text-gray-100">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ExperienceSection;

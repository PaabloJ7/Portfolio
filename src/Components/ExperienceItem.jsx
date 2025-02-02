import React from 'react'

const ExperienceItem = ({ title, company, dates, description, technologies }) => {
  return (
    <div className="bg-[#1C1C1C] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{company} | {dates}</p>
      <p className="mt-4 text-gray-400">{description}</p>
      <div className="mt-4">
        <span className="text-sm font-medium text-gray-300">Tecnologías: </span>
        <span className="text-sm text-gray-400">{technologies.join(', ')}</span>
      </div>
    </div>
  )
}

const ExperienceSection = ({ experiences }) => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-white mb-6">Experiencia Laboral</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection;

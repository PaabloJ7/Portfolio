import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full backdrop-blur-sm  dark:border-gray-700/30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-mi-verde rounded-sm md:bg-transparent" aria-current="page">Sobre mi</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-mi-verde rounded-sm">Proyectos</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-mi-verde rounded-sm">Experiencia</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-mi-verde rounded-sm">Estudios</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-mi-verde rounded-sm">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
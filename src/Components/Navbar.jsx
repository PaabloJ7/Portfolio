import React from 'react';

const Navbar = () => {
  const links = [
    { href: "#Sobremi", label: "Sobre mí" },
    { href: "#Proyectos", label: "Proyectos" },
    { href: "#Experiencia", label: "Experiencia" },
    { href: "#Estudios", label: "Estudios" },
    { href: "#Contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed w-full backdrop-blur-sm dark:border-gray-700/30">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-end p-4">
        <i className="fas fa-code text-2xl text-mi-verde mr-4" />
        
        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <ul className="flex flex-col rounded-lg font-medium md:flex-row md:space-x-8 md:border-0 md:bg-transparent">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-sm px-3 py-2 text-white hover:text-mi-verde md:p-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
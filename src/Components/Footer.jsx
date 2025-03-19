import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(0, 255, 159, 0.1)] py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Texto del footer */}
          <p className="text-gray-400 text-sm text-center font-bold">
        Hecho por Pablo de la Sierra <i className="fas fa-hands-helping text-[#00FF9F]"></i> (Portfolio aun en desarrollo)
          </p>


          {/* Enlaces sociales */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/PaabloJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FF9F] transition-colors duration-200"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/pablosierra-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FF9F] transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:pablodelasierra7@gmail.com"
              className="text-gray-400 hover:text-[#00FF9F] transition-colors duration-200"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
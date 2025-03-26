const Contact = () => {
  return (
    <div id="Proyectos" >
  <section id="Contacto" className="p-8 text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Información de contacto */}
    <div className="space-y-4 relative z-5 group ">
      <div className="p-6 bg-gray-800 rounded-lg transform transition-transform duration-300 group-hover:scale-105">
        <h1 className="text-xl font-semibold">Correo</h1>
        <p>pablodelasierra7@gmail.com</p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg transform transition-transform duration-300 group-hover:scale-105">
        <h1 className="text-xl font-semibold">Ubicación</h1>
        <p>Jerez de la Frontera, Cádiz, España</p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg transform transition-transform duration-300 group-hover:scale-105">
        <h1 className="text-xl font-semibold">Disponibilidad</h1>
        <p>Disponible para trabajar</p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg transform transition-transform duration-300 group-hover:scale-105">
        <h1 className="text-xl font-semibold">Disponibilidad geográfica</h1>
        <p>Disponible para mudarme dentro de España si es necesario para el puesto</p>
      </div>
    </div>


        {/* Formulario de contacto */}
        <div className="group">
          <form 
            action="https://formsubmit.co/pablodelasierra7@gmail.com" 
            method="POST" 
            className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 group-hover:scale-104"
          >
          <input type="hidden" name="_next" value="https://portoflio-pablosierra.netlify.app/" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <h1><label htmlFor="name" className="block mb-2">Nombre</label></h1>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded"/>
          </div>
          <div className="mt-4">
          <h1><label htmlFor="email" className="block mb-2">Correo</label></h1>
            <input type="email" id="email" name="email" placeholder="Tu@email.com" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded"/>
          </div>
          <div className="mt-4">
            <h1><label htmlFor="subject" className="block mb-2">Asunto</label></h1>
            <input type="text" id="subject" name="subject" placeholder="Asunto" className="w-full p-2 bg-gray-700 border border-gray-600 rounded"/>
          </div>
          <div className="mt-4">
            <h1><label htmlFor="message" className="block mb-2">Mensaje</label></h1>
            <textarea id="message" name="message" rows="4" required placeholder="Escribe tu mensaje aquí" className="w-full p-2 bg-gray-700 border border-gray-600 rounded"></textarea>
          </div>
          <button type="submit" className="mt-6 w-full bg-mi-verde text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Enviar mensaje
          </button>
        </form>
        </div>
      </div>
      
    </section>
  </div>
  );
};

export default Contact;

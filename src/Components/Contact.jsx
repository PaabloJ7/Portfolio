const Contact = () => {
  return (
    <section id="Contacto" className="p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Información de contacto */}
        <div className="space-y-4">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h1 className="text-xl font-semibold">Correo</h1>
            <p>pablodelasierra7@gmail.com</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h1 className="text-xl font-semibold">Ubicación</h1>
            <p>Jerez de la Frontera, Cádiz, España</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h1 className="text-xl font-semibold">Disponibilidad</h1>
            <p>Disponible para trabajar</p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form 
          action="https://formsubmit.co/pablodelasierra7@gmail.com" 
          method="POST" 
          className="bg-gray-800 p-6 rounded-lg"
        >
          <input type="hidden" name="_next" value="https://portoflio-pablosierra.netlify.app/" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label htmlFor="name" className="block mb-2">Nombre</label>
            <input type="text" id="name" name="name" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded"/>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block mb-2">Correo</label>
            <input type="email" id="email" name="email" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded"/>
          </div>
          <div className="mt-4">
            <label htmlFor="subject" className="block mb-2">Asunto</label>
            <input type="text" id="subject" name="subject" className="w-full p-2 bg-gray-700 border border-gray-600 rounded"/>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block mb-2">Mensaje</label>
            <textarea id="message" name="message" rows="4" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded"></textarea>
          </div>
          <button type="submit" className="mt-6 w-full bg-mi-verde text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

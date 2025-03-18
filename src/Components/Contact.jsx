import React, { useState } from 'react';

const Contact = () => {
  const [state, setState] = useState({
    message: "",
    open: false,
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Simulación de envío de mensaje
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula una solicitud HTTP
      setState({
        message: "Mensaje enviado con éxito",
        open: true,
        severity: "success",
      });
    } catch (error) {
      setState({
        message: "Error al enviar el mensaje. Inténtalo de nuevo más tarde.",
        open: true,
        severity: "error",
      });
    } finally {
      setLoading(false);
      event.target.reset(); // Limpia el formulario
    }
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <section id="Contacto" className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="subject" className="block mb-2">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-mi-verde text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {state.open && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded ${
            state.severity === "success" ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {state.message}
          <button onClick={handleClose} className="ml-4">×</button>
        </div>
      )}
    </section>
  );
};

export default Contact;
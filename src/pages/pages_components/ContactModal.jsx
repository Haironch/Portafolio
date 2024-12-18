import React, { useState } from 'react';
import { ArrowRight, X } from "lucide-react";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    consulta: ''
  });
  
  // Cambia este número por el tuyo (incluye código de país)
  const WHATSAPP_NUMBER = '50244899009';
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `¡Hola! Soy ${formData.nombre}.\nConsulta: ${formData.consulta}`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setFormData({ nombre: '', consulta: '' }); // Limpia el formulario
  };

  // Prevenir que el fondo se desplace cuando el modal está abierto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-primary border-2 border-primary rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-title">
          Contáctame
        </span>
        <ArrowRight
          size={18}
          className="relative z-10 transition-all duration-300 group-hover:text-title group-hover:translate-x-1"
        />
        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-bgDark rounded-xl p-6 w-full max-w-md relative transform transition-all shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-title">Contacto Directo</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="nombre" 
                  className="block text-sm font-medium text-title mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="consulta" 
                  className="block text-sm font-medium text-title mb-2"
                >
                  Consulta Breve
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  value={formData.consulta}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Escribe tu consulta aquí..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
              >
                Continuar en WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBotton() {
  const phoneNumber = "573044050816"; 
  const message = "Hola, me gustaría obtener más información sobre EcoCycle y sus productos ecológicos.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Contacto de WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con EcoCycle"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-[#25D366]/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:h-16 sm:w-16"
      >
        {/* Efecto de pulso animado de fondo */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 opacity-75 duration-1000" />

        {/* Componente de React de WhatsApp */}
        <FaWhatsapp className="h-8 w-8 transition-transform group-hover:rotate-12 sm:h-9 sm:w-9" />

        {/* Etiqueta flotante tipo tooltip */}
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#243629] shadow-lg md:group-hover:inline-block">
          ¡Escríbenos por WhatsApp!
        </span>
      </a>
    </aside>
  );
}
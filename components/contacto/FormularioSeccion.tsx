"use client";

import { useState } from "react";
import { 
  Send, 
  Sparkles, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  FileText, 
  Recycle, 
  CheckCircle2, 
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FormularioSeccion() {
  const phoneNumber = "573044050816";

  const [tipoCliente, setTipoCliente] = useState<"Persona" | "Empresa">("Persona");
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [interes, setInteres] = useState("Recolección de Aceite Usado");
  const [mensaje, setMensaje] = useState("");

  const handleEnviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Construcción del mensaje limpio y bien formateado para WhatsApp
    const textoWhatsApp = 
`🌱 *NUEVA SOLICITUD DE CONTACTO - ECOCYCLE* 🌱

👤 *Nombre:* ${nombre}
🏷️ *Tipo de Cliente:* ${tipoCliente} ${tipoCliente === "Empresa" && empresa ? `(${empresa})` : ""}
📧 *Correo:* ${correo}
📞 *Teléfono:* ${telefono}
🎯 *Interés Principal:* ${interes}

💬 *Mensaje / Detalles:*
${mensaje}

_Enviado desde el formulario web de EcoCycle_`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textoWhatsApp)}`;
    
    // Abrir WhatsApp en una pestaña nueva
    window.open(url, "_blank");
  };

  return (
    <main className="w-full px-4 pb-6 pt-2 sm:px-6 sm:pb-8 lg:px-8">
      <section
        id="formulario-contacto"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        {/* Encabezado Principal */}
        <div className="mx-auto max-w-3xl px-5 pt-8 text-center sm:px-8 sm:pt-12 lg:px-12">

          <h1 className="text-3xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Soluciones en <span className="text-[#4CAF50]">Economía Circular</span>
          </h1>

          <p className="mt-2 text-base leading-7 text-[#647166] sm:mt-4 sm:text-md">
            Diligencia tus datos y el detalle de tu solicitud. Al enviar, serás redirigido automáticamente a nuestro equipo de atención por WhatsApp con la información lista.
          </p>
        </div>

        {/* Contenedor del Formulario Espectacular */}
        <div className="mx-auto my-8 max-w-4xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-[#D7B98E]/50 bg-white/90 p-6 shadow-2xl backdrop-blur-md sm:p-10">
            
            {/* Decoración superior dentro del card */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#D7B98E]/30 pb-6">
              <div>
                <h2 className="text-xl font-bold text-[#243629] sm:text-2xl">
                  Formulario de Contacto
                </h2>
                <p className="text-xs text-[#647166] sm:text-sm">
                  Atención personalizada para personas, comercios e industrias.
                </p>
              </div>

              {/* Selector de Tipo de Cliente (Pill Tab) */}
              <div className="inline-flex rounded-full bg-[#F8F5ED] p-1.5 border border-[#D7B98E]/40">
                <button
                  type="button"
                  onClick={() => setTipoCliente("Persona")}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold cursor-pointer transition-all duration-300 sm:text-sm ${
                    tipoCliente === "Persona"
                      ? "bg-[#4CAF50] text-white shadow-md"
                      : "text-[#647166] hover:text-[#243629]"
                  }`}
                >
                  <User size={15} />
                  Persona
                </button>
                <button
                  type="button"
                  onClick={() => setTipoCliente("Empresa")}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold cursor-pointer transition-all duration-300 sm:text-sm ${
                    tipoCliente === "Empresa"
                      ? "bg-[#4CAF50] text-white shadow-md"
                      : "text-[#647166] hover:text-[#243629]"
                  }`}
                >
                  <Building2 size={15} />
                  Empresa / Aliado
                </button>
              </div>
            </div>

            {/* FORMULARIO */}
            <form onSubmit={handleEnviarWhatsApp} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                
                {/* Nombre */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                    <User size={15} className="text-[#4CAF50]" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15"
                  />
                </div>

                {/* Si es Empresa, pedir Nombre de la Organización */}
                {tipoCliente === "Empresa" ? (
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                      <Building2 size={15} className="text-[#FF9800]" />
                      Nombre de la Empresa / Establecimiento *
                    </label>
                    <input
                      type="text"
                      required
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Ej. Restaurante EcoSabor"
                      className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15"
                    />
                  </div>
                ) : (
                  /* Correo Electrónico */
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                      <Mail size={15} className="text-[#4CAF50]" />
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15"
                    />
                  </div>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Si es Empresa, poner el correo en la segunda fila */}
                {tipoCliente === "Empresa" && (
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                      <Mail size={15} className="text-[#4CAF50]" />
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      placeholder="contacto@empresa.com"
                      className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15"
                    />
                  </div>
                )}

                {/* Teléfono */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                    <Phone size={15} className="text-[#4CAF50]" />
                    Teléfono / Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej. 300 123 4567"
                    className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15"
                  />
                </div>

                {/* Selector de Servicio / Interés */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                    <Recycle size={15} className="text-[#FF9800]" />
                    Área o Interés Principal
                  </label>
                  <select
                    value={interes}
                    onChange={(e) => setInteres(e.target.value)}
                    className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15 cursor-pointer"
                  >
                    <option value="Recolección de Aceite Usado">Recolección de Aceite Usado</option>
                    <option value="Recolección de Residuos Orgánicos">Recolección de Residuos Orgánicos</option>
                    <option value="Compra de Productos de Limpieza Ecológicos">Productos de Limpieza Ecológicos</option>
                    <option value="Compra de Abono Orgánico / Compost">Abono Orgánico / Compost</option>
                    <option value="Alianzas de Sostenibilidad">Alianzas de Sostenibilidad</option>
                    <option value="Consulta General">Otro / Consulta General</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold text-[#344337]">
                  <MessageSquare size={15} className="text-[#4CAF50]" />
                  Detalles de tu solicitud *
                </label>
                <textarea
                  required
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe tu mensaje, cantidad estimada de residuos, ubicación o cualquier requerimiento específico..."
                  className="w-full rounded-2xl border border-[#D7B98E]/50 bg-[#F8F5ED]/40 px-4 py-3.5 text-sm text-[#243629] outline-none transition-all focus:border-[#4CAF50] focus:bg-white focus:ring-4 focus:ring-[#4CAF50]/15"
                ></textarea>
              </div>

              {/* BOTÓN PRINCIPAL DE ENVÍO POR WHATSAPP */}
              <div className="mt-1 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="group relative inline-flex w-full min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-4 py-2 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20ba5a] hover:shadow-2xl hover:shadow-[#25D366]/30 cursor-pointer sm:w-auto"
                >
                  <FaWhatsapp className="h-8 w-8 transition-transform group-hover:rotate-12" />
                  <span className="text-sm">Enviar solicitud a WhatsApp</span>
                  <Send size={18} className="transition-transform group-hover:translate-x-1" />
                </button>

                <p className="flex items-center gap-1.5 text-xs font-medium text-[#7A8579]">
                  <ShieldCheck size={14} className="text-[#4CAF50]" />
                  Se abrirá tu aplicación de WhatsApp con el mensaje estructurado listo para enviar.
                </p>
              </div>
            </form>

          </div>
        </div>

      </section>
    </main>
  );
}
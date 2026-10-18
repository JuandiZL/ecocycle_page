"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Users, 
  ArrowUpRight, 
  ZoomIn, 
  X, 
  Network, 
  ShieldCheck, 
  Briefcase 
} from "lucide-react";

export default function InicioOrganizacionSeccion() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      <section
        id="organizacion"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        <div className="grid items-center gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:px-12 lg:py-12">
          
          {/* Columna de Texto e Identidad (lg:col-span-5) */}
          <div className="relative z-10 max-w-2xl lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/25 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#387C39] sm:mb-7 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
              ESTRUCTURA CORPORATIVA
            </div>

            <h1 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Organización y <br />
              <span className="text-[#4CAF50]">
                talento alineado
              </span>{" "}
              al propósito.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#647166] sm:mt-6 sm:text-lg sm:leading-8">
              En EcoCycle cada dirección, comité y equipo operativo trabaja conectado 
              para garantizar la eficiencia, el cumplimiento ambiental y la innovación sostenible.
            </p>

            {/* Acciones */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4CAF50] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E9742] hover:shadow-lg hover:shadow-[#4CAF50]/20 cursor-pointer"
              >
                Ampliar Organigrama
                <ZoomIn
                  size={19}
                  className="transition-transform group-hover:scale-110"
                />
              </button>
            </div>

            {/* Identidad de marca / Puntos clave */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#647166] sm:mt-10">
              <span className="flex items-center gap-2">
                <Network size={16} className="text-[#4CAF50]" />
                Lineal Horizontal
              </span>
              <span className="hidden h-4 w-px bg-[#D7B98E] min-[420px]:block" />
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#FF9800]" />
                Gobierno corporativo
              </span>
            </div>
          </div>

          {/* Columna del Organigrama / Vista Previa Interactiva (lg:col-span-7) */}
          <div className="relative mx-auto w-full lg:col-span-7">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D7B98E]/50 bg-white/80 p-3 shadow-xl transition-all duration-300 hover:border-[#4CAF50]/50 hover:shadow-2xl sm:p-4"
            >
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#243629] shadow-md backdrop-blur-sm transition-transform group-hover:scale-105">
                <ZoomIn size={14} className="text-[#4CAF50]" />
                Haz clic para ampliar
              </div>

              {/* Contenedor de la imagen del organigrama */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F8F5ED]">
                <Image
                  src="/images/Organigrama.jpg" 
                  alt="Organigrama EcoCycle - Lineal Horizontal"
                  fill
                  priority
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-xs font-medium text-[#647166]">
                <span>Estructura General</span>
                <span className="text-[#4CAF50] font-semibold">EcoCycle</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Modal / Visor de Imagen en Pantalla Completa para máxima legibilidad móvil */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-3xl bg-[#F8F5ED] p-4 shadow-2xl sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#D7B98E]/40 pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#243629] sm:text-xl">Organigrama Lineal Horizontal</h3>
                <p className="text-xs text-[#647166]">EcoCycle - Planta de Reciclaje y Transformación</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#243629]/10 text-[#243629] transition-colors hover:bg-[#4CAF50] hover:text-white"
                aria-label="Cerrar visor"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative min-h-[50vh] w-full sm:min-h-[70vh]">
              <Image
                src="/images/Organigrama.jpg"
                alt="Organigrama Ampliado EcoCycle"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full bg-[#4CAF50] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3E9742]"
              >
                Cerrar vista
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
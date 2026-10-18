"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  GitCommit, 
  ZoomIn, 
  X, 
  ArrowRightLeft, 
  Layers, 
  Sparkles 
} from "lucide-react";

export default function ProcesoSeccion() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      <section
        id="proceso-general"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        {/* Contenedor principal con enfoque centrado */}
        <div className="mx-auto flex flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12 lg:py-16 max-w-5xl">
          
          {/* Badge de Sección */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/25 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#387C39] sm:mb-7 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
            MODELO DE OPERACIÓN
          </div>

          {/* Imagen Interactiva Centrada */}
          <div className="mt-2 w-full">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="group relative mx-auto cursor-pointer overflow-hidden rounded-2xl border border-[#D7B98E]/50 bg-white/80 p-3 shadow-xl transition-all duration-300 hover:border-[#4CAF50]/50 hover:shadow-2xl sm:p-4 max-w-4xl"
            >
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#243629] shadow-md backdrop-blur-sm transition-transform group-hover:scale-105">
                <ZoomIn size={14} className="text-[#4CAF50]" />
                Haz clic para ampliar
              </div>

              {/* Contenedor de la imagen del proceso */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-white sm:h-[400px] lg:h-[480px]">
                <Image
                  src="/images/Proceso.jpeg" 
                  alt="Esquema General del Proceso EcoCycle"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-xs font-medium text-[#647166]">
                <span>Proveedores, Entradas, Transformación, Salidas y Clientes</span>
                <span className="text-[#4CAF50] font-semibold">EcoCycle</span>
              </div>
            </div>
          </div>

          {/* Botón de acción para ampliar */}
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4CAF50] px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E9742] hover:shadow-lg hover:shadow-[#4CAF50]/20 cursor-pointer"
            >
              Ampliar esquema de proceso
              <ZoomIn
                size={19}
                className="transition-transform group-hover:scale-110"
              />
            </button>
          </div>

          {/* Etiquetas / Características clave abajo */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#647166]">
            <span className="flex items-center gap-2">
              <Layers size={16} className="text-[#4CAF50]" />
              Entrada y Salida
            </span>
            <span className="hidden h-4 w-px bg-[#D7B98E] sm:block" />
            <span className="flex items-center gap-2">
              <ArrowRightLeft size={16} className="text-[#FF9800]" />
              Transformación
            </span>
            <span className="hidden h-4 w-px bg-[#D7B98E] sm:block" />
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#4CAF50]" />
              Mejora Continua
            </span>
          </div>

        </div>

      </section>

      {/* Visor Modal en Pantalla Completa */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-3xl bg-[#F8F5ED] p-4 shadow-2xl sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#D7B98E]/40 pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#243629] sm:text-xl">Esquema General del Proceso</h3>
                <p className="text-xs text-[#647166]">EcoCycle - Modelo de Operación</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#243629]/10 text-[#243629] transition-colors hover:bg-[#4CAF50] hover:text-white"
                aria-label="Cerrar visor"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative h-[60vh] w-full sm:h-[75vh]">
              <Image
                src="/images/Proceso.jpeg"
                alt="Proceso General Ampliado EcoCycle"
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
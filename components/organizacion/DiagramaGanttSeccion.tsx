"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ZoomIn, 
  X,
} from "lucide-react";

export default function DiagramaGanttSeccion() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      <section
        id="diagrama-gantt"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-64 w-64 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        <div className="grid items-center gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:px-12 lg:py-12">
          
          {/* Columna del Diagrama / Vista Previa Interactiva (lg:col-span-7) */}
          <div className="relative mx-auto w-full lg:col-span-7 lg:order-1 order-2">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D7B98E]/50 bg-white/80 p-3 shadow-xl transition-all duration-300 hover:border-[#4CAF50]/50 hover:shadow-2xl sm:p-4"
            >
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#243629] shadow-md backdrop-blur-sm transition-transform group-hover:scale-105">
                <ZoomIn size={14} className="text-[#4CAF50]" />
                Haz clic para ampliar
              </div>

              {/* Contenedor de la imagen del diagrama de gantt */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-white sm:h-[360px] lg:h-[400px]">
                <Image
                  src="/images/DiagramaDeGantt.jpeg"
                  alt="Diagrama de Gantt EcoCycle - Cronograma de Actividades"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-xs font-medium text-[#647166]">
                <span>Cronograma de Actividades</span>
                <span className="text-[#4CAF50] font-semibold">Plan de Puesta en Marcha</span>
              </div>
            </div>
          </div>

          {/* Columna de Texto explicativo (lg:col-span-5) */}
          <div className="relative z-10 max-w-2xl lg:col-span-5 lg:order-2 order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/25 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#387C39] sm:mb-7 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
              CRONOGRAMA DE IMPLEMENTACIÓN
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Diagrama de <br />
              <span className="text-[#4CAF50]">
                Gantt
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#647166] sm:mt-6 sm:text-lg sm:leading-8">
              El diagrama muestra la organización de las principales actividades necesarias para poner en marcha ECOCYCLE entre los meses de agosto y noviembre. Se inició con las actividades de planeación y promoción de la empresa, ya que estas permiten dar a conocer la marca y establecer alianzas con los proveedores de residuos.
            </p>

            <p className="mt-4 text-base leading-7 text-[#647166] sm:text-lg sm:leading-8">
              Después se programaron las actividades relacionadas con la recolección, clasificación y transformación de los residuos, que hacen parte del proceso productivo de la empresa. Finalmente, se incluyeron las acciones comerciales y el seguimiento de los indicadores para evaluar el cumplimiento de los objetivos. En diciembre no se programaron actividades porque se plantea que todas las acciones ya fueron ejecutadas y el proyecto se encuentra en una etapa de consolidación.
            </p>

            {/* Acciones */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4CAF50] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E9742] hover:shadow-lg hover:shadow-[#4CAF50]/20 cursor-pointer"
              >
                Ver Cronograma Completo
                <ZoomIn
                  size={19}
                  className="transition-transform group-hover:scale-110"
                />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* Visor Modal en Pantalla Completa */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-3xl bg-[#F8F5ED] p-4 shadow-2xl sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#D7B98E]/40 pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#243629] sm:text-xl">Diagrama de Gantt - Cronograma</h3>
                <p className="text-xs text-[#647166]">EcoCycle - Puesta en Marcha</p>
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
                src="/images/DiagramaDeGantt.jpeg"
                alt="Diagrama de Gantt Ampliado EcoCycle"
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
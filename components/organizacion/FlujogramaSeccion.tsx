"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Workflow, 
  ZoomIn, 
  X, 
  Recycle, 
  CheckCircle2, 
  Truck, 
  Sparkles 
} from "lucide-react";

export default function FlujogramaSeccion() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      <section
        id="flujograma"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full border-[45px] border-[#FF9800]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-64 w-64 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        <div className="grid items-center gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:px-12 lg:py-12">
          
          {/* Columna del Flujograma / Vista Previa Interactiva (lg:col-span-7) */}
          <div className="relative mx-auto w-full lg:col-span-7 lg:order-1 order-2">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D7B98E]/50 bg-white/80 p-3 shadow-xl transition-all duration-300 hover:border-[#4CAF50]/50 hover:shadow-2xl sm:p-4"
            >
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#243629] shadow-md backdrop-blur-sm transition-transform group-hover:scale-105">
                <ZoomIn size={14} className="text-[#4CAF50]" />
                Haz clic para ampliar
              </div>

              {/* Contenedor de la imagen del flujograma */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F8F5ED]">
                <Image
                  src="/images/Flujograma.jpeg" 
                  alt="Flujograma de Procesos EcoCycle"
                  fill
                  priority
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-xs font-medium text-[#647166]">
                <span>Mapeo del Proceso Productivo y Economía Circular</span>
                <span className="text-[#FF9800] font-semibold">Flujograma Operativo</span>
              </div>
            </div>
          </div>

          {/* Columna de Texto explicativo (lg:col-span-5) */}
          <div className="relative z-10 max-w-2xl lg:col-span-5 lg:order-2 order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF9800]/25 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#D97706] sm:mb-7 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#FF9800]" />
              PROCESO PRODUCTIVO
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Flujograma de <br />
              <span className="text-[#4CAF50]">
                transformación
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#647166] sm:mt-6 sm:text-lg sm:leading-8">
              El flujograma describe el proceso mediante el cual ECOCYCLE transforma residuos en productos ecológicos bajo un modelo de economía circular. El proceso inicia con la recolección de aceite de cocina usado y residuos orgánicos provenientes de clientes y aliados estratégicos, seguido de su clasificación para verificar si cumplen con las condiciones necesarias para su aprovechamiento.
            </p>

            <p className="mt-4 text-base leading-7 text-[#647166] sm:text-lg sm:leading-8">
              Los residuos aptos continúan al proceso de transformación, donde el aceite se convierte en productos de limpieza ecológicos y los residuos orgánicos en abonos mediante compostaje; aquellos que no cumplen los requisitos reciben una disposición final adecuada. Posteriormente, los productos pasan por controles de calidad, almacenamiento, empaque y distribución. Finalmente, la empresa ofrece servicio de atención y posventa, además de implementar acciones de mejora continua para optimizar sus procesos y fortalecer su compromiso con la sostenibilidad ambiental.
            </p>

            {/* Acciones */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4CAF50] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E9742] hover:shadow-lg hover:shadow-[#4CAF50]/20 cursor-pointer"
              >
                Ver Flujograma Completo
                <ZoomIn
                  size={19}
                  className="transition-transform group-hover:scale-110"
                />
              </button>
            </div>

            {/* Fases clave */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#647166] sm:mt-10">
              <span className="flex items-center gap-2">
                <Truck size={16} className="text-[#4CAF50]" />
                Recolección
              </span>
              <span className="hidden h-4 w-px bg-[#D7B98E] min-[420px]:block" />
              <span className="flex items-center gap-2">
                <Recycle size={16} className="text-[#FF9800]" />
                Transformación
              </span>
              <span className="hidden h-4 w-px bg-[#D7B98E] min-[420px]:block" />
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4CAF50]" />
                Control y Posventa
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* Visor Modal en Pantalla Completa */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-3xl bg-[#F8F5ED] p-4 shadow-2xl sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#D7B98E]/40 pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#243629] sm:text-xl">Flujograma de Procesos Operativos</h3>
                <p className="text-xs text-[#647166]">EcoCycle - Transformación de Residuos</p>
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
                src="/images/Flujograma.jpeg"
                alt="Flujograma Completo EcoCycle"
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
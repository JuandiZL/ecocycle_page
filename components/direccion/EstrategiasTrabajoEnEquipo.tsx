"use client";

import { 
  Users2, 
  Target, 
  GitFork, 
  HeartHandshake, 
  Lightbulb, 
  Trophy, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

const estrategias = [
  {
    id: "metas-compartidas",
    titulo: "Metas compartidas",
    descripcion: "Establecer objetivos grupales claros que requieran la participación y el compromiso de todos.",
    icon: Target,
    colorAccento: "text-[#FF9800]",
    bgIcono: "bg-[#FF9800]/15 border-[#FF9800]/30",
  },
  {
    id: "distribucion-tareas",
    titulo: "Distribución de tareas",
    descripcion: "Asignar responsabilidades de forma equitativa según las fortalezas y habilidades de cada integrante.",
    icon: GitFork,
    colorAccento: "text-[#D7B98E]",
    bgIcono: "bg-[#D7B98E]/15 border-[#D7B98E]/30",
  },
  {
    id: "actividades-integracion",
    titulo: "Actividades de integración",
    descripcion: "Realizar dinámicas periódicas que fortalezcan la confianza, el compañerismo y el clima laboral.",
    icon: HeartHandshake,
    colorAccento: "text-[#4CAF50]",
    bgIcono: "bg-[#4CAF50]/15 border-[#4CAF50]/30",
  },
  {
    id: "resolucion-conjunta",
    titulo: "Resolución conjunta de problemas",
    descripcion: "Incentivar al equipo a proponer soluciones colaborativas y creativas ante las dificultades.",
    icon: Lightbulb,
    colorAccento: "text-[#FF9800]",
    bgIcono: "bg-[#FF9800]/15 border-[#FF9800]/30",
  },
  {
    id: "reconocimiento-grupal",
    titulo: "Reconocimiento grupal",
    descripcion: "Destacar los logros alcanzados como equipo para fortalecer la motivación y el espíritu de colaboración.",
    icon: Trophy,
    colorAccento: "text-[#D7B98E]",
    bgIcono: "bg-[#D7B98E]/15 border-[#D7B98E]/30",
  },
];

export default function EstrategiasTrabajoEnEquipo() {
  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      {/* Sección con Fondo Tono Tierra / Terracota Profundo */}
      <section
        id="estrategias-trabajo-equipo"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#2E2219] text-[#F8F5ED] shadow-2xl sm:rounded-[36px]"
      >
        {/* Luces/Acentos ambientales cálidos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-[#FF9800]/15 blur-3xl"
        />

        {/* Estructura de Altura Compacta */}
        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          
          {/* Encabezado Principal */}
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div className="max-w-2xl">

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Estrategias de <span className="text-[#D7B98E]">Trabajo en Equipo</span>
              </h2>
            </div>

          </div>

          <hr className="my-6 border-[#443326]" />

          {/* Grid Compacto de Estrategias */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {estrategias.map((est, index) => {
              const Icono = est.icon;
              const isLastOdd = index === estrategias.length - 1 && estrategias.length % 2 !== 0;

              return (
                <div
                  key={est.id}
                  className={`group relative flex flex-col justify-between rounded-2xl border border-[#443326] bg-[#3B2C20]/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7B98E]/60 hover:bg-[#453426] hover:shadow-lg sm:p-5 ${
                    isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    {/* Icono + Título */}
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${est.bgIcono} transition-transform duration-300 group-hover:scale-110`}>
                        <Icono size={20} className={est.colorAccento} />
                      </div>
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {est.titulo}
                      </h3>
                    </div>

                    {/* Descripción */}
                    <p className="mt-3 text-xs leading-relaxed text-[#D2C3B5] sm:text-sm">
                      {est.descripcion}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#D7B98E]">
                    <CheckCircle2 size={13} />
                    <span>Integración continua</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
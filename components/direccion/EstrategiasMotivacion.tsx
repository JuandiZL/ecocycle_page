"use client";

import { 
  Flame, 
  Award, 
  Gift, 
  Users2, 
  DollarSign, 
  Lightbulb, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";

const motivacionReconocimiento = [
  {
    id: "sistema-puntos",
    titulo: "Sistema de puntos por desempeño",
    descripcion: "Premiar el cumplimiento de metas, clasificación de residuos, protocolos y capacitaciones, canjeables por bonos o productos de ECOCYCLE.",
    icon: Award,
    colorAccento: "text-[#FF9800]",
    bgIcono: "bg-[#FF9800]/10 border-[#FF9800]/30",
  },
  {
    id: "reconocimiento-cumplimiento",
    titulo: "Reconocimiento al cumplimiento",
    descripcion: "Incentivos para colaboradores constantes en puntualidad, asistencia, cumplimiento de funciones y procedimientos establecidos.",
    icon: Gift,
    colorAccento: "text-[#4CAF50]",
    bgIcono: "bg-[#4CAF50]/10 border-[#4CAF50]/30",
  },
  {
    id: "incentivos-colectivos",
    titulo: "Incentivos por resultados colectivos",
    descripcion: "Beneficios grupales al alcanzar metas de productividad, calidad, sostenibilidad y aprovechamiento de residuos en equipo.",
    icon: Users2,
    colorAccento: "text-[#D7B98E]",
    bgIcono: "bg-[#D7B98E]/20 border-[#D7B98E]/40",
  },
];

const motivacionEconomica = [
  {
    id: "bono-metas",
    titulo: "Bono por cumplimiento de metas",
    descripcion: "Incentivos económicos para colaboradores o equipos que alcancen las metas de producción, calidad, recolección y aprovechamiento.",
    icon: DollarSign,
    colorAccento: "text-[#4CAF50]",
    bgIcono: "bg-[#4CAF50]/10 border-[#4CAF50]/30",
  },
  {
    id: "propuestas-mejora",
    titulo: "Incentivo por propuestas de mejora",
    descripcion: "Recompensas a quienes implementen ideas que optimicen la recolección, clasificación o transformación de residuos impulsando la innovación.",
    icon: Lightbulb,
    colorAccento: "text-[#FF9800]",
    bgIcono: "bg-[#FF9800]/10 border-[#FF9800]/30",
  },
];

export default function EstrategiasMotivacion() {
  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      {/* Sección en fondo beige claro corporativo */}
      <section
        id="estrategias-motivacion"
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

        {/* Contenido principal compacto */}
        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          
          {/* Encabezado Principal */}
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div className="max-w-2xl">

              <h2 className="text-2xl font-bold tracking-tight text-[#243629] sm:text-3xl lg:text-4xl">
                Estrategias de <span className="text-[#4CAF50]">Motivación</span>
              </h2>
            </div>

          </div>

          <hr className="my-6 border-[#D7B98E]/40" />

          {/* BLOQUE 1: Reconocimiento y Desempeño */}
          <div className="mb-6">
            <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#387C39] sm:text-sm">
              <Zap size={16} className="text-[#FF9800]" />
              Incentivos y Reconocimiento al Desempeño
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {motivacionReconocimiento.map((est) => {
                const Icono = est.icon;
                return (
                  <div
                    key={est.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#D7B98E]/40 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#4CAF50]/50 hover:bg-white hover:shadow-lg sm:p-5"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${est.bgIcono} transition-transform duration-300 group-hover:scale-110`}>
                          <Icono size={20} className={est.colorAccento} />
                        </div>
                        <h4 className="text-base font-bold text-[#243629] sm:text-lg">
                          {est.titulo}
                        </h4>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#647166] sm:text-sm">
                        {est.descripcion}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#4CAF50]">
                      <CheckCircle2 size={13} />
                      <span>Desempeño y Cultura</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BLOQUE 2: Bonificaciones e Innovación */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#387C39] sm:text-sm">
              <DollarSign size={16} className="text-[#4CAF50]" />
              Incentivos Económicos e Innovación
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {motivacionEconomica.map((est) => {
                const Icono = est.icon;
                return (
                  <div
                    key={est.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#D7B98E]/40 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF9800]/50 hover:bg-white hover:shadow-lg sm:p-5"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${est.bgIcono} transition-transform duration-300 group-hover:scale-110`}>
                          <Icono size={20} className={est.colorAccento} />
                        </div>
                        <h4 className="text-base font-bold text-[#243629] sm:text-lg">
                          {est.titulo}
                        </h4>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#647166] sm:text-sm">
                        {est.descripcion}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#FF9800]">
                      <CheckCircle2 size={13} />
                      <span>Resultados y Eficiencia</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
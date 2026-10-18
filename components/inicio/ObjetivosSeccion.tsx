
"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Droplets,
  PackageCheck,
  GraduationCap,
  Target,
  Leaf,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const objetivos = [
  {
    titulo: "Ampliar nuestro alcance",
    categoria: "RECOLECCIÓN SOSTENIBLE",
    descripcion:
      "Incrementar la recolección de residuos orgánicos y aceite de cocina usado mediante la ampliación de la cobertura de proveedores y clientes.",
    meta: "30%",
    detalle: "Más residuos aprovechados",
    plazo: "Próximos 3 años",
    icono: Droplets,
    color: "#4CAF50",
    fondo: "#E5EEDC",
    numero: "01",
  },
  {
    titulo: "Crear nuevas soluciones",
    categoria: "INNOVACIÓN ECOLÓGICA",
    descripcion:
      "Desarrollar y comercializar nuevos productos ecológicos y biodegradables que respondan a las necesidades del mercado.",
    meta: "3",
    detalle: "Nuevos productos ecológicos",
    plazo: "Próximos 2 años",
    icono: PackageCheck,
    color: "#B96D00",
    fondo: "#F6E4C9",
    numero: "02",
  },
  {
    titulo: "Inspirar el cambio",
    categoria: "EDUCACIÓN AMBIENTAL",
    descripcion:
      "Fortalecer la cultura de sostenibilidad mediante programas de educación ambiental que generen conciencia y compromiso.",
    meta: "500",
    detalle: "Personas beneficiadas",
    plazo: "Próximos 3 años",
    icono: GraduationCap,
    color: "#647A91",
    fondo: "#E1E8EE",
    numero: "03",
  },
];

export default function ObjetivosSeccion() {
  return (
    <section
      id="objetivos"
      className="relative isolate mx-4 my-5 overflow-hidden rounded-[30px] bg-[#F0E8D9] px-5 py-9 sm:mx-6 sm:my-6 sm:rounded-[36px] sm:px-8 sm:py-12 lg:mx-8 lg:px-12 lg:py-14"
    >
      {/* DECORACIÓN DE FONDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 -z-10 h-80 w-80 rounded-full border-[48px] border-[#FF9800]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-28 -z-10 h-80 w-80 rounded-full bg-[#4CAF50]/10 blur-3xl"
      />

      {/* ENCABEZADO */}
      <header className="relative mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B96D00]/20 bg-white/50 px-3.5 py-2 text-[10px] font-bold tracking-[0.2em] text-[#9B610D] sm:text-xs">
            <Target size={14} />
            NUESTRO COMPROMISO
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-[#243629] sm:text-4xl lg:text-5xl">
            Objetivos que
            <span className="block text-[#B96D00]">
              generan impacto.
            </span>
          </h2>
        </div>

        <p className="max-w-md border-l-[3px] border-[#FF9800] pl-5 text-sm leading-7 text-[#647166] sm:text-[15px]">
          Convertimos nuestro propósito en metas concretas para
          aprovechar mejor los recursos, innovar y construir una
          cultura ambiental responsable.
        </p>
      </header>

      {/* OBJETIVO GENERAL */}
      <article className="group relative isolate mb-7 overflow-hidden rounded-[26px] bg-[#243629] p-6 text-white sm:mb-9 sm:rounded-[30px] sm:p-8 lg:p-10">
        {/* Formas decorativas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border-[42px] border-[#FF9800]/15 transition-transform duration-700 group-hover:scale-110"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-[35%] -z-10 h-48 w-48 rounded-full bg-[#4CAF50]/10 blur-3xl"
        />

        <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-7 lg:gap-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9800] text-white shadow-lg shadow-[#FF9800]/20 sm:h-16 sm:w-16">
            <Target size={30} strokeWidth={1.6} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFBE70] sm:text-xs">
                OBJETIVO GENERAL
              </span>

              <span className="h-px w-8 bg-[#FF9800]/60" />

              <span className="text-[10px] font-medium text-white/45">
                NUESTRA META PRINCIPAL
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Transformar para generar impacto
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Transformar de manera sostenible residuos orgánicos y
              aceite de cocina usado en productos ecológicos y
              biodegradables, contribuyendo a la reducción de la
              contaminación ambiental y al fortalecimiento de la
              economía circular en Colombia durante los próximos 3 años.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/80">
                <Leaf size={15} className="text-[#8BD58B]" />
                Economía circular
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/80">
                <Sparkles size={15} className="text-[#FFBE70]" />
                Innovación sostenible
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* OBJETIVOS ESPECÍFICOS */}
      <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#647A91] sm:text-xs">
            NUESTRAS PRIORIDADES
          </span>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#243629] sm:text-3xl">
            Tres metas, un mismo propósito.
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-[#647166]">
          <TrendingUp size={16} className="text-[#B96D00]" />
          Crecimiento sostenible
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {objetivos.map((objetivo) => {
          const Icono = objetivo.icono;

          return (
            <article
              key={objetivo.numero}
              className="group relative isolate flex min-h-[350px] flex-col overflow-hidden rounded-[26px] border border-[#243629]/[0.07] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#243629]/10 sm:p-6"
              style={{ backgroundColor: objetivo.fondo }}
            >
              {/* Círculo ambiental */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full border-[25px] opacity-30 transition-transform duration-700 group-hover:scale-125"
                style={{ borderColor: objetivo.color }}
              />

              {/* Icono y categoría */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110"
                  style={{
                    backgroundColor: objetivo.color,
                    boxShadow: `0 8px 20px ${objetivo.color}25`,
                  }}
                >
                  <Icono size={24} strokeWidth={1.7} />
                </div>

                <span
                  className="max-w-[65%] rounded-full border px-3 py-1.5 text-right text-[9px] font-bold tracking-[0.12em] sm:text-[10px]"
                  style={{
                    borderColor: `${objetivo.color}35`,
                    color: objetivo.color,
                    backgroundColor: `${objetivo.color}0D`,
                  }}
                >
                  {objetivo.categoria}
                </span>
              </div>

              {/* Contenido */}
              <div className="mt-6">
                <h4 className="max-w-xs text-xl font-semibold tracking-tight text-[#243629] sm:text-2xl">
                  {objetivo.titulo}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#536254]">
                  {objetivo.descripcion}
                </p>
              </div>

              {/* Indicador de meta */}
              <div className="mt-auto pt-7">
                <div
                  className="rounded-2xl border border-white/60 bg-white/45 p-4 backdrop-blur-sm sm:p-5"
                >
                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#647166]">
                    NUESTRA META
                  </span>

                  <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p
                        className="text-4xl font-semibold leading-none tracking-tight sm:text-5xl"
                        style={{ color: objetivo.color }}
                      >
                        {objetivo.meta}
                      </p>

                      <p className="mt-2 text-xs font-semibold text-[#344337]">
                        {objetivo.detalle}
                      </p>
                    </div>

                    <span
                      className="mb-1 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#647166]"
                    >
                      <ArrowDownRight size={15} />
                      {objetivo.plazo}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#647166]">
                    Compromiso EcoCycle
                  </span>

                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#243629] group-hover:text-white"
                    style={{ color: objetivo.color }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
}
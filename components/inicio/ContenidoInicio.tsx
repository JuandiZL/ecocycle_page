
"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Leaf,
  Recycle,
  Globe2,
  Sprout,
  Sparkles,
} from "lucide-react";

export default function ContenidoInicio() {
  return (
    <section
      id="contenido-inicio"
      className="w-full space-y-6 px-4 pb-10 pt-2 sm:space-y-8 sm:px-6 sm:pb-12 lg:px-8"
    >
      {/* ENCABEZADO COMPACTO */}
      <header className="relative isolate overflow-hidden rounded-[26px] bg-[#243629] px-6 py-7 text-white sm:rounded-[30px] sm:px-9 sm:py-8 lg:px-11">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-24 -z-10 h-60 w-60 rounded-full border-[32px] border-[#4CAF50]/15 sm:h-72 sm:w-72"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-[38%] -z-10 h-40 w-40 rounded-full bg-[#4CAF50]/15 blur-3xl"
        />

        <div className="relative flex items-center justify-between gap-5">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8BD58B]/25 bg-[#4CAF50]/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#A9E6A7] sm:text-xs">
              <Leaf size={13} />
              NUESTRA IDENTIDAD
            </span>

            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Transformamos residuos.
              <span className="block text-[#8BD58B]">
                Generamos futuro.
              </span>
            </h2>
          </div>

          <div className="hidden shrink-0 sm:block">
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#8BD58B]/30 bg-white/[0.04] lg:h-[88px] lg:w-[88px]">
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#4CAF50] text-white lg:h-16 lg:w-16">
                <Recycle size={31} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TÍTULO DE MISIÓN Y VISIÓN */}
      <section id="mision-vision">
        <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="shrink-0">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-[#388E3C] sm:text-xs">
                <span className="h-1.5 w-3 rounded-full bg-[#4CAF50]" />
                NUESTRO NORTE
                </span>

                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#243629] sm:text-4xl">
                Lo que nos mueve
                </h2>
            </div>

            <div className="relative max-w-md border-l-2 border-[#4CAF50]/50 pl-4 sm:mb-1 sm:pl-5">
                <p className="text-sm leading-7 text-[#647166] sm:text-[15px] sm:leading-7">
                Un propósito que nos inspira y una visión que nos impulsa
                a seguir transformando.
                </p>
            </div>
        </div>


        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {/* MISIÓN */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-[28px] bg-[#243629] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#243629]/15 sm:p-7 lg:min-h-0">
            {/* Formas decorativas */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border-[38px] border-[#4CAF50]/10 transition-transform duration-700 group-hover:scale-110"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 -z-10 h-44 w-44 rounded-full bg-[#4CAF50]/10 blur-2xl"
            />

            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4CAF50] text-white shadow-lg shadow-black/10">
                <Recycle size={25} strokeWidth={1.6} />
              </div>

              <span className="rounded-full border border-[#8BD58B]/20 bg-[#4CAF50]/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#A9E6A7]">
                NUESTRO PROPÓSITO
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Nuestra misión
              </h3>

              <div className="mt-3 h-1 w-14 rounded-full bg-[#8BD58B] transition-all duration-300 group-hover:w-24" />

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-[15px] sm:leading-7">
                Transformamos residuos orgánicos y aceite de cocina
                usado en productos ecológicos y biodegradables,
                promoviendo la economía circular y el consumo responsable.
              </p>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/75 sm:text-[15px] sm:leading-7">
                Con procesos sostenibles, tecnología e innovación,
                creamos valor para las personas, las empresas
                y el medio ambiente.
              </p>
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5 mt-7">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/15 text-[#8BD58B]">
                <Leaf size={19} />
              </div>

              <p className="text-xs font-medium text-[#D5E8D4] sm:text-sm">
                Convertimos residuos en oportunidades.
              </p>

              <ArrowUpRight
                size={18}
                className="ml-auto shrink-0 text-[#8BD58B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </article>

          {/* VISIÓN */}
          <article className="group relative isolate flex flex-col overflow-hidden rounded-[28px] border border-[#D7B98E]/50 bg-[#F0E8D9] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#243629]/10 sm:p-7 lg:min-h-0">
            {/* Decoración ambiental */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border-[35px] border-[#FF9800]/10 transition-transform duration-700 group-hover:scale-110"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-12 -z-10 h-48 w-48 rounded-full bg-[#4CAF50]/10 blur-2xl"
            />

            <div className="flex items-center justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9800] text-white shadow-lg shadow-[#FF9800]/20">
                <Globe2 size={25} strokeWidth={1.6} />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#FF9800]/25 bg-[#FF9800]/10 px-3 py-1.5">
                <Sparkles size={13} className="text-[#B96D00]" />
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#B96D00]">
                  VISIÓN 2029
                </span>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-3xl font-semibold tracking-tight text-[#243629] sm:text-4xl">
                Nuestra visión
              </h3>

              <div className="mt-3 h-1 w-14 rounded-full bg-[#FF9800] transition-all duration-300 group-hover:w-24" />

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#536254] sm:text-[15px] sm:leading-7">
                Ser una empresa líder en Colombia en el aprovechamiento
                sostenible de residuos orgánicos y aceite de cocina
                usado, reconocida por la innovación y la calidad de
                nuestros productos ecológicos.
              </p>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#536254] sm:text-[15px] sm:leading-7">
                Queremos impulsar una cultura ambiental responsable,
                generar un impacto positivo y contribuir a la protección
                de los recursos naturales.
              </p>
            </div>

            <div className="mt-auto mt-7 flex items-center gap-3 border-t border-[#D7B98E]/70 pt-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF9800]/15 text-[#B96D00]">
                <Sprout size={19} />
              </div>

              <p className="text-xs font-semibold text-[#344337] sm:text-sm">
                Un futuro sostenible para Colombia.
              </p>

              <ArrowDownRight
                size={19}
                className="ml-auto shrink-0 text-[#B96D00] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}

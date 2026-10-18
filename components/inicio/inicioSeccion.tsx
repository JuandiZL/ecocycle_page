
"use client";

import Image from "next/image";

import {
  ArrowDown,
  ArrowUpRight,
  Recycle,
  Leaf,
  Sprout,
  Sparkles,
} from "lucide-react";

export default function InicioSeccion() {
  return (
    <main className="w-full px-4 pb-1 pt-1 sm:px-6 sm:pb-2 sm:pt-2 lg:px-6">
      <section
        id="inicio"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        <div className="grid items-center gap-4 px-5 py-6 sm:gap-6 sm:px-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:px-12 lg:py-8 xl:py-10">
          {/* Contenido principal */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/25 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#387C39] sm:mb-7 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
              INNOVACIÓN CON PROPÓSITO
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
              El futuro no se
              <br />
              <span className="text-[#4CAF50]">
                desperdicia.
              </span>
              <br />
              Se transforma.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#647166] sm:mt-6 sm:text-lg sm:leading-8">
              En EcoCycle convertimos la sostenibilidad en acción.
              Descubre una nueva forma de aprovechar los recursos
              y construir un futuro más consciente.
            </p>

            {/* Acciones */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=573044050816&text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+EcoCycle+y+sus+productos+ecol%C3%B3gicos.&type=phone_number&app_absent=0"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4CAF50] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E9742] hover:shadow-lg hover:shadow-[#4CAF50]/20"
              >
                Descubre EcoCycle
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contenido-inicio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D7B98E]/70 bg-white/60 px-6 py-3 font-semibold text-[#344337] transition-colors hover:bg-white"
              >
                Explorar
                <ArrowDown size={17} />
              </a>
            </div>

            {/* Identidad de marca */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#647166] sm:mt-10">
              <span className="flex items-center gap-2">
                <Leaf size={16} className="text-[#4CAF50]" />
                Conciencia ambiental
              </span>

              <span className="hidden h-4 w-px bg-[#D7B98E] min-[420px]:block" />

              <span className="flex items-center gap-2">
                <Recycle size={16} className="text-[#FF9800]" />
                Economía circular
              </span>
            </div>
          </div>

          {/* Composición visual */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center sm:max-w-[420px] lg:max-w-none">
            {/* Anillos decorativos */}
            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full border border-[#4CAF50]/20"
            />

            <div
              aria-hidden="true"
              className="absolute inset-[16%] rounded-full border border-dashed border-[#D7B98E]"
            />

            {/* Círculo principal */}
            <div className="relative flex aspect-square w-[64%] items-center justify-center rounded-full bg-[#4CAF50] shadow-2xl shadow-[#4CAF50]/20">
            <div className="absolute inset-[7%] rounded-full border border-white/25" />

                <div className="relative z-10 flex h-[65%] w-[65%] items-center justify-center">
                    <Image
                    src="/images/logoSinFondo.png"
                    alt="EcoCycle"
                    width={300}
                    height={300}
                    priority
                    className="h-full w-full object-contain drop-shadow-sm"
                    />
                </div>
            </div>


            {/* Acento naranja */}
            <div className="absolute right-[3%] top-[19%] flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl bg-[#FF9800] text-white shadow-lg shadow-[#FF9800]/20 sm:h-16 sm:w-16">
              <Sparkles size={26} />
            </div>

            {/* Acento beige */}
            <div className="absolute bottom-[12%] left-[3%] flex h-14 w-14 items-center justify-center rounded-full border border-[#D7B98E] bg-[#F8F5ED] text-[#4CAF50] shadow-sm sm:h-20 sm:w-20">
              <Sprout size={32} strokeWidth={1.5} />
            </div>

            {/* Etiqueta flotante */}
            <div className="absolute bottom-[17%] right-0 rounded-2xl border border-white/80 bg-white/90 px-3 py-3 shadow-xl backdrop-blur-md sm:right-[-2%] sm:px-4">
              <p className="text-[9px] font-semibold tracking-[0.18em] text-[#8A9489] sm:text-[10px]">
                NUESTRO ENFOQUE
              </p>

              <p className="mt-0 text-xs font-semibold text-[#344337] sm:text-sm">
                Un ciclo más consciente
              </p>
            </div>

            {/* Detalles decorativos */}
            <div className="absolute left-[17%] top-[12%] h-3 w-3 rounded-full bg-[#FF9800]" />

            <div className="absolute bottom-[25%] right-[11%] h-2 w-2 rounded-full bg-[#D7B98E]" />
          </div>
        </div>

        {/* Cierre visual del hero */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D7B98E]/40 px-6 py-2 sm:px-10 sm:py-4 lg:px-16">
          <p className="text-xs font-medium tracking-wide text-[#7A8579] sm:text-sm">
            MENOS DESPERDICIO. MÁS POSIBILIDADES.
          </p>

          <a
            href="#contenido-inicio"
            aria-label="Volver al inicio"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D7B98E]/70 text-[#344337] transition-colors hover:bg-[#4CAF50] hover:text-white"
          >
            <ArrowDown size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}

"use client";

import {
  ArrowUpRight,
  Eye,
  Globe2,
  Leaf,
  Lightbulb,
  Recycle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const valores = [
  {
    titulo: "Responsabilidad ambiental",
    descripcion:
      "Actuamos de manera consciente para reducir el impacto ambiental y promover el cuidado de los recursos naturales.",
    icono: Leaf,
    etiqueta: "Cuidamos el planeta",
    color: "#4CAF50",
    fondo: "#243629",
  },
  {
    titulo: "Sostenibilidad",
    descripcion:
      "Desarrollamos procesos y productos que equilibran el crecimiento económico, el bienestar social y la protección del medio ambiente.",
    icono: Recycle,
    etiqueta: "Pensamos a largo plazo",
    color: "#8BD58B",
    fondo: "#304735",
  },
  {
    titulo: "Innovación",
    descripcion:
      "Buscamos nuevas formas de transformar residuos en productos útiles, ecológicos y de alta calidad.",
    icono: Lightbulb,
    etiqueta: "Creamos soluciones",
    color: "#FFB454",
    fondo: "#453B29",
  },
  {
    titulo: "Respeto por el entorno",
    descripcion:
      "Valoramos y protegemos los ecosistemas mediante acciones que contribuyen a la conservación del planeta.",
    icono: Globe2,
    etiqueta: "Respetamos la vida",
    color: "#8BD58B",
    fondo: "#304735",
  },
  {
    titulo: "Calidad",
    descripcion:
      "Garantizamos productos y servicios con altos estándares de eficiencia, seguridad y sostenibilidad.",
    icono: ShieldCheck,
    etiqueta: "Hacemos las cosas bien",
    color: "#FFB454",
    fondo: "#453B29",
  },
  {
    titulo: "Transparencia",
    descripcion:
      "Actuamos con honestidad, ética y claridad en todas nuestras operaciones y relaciones comerciales.",
    icono: Eye,
    etiqueta: "La confianza nos guía",
    color: "#8BD58B",
    fondo: "#304735",
  },
];

export default function ValoresSeccion() {
  return (
    <section
      id="valores"
      className="relative isolate mx-4 my-4 overflow-hidden rounded-[30px] bg-[#243629] px-5 py-6 sm:mx-6 sm:my-6 sm:rounded-[36px] sm:px-8 sm:py-12 lg:mx-8 lg:px-12 lg:py-14"
    >
      {/* FONDO DECORATIVO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full border-[55px] border-[#4CAF50]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-28 -z-10 h-96 w-96 rounded-full bg-[#4CAF50]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[35%] top-[25%] -z-10 h-48 w-48 rounded-full bg-[#FF9800]/[0.06] blur-3xl"
      />

      {/* ENCABEZADO */}
      <header className="relative mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8BD58B]/20 bg-[#4CAF50]/10 px-3.5 py-2 text-[10px] font-bold tracking-[0.2em] text-[#A9E6A7] sm:text-xs">
            <Sparkles size={14} />
            LO QUE NOS REPRESENTA
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-[#F8F5ED] sm:text-4xl lg:text-5xl">
            Seis valores.
            <span className="block text-[#8BD58B]">
              Una misma esencia.
            </span>
          </h2>
        </div>

        <div className="relative max-w-md lg:mb-1">
          <div className="absolute bottom-0 left-0 top-0 w-[3px] rounded-full bg-gradient-to-b from-[#4CAF50] to-[#FF9800]" />

          <p className="pl-5 text-sm leading-7 text-[#D0D9CF]/75 sm:text-[15px]">
            La sostenibilidad empieza en nuestros principios y se
            refleja en cada cosa que hacemos.
          </p>
        </div>
      </header>

      {/* TARJETAS DE VALORES */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {valores.map((valor) => {
          const Icono = valor.icono;

          return (
            <article
              key={valor.titulo}
              className="group relative isolate flex min-h-[250px] flex-col overflow-hidden rounded-[24px] border border-white/[0.08] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 sm:min-h-[265px] sm:p-6"
              style={{ backgroundColor: valor.fondo }}
            >
              {/* Brillo de fondo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full opacity-[0.09] blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
                style={{ backgroundColor: valor.color }}
              />

              {/* Línea superior animada */}
              <div
                className="absolute left-0 top-0 h-[3px] w-0 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: valor.color }}
              />

              {/* Icono y detalle */}
              <div className="flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                  style={{
                    backgroundColor: `${valor.color}18`,
                    color: valor.color,
                  }}
                >
                  <Icono size={25} strokeWidth={1.7} />
                </div>

                <span
                  className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                  style={{
                    backgroundColor: valor.color,
                    boxShadow: `0 0 14px ${valor.color}55`,
                  }}
                />
              </div>

              {/* Texto */}
              <div className="mt-6 flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-[#F8F5ED] transition-colors duration-300 group-hover:text-white sm:text-[22px]">
                  {valor.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#D0D9CF]/70 transition-colors duration-300 group-hover:text-[#D0D9CF]/90">
                  {valor.descripcion}
                </p>
              </div>

              {/* Pie de tarjeta */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.09] pt-4">
                <span
                  className="text-[10px] font-bold tracking-[0.12em] sm:text-[11px]"
                  style={{ color: valor.color }}
                >
                  {valor.etiqueta}
                </span>

                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:text-[#243629]"
                  style={{
                    backgroundColor: undefined,
                  }}
                >
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300"
                  />
                </span>
              </div>

              {/* Círculo decorativo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-12 -z-10 h-28 w-28 rounded-full border border-white/[0.06] transition-transform duration-700 group-hover:scale-150"
              />
            </article>
          );
        })}
      </div>

    </section>
  );
}
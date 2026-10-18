
"use client";

import {
  ArrowUpRight,
  GraduationCap,
  Recycle,
  ShieldCheck,
  HeartHandshake,
  Sprout,
  Check,
} from "lucide-react";

const politicas = [
  {
    titulo: "Desarrollo del talento",
    descripcion:
      "Promover la formación de nuestros colaboradores para fortalecer sus conocimientos y habilidades.",
    icono: GraduationCap,
    color: "#4CAF50",
    fondo: "#4CAF5018",
  },
  {
    titulo: "Aprovechamiento responsable",
    descripcion:
      "Aprovechar al máximo los residuos generados e impulsar la economía circular.",
    icono: Recycle,
    color: "#E88700",
    fondo: "#FF980018",
  },
  {
    titulo: "Calidad y sostenibilidad",
    descripcion:
      "Garantizar productos que cumplan estándares de calidad, seguridad y sostenibilidad.",
    icono: ShieldCheck,
    color: "#4CAF50",
    fondo: "#4CAF5018",
  },
  {
    titulo: "Bienestar y seguridad",
    descripcion:
      "Proteger la integridad física y el bienestar de todos nuestros colaboradores.",
    icono: HeartHandshake,
    color: "#E88700",
    fondo: "#FF980018",
  },
  {
    titulo: "Compromiso con la comunidad",
    descripcion:
      "Generar valor social y ambiental para nuestros clientes, proveedores y comunidad.",
    icono: Sprout,
    color: "#4CAF50",
    fondo: "#4CAF5018",
  },
];

export default function PoliticasSeccion() {
  return (
    <section
      id="politicas"
      className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#F0E8D9] p-5 sm:rounded-[32px] sm:p-8 lg:p-10">
        {/* Decoración de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full border-[38px] border-[#4CAF50]/10 sm:h-80 sm:w-80"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-[30%] -z-10 h-48 w-48 rounded-full bg-[#FF9800]/10 blur-3xl"
        />

        {/* Encabezado */}
        <div className="relative mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-[#388E3C] sm:text-xs">
              <span className="h-1.5 w-4 rounded-full bg-[#FF9800]" />
              NUESTRO COMPROMISO
            </span>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#243629] sm:text-4xl">
              Políticas EcoCycle
            </h2>
          </div>

          <p className="max-w-md border-l-2 border-[#D7B98E] pl-4 text-sm leading-6 text-[#536254] sm:mb-1 sm:pl-5">
            Principios que convierten nuestro compromiso ambiental
            en acciones responsables y sostenibles.
          </p>
        </div>

        {/* Políticas */}
        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {politicas.map((politica, index) => {
            const Icono = politica.icono;
            const destacada = index === 0;

            return (
              <article
                key={politica.titulo}
                className={`group relative flex flex-col overflow-hidden rounded-[22px] border border-[#D7B98E]/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#243629]/10 sm:p-6 ${
                  destacada
                    ? "bg-[#243629] text-white lg:col-span-2"
                    : "bg-[#F8F5ED] text-[#243629] lg:col-span-1"
                }`}
              >
                {/* Número decorativo */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-2 -top-5 text-7xl font-semibold tracking-tighter ${
                    destacada ? "text-white/[0.05]" : "text-[#243629]/[0.04]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105"
                    style={{
                      backgroundColor: destacada
                        ? `${politica.color}25`
                        : politica.fondo,
                      color: destacada ? "#8BD58B" : politica.color,
                    }}
                  >
                    <Icono size={23} strokeWidth={1.7} />
                  </div>

                  <Check
                    size={17}
                    className={
                      destacada ? "text-[#8BD58B]" : "text-[#B7BBAF]"
                    }
                  />
                </div>

                <div className="relative mt-5 flex-1">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight">
                    {politica.titulo}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      destacada ? "text-white/65" : "text-[#647166]"
                    }`}
                  >
                    {politica.descripcion}
                  </p>
                </div>

                <div
                  className={`mt-5 h-1 w-9 rounded-full transition-all duration-300 group-hover:w-16 ${
                    destacada ? "bg-[#8BD58B]" : ""
                  }`}
                  style={{
                    backgroundColor: destacada ? "#8BD58B" : politica.color,
                  }}
                />
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#D7B98E]/60 pt-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#243629] text-[#8BD58B]">
            <Recycle size={19} />
          </div>

          <p className="text-xs font-medium leading-5 text-[#536254] sm:text-sm">
            Cada decisión cuenta. Cada residuo tiene una nueva oportunidad.
          </p>

          <ArrowUpRight
            size={18}
            className="ml-auto text-[#388E3C]"
          />
        </div>
      </div>
    </section>
  );
}
"use client";

import { 
  MessageSquare, 
  Users, 
  Radio, 
  Ear, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

const estrategias = [
  {
    id: "reuniones",
    titulo: "Reuniones periódicas",
    descripcion: "Realizar reuniones breves para compartir información, avances y novedades de forma constante.",
    icon: Users,
    colorAccento: "text-[#4CAF50]",
    bgIcono: "bg-[#4CAF50]/15 border-[#4CAF50]/30",
  },
  {
    id: "comunicacion-interna",
    titulo: "Comunicación interna clara",
    descripcion: "Utilizar canales definidos para evitar confusiones y facilitar un flujo de información eficiente.",
    icon: Radio,
    colorAccento: "text-[#FF9800]",
    bgIcono: "bg-[#FF9800]/15 border-[#FF9800]/30",
  },
  {
    id: "escucha-activa",
    titulo: "Escucha activa",
    descripcion: "Promover espacios abiertos para que los colaboradores expresen sus ideas, inquietudes y propuestas.",
    icon: Ear,
    colorAccento: "text-[#D7B98E]",
    bgIcono: "bg-[#D7B98E]/15 border-[#D7B98E]/30",
  },
  {
    id: "retroalimentacion",
    titulo: "Retroalimentación",
    descripcion: "Brindar comentarios oportunos sobre el desempeño y las situaciones que requieran mejora.",
    icon: RefreshCw,
    colorAccento: "text-[#4CAF50]",
    bgIcono: "bg-[#4CAF50]/15 border-[#4CAF50]/30",
  },
  {
    id: "comunicacion-asertiva",
    titulo: "Comunicación asertiva",
    descripcion: "Fomentar el respeto y la claridad al expresar opiniones, necesidades o desacuerdos.",
    icon: ShieldCheck,
    colorAccento: "text-[#FF9800]",
    bgIcono: "bg-[#FF9800]/15 border-[#FF9800]/30",
  },
];

export default function EstrategiasComunicacion() {
  return (
    <main className="w-full px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 lg:px-6">
      <section
        id="estrategias-comunicacion"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#1E2D22] text-[#F8F5ED] shadow-2xl sm:rounded-[36px]"
      >
        {/* Luces/Gradients ambientales decorativos sobre el fondo oscuro */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[#4CAF50]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#FF9800]/15 blur-3xl"
        />

        {/* Estructura Compacta de Alto */}
        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
          
          {/* Encabezado Principal */}
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div className="max-w-2xl">

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Estrategias de <span className="text-[#4CAF50]">Comunicación</span>
              </h2>
            </div>

          </div>

          <hr className="my-6 border-[#344839]" />

          {/* Grid Compacto de Estrategias */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {estrategias.map((est, index) => {
              const Icono = est.icon;
              // Hacer que la última tarjeta abarque 2 columnas en pantallas medianas si son impares
              const isLastOdd = index === estrategias.length - 1 && estrategias.length % 2 !== 0;

              return (
                <div
                  key={est.id}
                  className={`group relative flex flex-col justify-between rounded-2xl border border-[#344839] bg-[#243629]/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#4CAF50]/60 hover:bg-[#283c2e] hover:shadow-lg sm:p-5 ${
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
                    <p className="mt-3 text-xs leading-relaxed text-[#BFCBC0] sm:text-sm">
                      {est.descripcion}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#4CAF50]">
                    <CheckCircle2 size={13} />
                    <span>Pilar de alineación</span>
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
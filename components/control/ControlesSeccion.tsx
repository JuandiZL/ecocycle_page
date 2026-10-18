"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Activity, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Sliders, 
  CheckCircle2,
  Clock,
  RotateCcw
} from "lucide-react";

const tiposControl = [
  {
    id: "preventivo",
    fase: "Fase 01 — Antes del Proceso",
    titulo: "Control Preventivo",
    subtitulo: "Anticipación y Estándares",
    badge: "Entradas y Calidad",
    badgeBg: "bg-[#4CAF50]/15 text-[#388E3C] border-[#4CAF50]/30",
    accentColor: "text-[#4CAF50]",
    borderColor: "hover:border-[#4CAF50]/60",
    iconBg: "bg-[#4CAF50] text-white shadow-[#4CAF50]/20",
    icon: ShieldCheck,
    puntos: [
      "Mantenimiento preventivo de maquinaria y equipos de transformación.",
      "Capacitación continua del personal en normas de seguridad e higiene.",
      "Inspección de materia prima (aceite de cocina usado y residuos orgánicos).",
      "Verificación de licencias, permisos ambientales y normativas vigentes.",
    ],
  },
  {
    id: "concurrente",
    fase: "Fase 02 — Durante el Proceso",
    titulo: "Control Concurrente",
    subtitulo: "Supervisión en Tiempo Real",
    badge: "Operación y Monitoreo",
    badgeBg: "bg-[#FF9800]/15 text-[#D97706] border-[#FF9800]/30",
    accentColor: "text-[#FF9800]",
    borderColor: "hover:border-[#FF9800]/60",
    iconBg: "bg-[#FF9800] text-white shadow-[#FF9800]/20",
    icon: Activity,
    puntos: [
      "Supervisión directa del proceso de compostaje y fabricación de jabones.",
      "Monitoreo de variables críticas: temperatura, humedad y tiempos de mezcla.",
      "Control de rutas de recolección y tiempos de transporte en vivo.",
      "Verificación del uso adecuado de Elementos de Protección Personal (EPP).",
    ],
  },
  {
    id: "posterior",
    fase: "Fase 03 — Después del Proceso",
    titulo: "Control Posterior",
    subtitulo: "Evaluación e Impacto",
    badge: "Calidad y Posventa",
    badgeBg: "bg-[#8C6D3F]/15 text-[#8C6D3F] border-[#D7B98E]/50",
    accentColor: "text-[#8C6D3F]",
    borderColor: "hover:border-[#D7B98E]/80",
    iconBg: "bg-[#8C6D3F] text-white shadow-[#8C6D3F]/20",
    icon: CheckCircle,
    puntos: [
      "Pruebas de calidad y efectividad en productos ecológicos terminados.",
      "Evaluación del nivel de satisfacción de clientes y aliados estratégicos.",
      "Análisis de indicadores de rendimiento, ventas y volumen reciclado.",
      "Auditorías internas y planes de acción para la mejora continua.",
    ],
  },
];

export default function ControlesSeccion() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <main className="w-full px-4 pb-6 pt-2 sm:px-6 sm:pb-8 lg:px-8">
      <section
        id="sistema-control"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Decoración ambiental de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        {/* Header de la Sección */}
        <div className="mx-auto max-w-3xl px-5 pt-8 text-center sm:px-8 sm:pt-12 lg:px-12">

          <h1 className="text-3xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Mecanismos de <br />
            <span className="text-[#4CAF50]">Control Operativo</span>
          </h1>

        </div>

        {/* Grid de 3 Cards Espectaculares */}
        <div className="grid gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-3 lg:gap-8 lg:px-12 lg:py-12">
          {tiposControl.map((item) => {
            const Icono = item.icon;
            const isHovered = activeCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative flex flex-col justify-between rounded-3xl border border-[#D7B98E]/40 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl sm:p-8 ${item.borderColor}`}
              >
                <div>
                  {/* Fase + Icono */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-wider text-[#7A8579] uppercase">
                      {item.fase}
                    </span>

                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                      <Icono size={24} />
                    </div>
                  </div>

                  {/* Titular */}
                  <div className="mt-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${item.badgeBg}`}>
                      {item.badge}
                    </span>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#243629]">
                      {item.titulo}
                    </h2>
                    <p className="text-xs font-medium text-[#647166] sm:text-sm">
                      {item.subtitulo}
                    </p>
                  </div>

                  <hr className="my-5 border-[#D7B98E]/30" />

                  {/* Lista de Puntos */}
                  <ul className="flex flex-col gap-3.5 text-sm leading-relaxed text-[#4A554C]">
                    {item.puntos.map((punto, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className={`mt-0.5 shrink-0 ${item.accentColor}`}
                        />
                        <span className="text-xs sm:text-sm">{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer de Card con Micro-interacción */}
                <div className="mt-8 flex items-center justify-between border-t border-[#F8F5ED] pt-4">
                  <span className="text-xs font-semibold text-[#7A8579]">
                    Garantía de Calidad
                  </span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5ED] transition-colors duration-300 ${isHovered ? "bg-[#4CAF50] text-white" : "text-[#243629]"}`}>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? "translate-x-0.5" : ""}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </main>
  );
}
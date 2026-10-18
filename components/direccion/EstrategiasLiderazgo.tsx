"use client";

import { 
  Users, 
  Sparkles, 
  Target, 
  Compass, 
  CheckCircle2, 
  Award, 
  Lightbulb, 
  Zap 
} from "lucide-react";

const estrategias = [
  {
    id: "democratico",
    titulo: "Liderazgo Democrático",
    subtitulo: "Participación activa y construcción colectiva",
    badgeColor: "bg-[#4CAF50]/15 text-[#388E3C] border-[#4CAF50]/30",
    accentBg: "bg-[#4CAF50]",
    icon: Users,
    puntos: [
      "Realizar reuniones periódicas donde los colaboradores propongan mejoras para los procesos de recolección y transformación de residuos.",
      "Involucrar a los equipos en la toma de decisiones sobre campañas ambientales y nuevos proyectos.",
      "Promover mesas de trabajo entre las áreas comercial, producción y gestión ambiental para fortalecer la coordinación.",
      "Crear canales permanentes para recibir sugerencias e iniciativas de innovación.",
      "Fomentar la participación de los colaboradores en la definición de metas e indicadores de desempeño."
    ]
  },
  {
    id: "transformacional",
    titulo: "Liderazgo Transformacional",
    subtitulo: "Inspiración, innovación y propósito ambiental",
    badgeColor: "bg-[#FF9800]/15 text-[#D97706] border-[#FF9800]/30",
    accentBg: "bg-[#FF9800]",
    icon: Sparkles,
    puntos: [
      "Inspirar al equipo mediante la misión ambiental de ECOCYCLE y el impacto positivo que genera en la sociedad.",
      "Motivar la innovación constante en procesos, productos y tecnologías sostenibles.",
      "Reconocer públicamente a los colaboradores que impulsen mejoras ambientales o de productividad.",
      "Promover el desarrollo profesional mediante programas de capacitación y crecimiento interno.",
      "Liderar con el ejemplo, demostrando compromiso con la sostenibilidad, la ética y la mejora continua."
    ]
  },
  {
    id: "transaccional",
    titulo: "Liderazgo Transaccional",
    subtitulo: "Objetivos claros, reconocimientos e incentivos",
    badgeColor: "bg-[#D7B98E]/25 text-[#8C6D3F] border-[#D7B98E]/50",
    accentBg: "bg-[#8C6D3F]",
    icon: Target,
    puntos: [
      "Establecer incentivos por cumplimiento de metas de producción, calidad y recolección.",
      "Definir indicadores claros para evaluar el desempeño individual y grupal.",
      "Aplicar reconocimientos o correctivos según el cumplimiento de procedimientos y normas ambientales.",
      "Supervisar el cumplimiento de los estándares de seguridad, calidad y clasificación de residuos.",
      "Relacionar el logro de objetivos con bonificaciones o beneficios previamente establecidos."
    ]
  },
  {
    id: "laissez-faire",
    titulo: "Liderazgo Laissez-faire",
    subtitulo: "Autonomía técnica y autogestión de equipos",
    badgeColor: "bg-[#243629]/10 text-[#243629] border-[#243629]/20",
    accentBg: "bg-[#243629]",
    icon: Compass,
    puntos: [
      "Delegar la organización de campañas ambientales a equipos especializados, brindando autonomía en la ejecución.",
      "Permitir que los responsables de innovación desarrollen propuestas de nuevos productos con mínima intervención directiva.",
      "Otorgar autonomía a los líderes de cada área para organizar sus actividades y recursos.",
      "Favorecer la autogestión de los equipos siempre que se cumplan los indicadores de calidad y sostenibilidad.",
      "Facilitar los recursos necesarios para que los colaboradores tomen decisiones técnicas dentro de su ámbito de responsabilidad, interviniendo únicamente cuando sea necesario."
    ]
  }
];

export default function EstrategiasLiderazgo() {
  return (
    <main className="w-full px-4 pb-6 pt-1 sm:px-6 sm:pb-8 sm:pt-2 lg:px-6">
      <section
        id="estrategias-liderazgo"
        className="relative isolate overflow-hidden rounded-[28px] bg-[#F8F5ED] text-[#243629] sm:rounded-[36px]"
      >
        {/* Elementos decorativos ambientales de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full border-[45px] border-[#4CAF50]/10 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-[#D7B98E]/20 blur-3xl"
        />

        {/* Encabezado Principal */}
        <div className="mx-auto max-w-4xl px-5 pt-8 text-center sm:px-8 sm:pt-12 lg:px-12">

          <h1 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Estrategias de <br />
            <span className="text-[#4CAF50]">
              Liderazgo Corporativo
            </span>
          </h1>

          <p className="mt-4 text-base leading-7 text-[#647166] sm:mt-5 sm:text-lg sm:leading-8">
            En ECOCYCLE combinamos diferentes enfoques de liderazgo para motivar, guiar y coordinar a nuestro talento humano hacia el cumplimiento de las metas de sostenibilidad e innovación.
          </p>
        </div>

        {/* Grid de Tarjetas de Liderazgo */}
        <div className="grid gap-6 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 lg:gap-8 lg:px-12 lg:py-12">
          {estrategias.map((est) => {
            const IconoComponente = est.icon;

            return (
              <div
                key={est.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#D7B98E]/40 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4CAF50]/50 hover:shadow-xl sm:p-8"
              >
                <div>
                  {/* Encabezado de la Tarjeta */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${est.accentBg} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                        <IconoComponente size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#243629] sm:text-2xl">
                          {est.titulo}
                        </h2>
                        <p className="text-xs font-medium text-[#647166] sm:text-sm">
                          {est.subtitulo}
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-5 border-[#D7B98E]/30" />

                  {/* Lista de Puntos Pauta */}
                  <ul className="flex flex-col gap-3.5 text-sm leading-relaxed text-[#4A554C] sm:text-base">
                    {est.puntos.map((punto, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#4CAF50]"
                        />
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer de la tarjeta */}
                <div className="mt-6 pt-4 border-t border-[#F8F5ED]">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${est.badgeColor}`}>
                    <Lightbulb size={13} />
                    Pilares de Aplicación Operativa
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </main>
  );
}
"use client";

import Image from "next/image";

import {
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Lightbulb,
  Recycle,
  Scale,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";


const dofa = [
  {
    letra: "F",
    titulo: "Fortalezas",
    tipo: "A FAVOR",
    icono: ShieldCheck,
    color: "#388E3C",
    fondo: "#D9EBD5",
    descripcion:
      "Modelo innovador de economía circular y fuerte compromiso ambiental.",
  },
  {
    letra: "D",
    titulo: "Debilidades",
    tipo: "EN CONTRA",
    icono: Wallet,
    color: "#A96B22",
    fondo: "#F2DEC1",
    descripcion:
      "Dependencia de proveedores y capacidad operativa limitada por ser un negocio nuevo.",
  },
  {
    letra: "O",
    titulo: "Oportunidades",
    tipo: "EL ENTORNO OFRECE",
    icono: Sprout,
    color: "#388E3C",
    fondo: "#D1E6D0",
    descripcion:
      "Crecimiento del mercado ecológico y acceso a fondos o incentivos gubernamentales.",
  },
  {
    letra: "A",
    titulo: "Amenazas",
    tipo: "EL ENTORNO EXIGE",
    icono: Target,
    color: "#D97736",
    fondo: "#F6DFCB",
    descripcion:
      "Competidores ya establecidos y productos tradicionales más baratos.",
  },
];

const estrategias = [
  {
    codigo: "FO",
    titulo: "Crecer",
    icono: TrendingUp,
    color: "#7ACB76",
    texto:
      "Usar nuestra innovación para obtener apoyos del gobierno y expandirnos.",
  },
  {
    codigo: "DO",
    titulo: "Mejorar",
    icono: Lightbulb,
    color: "#FFB45D",
    texto:
      "Financiar la falta de infraestructura aprovechando convocatorias ambientales.",
  },
  {
    codigo: "FA",
    titulo: "Defender",
    icono: ShieldCheck,
    color: "#9DB8A0",
    texto:
      "Mejorar continuamente nuestros procesos para hacer frente a la competencia.",
  },
  {
    codigo: "DA",
    titulo: "Proteger",
    icono: Wallet,
    color: "#FFAB72",
    texto:
      "Planificar cuidadosamente las finanzas para afrontar cambios legales o económicos.",
  },
];

const matrices = [
  {
    numero: "02",
    id: "matriz-efi",
    categoria: "DIAGNÓSTICO INTERNO",
    titulo: "Matriz EFI",
    subtitulo: "Evaluación de factores internos",
    descripcion:
      "Analizamos las capacidades y limitaciones internas de EcoCycle para identificar las ventajas que impulsan nuestro crecimiento.",
    resultado: "2.90",
    resultadoTexto: "Posición interna favorable",
    color: "#388E3C",
    fondo: "#E4EEDF",
    etiqueta: "FORTALEZAS INTERNAS",
    conclusion:
      "Nuestras fortalezas, especialmente la economía circular, el compromiso ambiental y la responsabilidad social, compensan las debilidades propias de una empresa en crecimiento.",
    puntos: [
      "Modelo de economía circular",
      "Compromiso ambiental",
      "Responsabilidad social",
      "Desarrollo de ventajas competitivas",
    ],
    imagen: "/images/MatrizEfi.jpeg",
    imagenAlt: "Matriz EFI de EcoCycle: evaluación de factores internos",
    posicionImagen: "izquierda",
  },
  {
    numero: "03",
    id: "matriz-efe",
    categoria: "ANÁLISIS DEL ENTORNO",
    titulo: "Matriz EFE",
    subtitulo: "Evaluación de factores externos",
    descripcion:
      "Evaluamos las oportunidades y amenazas del mercado para orientar nuestras decisiones y anticiparnos a los cambios del entorno.",
    resultado: "2.94",
    resultadoTexto: "Entorno favorable",
    color: "#C87919",
    fondo: "#F3E7D4",
    etiqueta: "OPORTUNIDADES DE MERCADO",
    conclusion:
      "El crecimiento de la demanda de productos ecológicos crea oportunidades para EcoCycle. Nuestro reto es competir con productos tradicionales de menor precio y llegar a nuevos consumidores.",
    puntos: [
      "Mayor interés por opciones ecológicas",
      "Mercado con potencial de crecimiento",
      "Competencia de precios",
      "Nuevas estrategias de comercialización",
    ],
    imagen: "/images/MatrizEfe.jpeg",
    imagenAlt: "Matriz EFE de EcoCycle: evaluación de factores externos",
    posicionImagen: "derecha",
  },
  {
    numero: "04",
    id: "matriz-mpc",
    categoria: "ANÁLISIS COMPETITIVO",
    titulo: "Matriz MPC",
    subtitulo: "Perfil competitivo",
    descripcion:
      "Identificamos nuestra posición dentro del sector ecológico y los elementos que nos diferencian de otros participantes del mercado.",
    resultado: "MPC",
    resultadoTexto: "Diferenciación sostenible",
    color: "#597B65",
    fondo: "#E1E9DE",
    etiqueta: "VENTAJA DIFERENCIAL",
    conclusion:
      "EcoCycle mantiene una posición favorable y obtiene un resultado cercano al de sus principales competidores. Torna destaca por su trayectoria y reconocimiento, mientras Biogar sobresale por la diversidad y calidad de sus productos ecológicos.",
    puntos: [
      "Torna: trayectoria y reconocimiento",
      "Biogar: diversidad y calidad",
      "EcoCycle: aprovechamiento de residuos",
      "Productos biodegradables y sostenibles",
    ],
    imagen: "/images/MatrizMpc.jpeg",
    imagenAlt: "Matriz MPC de EcoCycle: perfil competitivo",
    posicionImagen: "izquierda",
  },
] as const;

/*
|--------------------------------------------------------------------------
| COMPONENTE DE IMAGEN
|--------------------------------------------------------------------------
| La imagen ocupa toda la columna y se adapta a la altura del contenido.
| object-contain permite visualizar la matriz completa sin recortarla.
*/

function ImagenMatriz({
  src,
  alt,
  titulo,
}: {
  src: string;
  alt: string;
  titulo: string;
}) {
  return (
    <div className="relative min-h-[230px] overflow-hidden rounded-2xl border border-[#D7B98E]/60 bg-[#E8EBDD] sm:min-h-[280px] lg:min-h-full lg:rounded-none lg:border-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-contain p-2 sm:p-3 lg:p-4"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#243629]/80 via-[#243629]/25 to-transparent px-4 pb-3 pt-10 sm:px-5 sm:pb-4">
        <p className="flex items-center gap-2 text-xs font-semibold text-white sm:text-sm">
          <Leaf size={15} />
          {titulo}
        </p>
      </div>
    </div>
  );
}

function TarjetaMatriz({
  matriz,
}: {
  matriz: (typeof matrices)[number];
}) {
  const imagenIzquierda = matriz.posicionImagen === "izquierda";

  return (
    <article
      id={matriz.id}
      className="scroll-mt-6 overflow-hidden rounded-[22px] border border-[#D7B98E]/65 shadow-sm sm:rounded-[26px]"
      style={{ backgroundColor: matriz.fondo }}
    >
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* IMAGEN: cambia de lado según la matriz */}
        <div
          className={`min-w-0 p-3 sm:p-4 lg:p-0 ${
            imagenIzquierda ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <ImagenMatriz
            src={matriz.imagen}
            alt={matriz.imagenAlt}
            titulo={matriz.titulo}
          />
        </div>

        {/* INFORMACIÓN */}
        <div
          className={`flex min-w-0 flex-col justify-center p-4 sm:p-5 lg:p-6 xl:p-7 ${
            imagenIzquierda ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white sm:h-11 sm:w-11"
              style={{ backgroundColor: matriz.color }}
            >
              {matriz.id === "matriz-efi" ? (
                <ShieldCheck size={22} />
              ) : matriz.id === "matriz-efe" ? (
                <TrendingUp size={22} />
              ) : (
                <Scale size={22} />
              )}
            </span>

            <div className="min-w-0 flex-1">
              <p
                className="text-[9px] font-bold tracking-[0.13em] sm:text-[10px]"
                style={{ color: matriz.color }}
              >
                MATRIZ {matriz.numero} · {matriz.categoria}
              </p>

              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#243629] sm:text-3xl">
                {matriz.titulo}
              </h3>

              <p className="mt-1 text-xs text-[#647166] sm:text-sm">
                {matriz.subtitulo}
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#536254]">
            {matriz.descripcion}
          </p>

          {/* RESULTADO */}
          <div
            className="mt-4 rounded-xl border p-3 sm:p-4"
            style={{
              backgroundColor: `${matriz.color}0D`,
              borderColor: `${matriz.color}40`,
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-[0.13em] text-[#647166]">
                  RESULTADO
                </p>

                <p
                  className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl"
                  style={{ color: matriz.color }}
                >
                  {matriz.resultado}
                </p>

                <p className="mt-1 text-xs font-semibold text-[#344337] sm:text-sm">
                  {matriz.resultadoTexto}
                </p>
              </div>

              <span
                className="rounded-full px-3 py-2 text-[9px] font-bold tracking-wide"
                style={{
                  backgroundColor: `${matriz.color}20`,
                  color: matriz.color,
                }}
              >
                {matriz.etiqueta}
              </span>
            </div>
          </div>

          {/* INTERPRETACIÓN */}
          <div className="mt-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-[#344337]">
              <span
                className="h-5 w-1 rounded-full"
                style={{ backgroundColor: matriz.color }}
              />
              Interpretación estratégica
            </h4>

            <p className="mt-2 text-sm leading-6 text-[#536254]">
              {matriz.conclusion}
            </p>
          </div>

          {/* PUNTOS CLAVE */}
          <div className="mt-4">
            <h4 className="text-[10px] font-bold tracking-[0.14em] text-[#647166]">
              PUNTOS CLAVE
            </h4>

            <ul className="mt-2 grid gap-x-3 gap-y-2 sm:grid-cols-2">
              {matriz.puntos.map((punto) => (
                <li
                  key={punto}
                  className="flex min-w-0 items-start gap-2 text-sm leading-5 text-[#536254]"
                >
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: matriz.color }}
                  />
                  <span>{punto}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-[#D7B98E]/60 pt-3 text-[11px] font-medium text-[#647166]">
            <Leaf size={14} style={{ color: matriz.color }} />
            Planeación estratégica EcoCycle
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PlaneacionInicioSeccion() {
  return (
    <main className="w-full px-3 py-2 text-[#243629] sm:px-5 lg:px-6">
      {/* No hay portada: comienza directamente con el contenido */}
      <div className="mx-auto w-full max-w-[1600px] space-y-4 sm:space-y-5">
        {/* MATRIZ DOFA */}
        <section
          id="matriz-dofa"
          className="overflow-hidden rounded-[22px] border border-[#D7B98E]/60 bg-gradient-to-br from-[#EDE8D8] via-[#F2EBDD] to-[#E1EBD9] sm:rounded-[26px]"
        >
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
            {/* INFORMACIÓN A LA IZQUIERDA */}
            <div className="flex min-w-0 flex-col justify-center p-4 sm:p-6 lg:p-7 xl:p-8">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/25 bg-[#D8EAD3] px-3 py-1.5 text-[10px] font-bold tracking-[0.13em] text-[#387C39]">
                  <Target size={14} />
                  DIAGNÓSTICO ESTRATÉGICO
                </span>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Matriz <span className="text-[#388E3C]">DOFA</span>
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#536254] sm:text-base">
                  Identificamos las fortalezas y debilidades internas de
                  EcoCycle, así como las oportunidades y amenazas externas
                  que influyen en nuestro desarrollo.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                {dofa.map((item) => {
                  const Icono = item.icono;

                  return (
                    <article
                      key={item.letra}
                      className="min-w-0 rounded-[17px] border p-3.5 sm:p-4"
                      style={{
                        backgroundColor: item.fondo,
                        borderColor: `${item.color}35`,
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          <Icono size={19} />
                        </span>

                        <div className="min-w-0">
                          <p
                            className="text-[9px] font-bold tracking-wide"
                            style={{ color: item.color }}
                          >
                            {item.tipo}
                          </p>

                          <h3 className="text-sm font-semibold text-[#243629] sm:text-base">
                            {item.titulo}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-2.5 text-sm leading-5 text-[#536254]">
                        {item.descripcion}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-[16px] border border-[#D7B98E]/60 bg-[#DCEBD7] p-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4E2C7] text-[#A96B22]">
                  <Lightbulb size={19} />
                </span>

                <p className="text-sm leading-5 text-[#536254]">
                  <strong className="text-[#344337]">Propósito:</strong>{" "}
                  transformar el diagnóstico empresarial en acciones
                  concretas de crecimiento y protección.
                </p>
              </div>
            </div>

            {/* IMAGEN DOFA A LA DERECHA */}
            <div className="min-w-0 p-3 pt-0 sm:p-4 sm:pt-0 lg:p-0">
              <ImagenMatriz
                src="/images/MatrizDofa.jpeg"
                alt="Matriz DOFA de EcoCycle"
                titulo="Matriz DOFA · EcoCycle"
              />
            </div>
          </div>

          {/* ESTRATEGIAS DOFA */}
          <div className="border-t border-[#D7B98E]/60 bg-[#E6EBDD]/80 p-4 sm:p-6 lg:p-7">
            <div className="mb-4">
              <p className="text-[10px] font-bold tracking-[0.17em] text-[#A96B22]">
                DE LA ESTRATEGIA A LA ACCIÓN
              </p>

              <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                Estrategias derivadas del análisis
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-4">
              {estrategias.map((estrategia) => {
                const Icono = estrategia.icono;

                return (
                  <article
                    key={estrategia.codigo}
                    className="flex min-w-0 items-start gap-3 rounded-[17px] border border-[#D7B98E]/50 bg-[#FFFCF5]/80 p-3.5 sm:p-4"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#344337]"
                      style={{ backgroundColor: estrategia.color }}
                    >
                      <Icono size={20} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-wide text-[#788278]">
                        ESTRATEGIA {estrategia.codigo}
                      </p>

                      <h4 className="mt-0.5 font-semibold">
                        {estrategia.titulo}
                      </h4>

                      <p className="mt-1 text-sm leading-5 text-[#536254]">
                        {estrategia.texto}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EFI, EFE Y MPC: ALTERNANCIA AUTOMÁTICA */}
        <section
          id="analisis-estrategico"
          className="space-y-4 sm:space-y-5"
        >
          {matrices.map((matriz) => (
            <TarjetaMatriz key={matriz.id} matriz={matriz} />
          ))}
        </section>

        {/* CIERRE */}
        <footer className="relative isolate overflow-hidden rounded-[22px] border border-white/10 bg-[#294333] px-5 py-6 text-white sm:rounded-[26px] sm:px-7 sm:py-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 -z-10 h-48 w-48 rounded-full border-[30px] border-[#FF9800]/15"
          />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-[#FFBE70] sm:text-xs">
                <Leaf size={15} />
                NUESTRO COMPROMISO
              </span>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Planificar hoy para transformar mañana.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">
                Nuestro análisis estratégico es el punto de partida para
                fortalecer el modelo de negocio, desarrollar soluciones
                sostenibles y construir un futuro más consciente.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-2xl bg-[#4CAF50] sm:h-16 sm:w-16 sm:self-center">
              <Recycle size={30} strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
            <p className="text-[11px] font-medium tracking-wide text-white/70 sm:text-sm">
              MENOS DESPERDICIO. MÁS POSIBILIDADES.
            </p>

            <a
              href="#matriz-dofa"
              aria-label="Volver a la matriz DOFA"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-[#4CAF50]"
            >
              <ArrowUpRight size={19} />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
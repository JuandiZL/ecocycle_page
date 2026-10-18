"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Recycle,
  Menu,
  X,
  ArrowUpRight,
  Leaf,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Planeación", href: "/planeacion" },
  { label: "Organización", href: "/organizacion" },
  { label: "Dirección", href: "/direccion" },
  { label: "Control", href: "/control" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // CONFIGURACIÓN DE WHATSAPP
  const phoneNumber = "573044050816";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre EcoCycle y sus productos ecológicos."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const isActive = (href: string) => pathname === href;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 w-full px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 rounded-[22px] border border-[#D7B98E]/40 bg-[#F8F5ED]/95 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6 lg:rounded-full lg:px-7"
      >
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="EcoCycle, ir al inicio"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo-ecocycle.png"
              alt="Logo de EcoCycle"
              width={48}
              height={48}
              priority
              className="h-11 w-11 object-contain"
            />
          </span>

          <span className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#243629] sm:text-2xl">
              Eco<span className="text-[#4CAF50]">Cycle</span>
            </span>

            <span className="hidden text-[10px] font-medium tracking-[0.13em] text-[#788278] min-[380px]:block">
              UN FUTURO CONSCIENTE
            </span>
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP INNOVADORA Y MÁS GRANDE */}
        <div className="hidden items-center gap-1.5 rounded-full border border-[#D7B98E]/30 bg-[#243629]/5 p-1.5 backdrop-blur-md xl:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-base font-semibold transition-all duration-300 2xl:px-5 ${
                  active
                    ? "bg-white text-[#2E7D32] shadow-md shadow-[#243629]/10 scale-[1.03]"
                    : "text-[#526355] hover:bg-white/60 hover:text-[#243629]"
                }`}
              >
                {/* Indicador de pestaña activa */}
                {active && (
                  <span className="h-2 w-2 rounded-full bg-[#4CAF50] animate-pulse" />
                )}

                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* ACCIONES DESKTOP (CONTACTO + BOTÓN WHATSAPP SEPARADO) */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contacto"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-[#4CAF50] px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E9742] hover:shadow-lg hover:shadow-[#4CAF50]/20"
          >
            <span>Contacto</span>
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* BOTÓN DE WHATSAPP ANIMADO */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 opacity-75 duration-1000" />
            <FaWhatsapp className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D7B98E]/50 bg-white/70 text-[#344337] transition-colors hover:bg-[#4CAF50]/10 xl:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        id="mobile-navigation"
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
        className={`absolute left-4 right-4 top-full z-50 mt-2 origin-top rounded-[24px] border border-[#D7B98E]/40 bg-[#F8F5ED] p-3 shadow-xl shadow-[#243629]/10 transition-all duration-200 sm:left-6 sm:right-6 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-[0.98] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#4CAF50]/10 text-[#388E3C]"
                    : "text-[#647166] hover:bg-white hover:text-[#243629]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-3 flex flex-col gap-2 border-t border-[#D7B98E]/40 pt-3">
          <Link
            href="/contacto"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#4CAF50] px-4 py-3.5 font-semibold text-white transition-colors hover:bg-[#3E9742]"
          >
            Contacto
            <ArrowUpRight size={18} />
          </Link>

          {/* WHATSAPP EN EL MENÚ MÓVIL */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 font-semibold text-white transition-colors hover:bg-[#20ba5a]"
          >
            <FaWhatsapp size={20} />
            Escribir por WhatsApp
          </a>

          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[#788278]">
            <Leaf size={14} className="text-[#4CAF50]" />
            Construyamos un futuro más consciente
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navigationItems } from "@/constants/navigation";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = (
    <nav
      aria-label="Navigare"
      className="flex flex-1 flex-col gap-1 overflow-y-auto py-10"
    >
      {navigationItems.map(({ label, href }, index) => (
        <Link
          href={href}
          key={href}
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-3 rounded-r-md border-l-2 border-transparent px-3 py-2.5 text-sm text-white/70 transition-colors hover:border-[#00c6ff] hover:bg-[#13212a] hover:text-white"
        >
          <span className="text-[10px] font-medium tracking-wider text-[#39C5D8]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );

  const footer = (
    <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6">
      <a
        href="#contact"
        className="block w-full rounded-[3px] border border-[#376278] bg-[#102431] px-2 py-[10px] text-center text-[10px] font-semibold leading-[1.35] tracking-normal text-[#9fd9e9] transition-[background-color,border-color,color] duration-200 hover:border-[#00c6ff] hover:bg-[#173544] hover:text-[#e9faff]"
      >
        PROGRAMEAZĂ O DISCUȚIE
      </a>

      <small className="text-[9px] font-medium tracking-[0.15em] text-white/50">
        CONSTRUIM AFACERI INTELIGENTE.
      </small>
    </div>
  );

  const logo = (
    <Link
      href="/"
      aria-label="Atelierul de firme - Acasă"
      onClick={() => setIsMenuOpen(false)}
      className="flex items-center gap-3"
    >
      <Image
        src="/images/logo-atelierul-de-firme.svg"
        alt="Atelierul de firme"
        width={180}
        height={60}
        className="h-[60px] w-[60px]"
        priority
      />

      <span className="flex flex-col text-white">
        <span className="font-bold tracking-wider">ATELIERUL</span>
        <span className="text-sm tracking-[0.25em]">DE FIRME</span>
      </span>
    </Link>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        aria-label="Meniu principal"
        className="sticky top-0 z-50 hidden h-screen w-[260px] shrink-0 flex-col border-r border-white/10 bg-[#060a10] px-6 py-8 text-white md:flex"
      >
        {logo}
        {navigation}
        {footer}
      </aside>

      {/* Mobile header */}
      <header className="fixed left-0 right-0 top-0 z-[110] flex h-[76px] items-center justify-between border-b border-white/10 bg-[#060a10] px-5 text-white md:hidden">
        {logo}

        <button
          type="button"
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center border border-[#376278] bg-[#102431] text-[#00c6ff] transition-colors hover:border-[#00c6ff]"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[105] md:hidden">
          <button
            type="button"
            aria-label="Închide meniul"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-black/70"
          />

          <aside
            id="mobile-navigation"
            aria-label="Meniu principal"
            className="absolute bottom-0 left-0 top-[76px] flex w-[min(320px,85vw)] flex-col border-r border-white/10 bg-[#060a10] px-6 py-7 text-white shadow-2xl"
          >
            {navigation}
            {footer}
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;

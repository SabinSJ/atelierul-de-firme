import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d12] px-6 py-10 text-[#f4f8fb] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {/* Identitate brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex w-fit items-center gap-3">
              <Image
                src="/images/logo-atelierul-de-firme.svg"
                alt="Atelierul de Firme"
                width={25}
                height={40}
                className="h-10 w-6 shrink-0 object-contain"
              />

              <span className="text-sm font-bold tracking-wide text-[#e8f4f8]">
                ATELIERUL DE FIRME
              </span>
            </Link>

            <p className="max-w-xs text-xs leading-6 text-[#9ab6c6]">
              Infrastructură. Strategie. Business.
            </p>
          </div>

          {/* Documente juridice */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e8f4f8]">
              Informații utile
            </h2>

            <nav aria-label="Documente juridice">
              <ul className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="w-fit text-xs text-[#9ab6c6] transition-colors hover:text-[#00c6ff]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Slogan */}
          <div className="flex flex-col gap-3 lg:items-end lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b9cbd4]">
              STRATEGIE. STRUCTURĂ. PERFORMANȚĂ.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-[10px] tracking-wide text-[#71808b]">
            © {new Date().getFullYear()} Atelierul de Firme. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

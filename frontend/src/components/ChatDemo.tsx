"use client";

import { useState } from "react";

const ChatDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Asistent Atelierul de Firme - demonstrație"
      className="fixed bottom-5 right-5 z-[100] w-[min(380px,calc(100vw-40px))] text-white"
    >
      {isOpen && (
        <div
          id="chat-demo-modal"
          className="mb-3 w-full border border-white/10 bg-[#101a22] p-5 shadow-2xl"
        >
          <div className="mb-5 flex flex-col gap-1 border-b border-white/10 pb-4">
            <strong className="text-sm">Asistent Atelierul de Firme</strong>
            <small className="text-[9px] tracking-[0.15em] text-[#00c6ff]">
              DEMO / RĂSPUNSURI INFORMATIVE
            </small>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-white/70">
            Bun venit! Descoperă rapid ce facem și cum putem începe o
            colaborare.
          </p>

          <div className="flex flex-col gap-2">
            <details className="group border border-white/10 bg-[#0b131a]">
              <summary className="cursor-pointer px-4 py-3 text-xs font-medium text-white/85 transition-colors hover:text-[#00c6ff]">
                Ce este un ID Book?
                <span className="float-right text-[#00c6ff]">+</span>
              </summary>
              <p className="px-4 pb-4 text-xs leading-relaxed text-white/60">
                Este ghidul de identitate vizuală al brandului: reguli pentru
                logo, culori, fonturi și exemple de aplicare.
              </p>
            </details>

            <details className="group border border-white/10 bg-[#0b131a]">
              <summary className="cursor-pointer px-4 py-3 text-xs font-medium text-white/85 transition-colors hover:text-[#00c6ff]">
                Ce servicii oferiți?
                <span className="float-right text-[#00c6ff]">+</span>
              </summary>
              <p className="px-4 pb-4 text-xs leading-relaxed text-white/60">
                Strategie și poziționare, identitate vizuală, aplicații digitale
                și materiale de comunicare. Livrabilele se stabilesc în funcție
                de proiect.
              </p>
            </details>

            <details className="group border border-white/10 bg-[#0b131a]">
              <summary className="cursor-pointer px-4 py-3 text-xs font-medium text-white/85 transition-colors hover:text-[#00c6ff]">
                Cum începem un proiect?
                <span className="float-right text-[#00c6ff]">+</span>
              </summary>
              <p className="px-4 pb-4 text-xs leading-relaxed text-white/60">
                Ne spui câteva detalii despre afacere și obiective. Discutăm
                nevoile și definim împreună următorii pași.
              </p>
            </details>
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 block border border-[#376278] bg-[#102431] px-4 py-3 text-center text-xs font-semibold text-[#9fd9e9] transition-colors hover:border-[#00c6ff] hover:text-white"
          >
            Vezi datele de contact ↗
          </a>

          <p className="mt-4 text-[11px] leading-relaxed text-white/70">
            Aceasta este o demonstrație interactivă, nu un chatbot AI activ. Nu
            colectează și nu transmite mesaje.
          </p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="chat-demo-modal"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-fit cursor-pointer items-center gap-3 rounded-full border border-[#67e3ff] bg-[#00c6ff] px-[18px] py-[14px] text-sm font-bold text-[#05141c] shadow-[0_12px_35px_#0009] transition-colors hover:bg-[#39d3ff]"
        >
          {isOpen ? "Închide" : "Întreabă-ne"}
          <span aria-hidden="true">{isOpen ? "×" : "✦"}</span>
        </button>
      </div>
    </aside>
  );
};

export default ChatDemo;

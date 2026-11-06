import LegalPage from "@/components/legal/LegalPage";

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      title="Politica de cookies"
      subtitle="Această pagină explică modul în care site-ul Atelierul de Firme utilizează cookie-uri și tehnologii similare."
      lastUpdated="03.11.2026"
      sections={[
        {
          title: "1. Ce sunt cookie-urile?",
          content: (
            <p>
              Cookie-urile sunt fișiere de mici dimensiuni stocate pe
              dispozitivul utilizatorului atunci când acesta accesează un site.
              Ele pot permite funcționarea anumitor caracteristici, memorarea
              preferințelor sau colectarea unor informații despre utilizarea
              site-ului.
            </p>
          ),
        },
        {
          title: "2. Ce categorii de cookie-uri putem utiliza?",
          content: (
            <>
              <p>
                În funcție de funcționalitățile implementate, site-ul poate
                utiliza următoarele categorii:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-[#f4f8fb]">
                    Cookie-uri necesare:
                  </strong>{" "}
                  asigură funcționarea de bază și securitatea site-ului.
                </li>
                <li>
                  <strong className="text-[#f4f8fb]">
                    Cookie-uri de preferințe:
                  </strong>{" "}
                  memorează anumite alegeri ale utilizatorului.
                </li>
                <li>
                  <strong className="text-[#f4f8fb]">
                    Cookie-uri de analiză:
                  </strong>{" "}
                  ajută la înțelegerea modului în care este utilizat site-ul,
                  dacă există servicii de analiză implementate.
                </li>
                <li>
                  <strong className="text-[#f4f8fb]">
                    Cookie-uri de marketing:
                  </strong>{" "}
                  pot fi utilizate pentru măsurarea sau personalizarea
                  comunicărilor publicitare, dacă astfel de servicii sunt
                  folosite.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Gestionarea consimțământului",
          content: (
            <p>
              Cookie-urile care nu sunt strict necesare funcționării site-ului
              trebuie gestionate conform cerințelor legale aplicabile. Atunci
              când este necesar, utilizatorul poate accepta, refuza sau modifica
              preferințele prin intermediul mecanismului de consimțământ
              disponibil pe site.
            </p>
          ),
        },
        {
          title: "4. Cum poți controla cookie-urile?",
          content: (
            <p>
              Poți gestiona sau șterge cookie-urile și din setările browserului
              utilizat. Dezactivarea anumitor cookie-uri poate afecta
              funcționarea unor caracteristici ale site-ului.
            </p>
          ),
        },
        {
          title: "5. Servicii terțe",
          content: (
            <p>
              Site-ul poate integra servicii furnizate de terți, precum
              instrumente de analiză sau servicii externe. [ENUMERAȚI FURNIZORII
              REALI, COOKIE-URILE FOLOSITE, DURATA ȘI SCOPUL ACESTORA.]
            </p>
          ),
        },
        {
          title: "6. Actualizarea politicii",
          content: (
            <p>
              Această politică poate fi actualizată atunci când se modifică
              tehnologiile utilizate sau cerințele legale.
            </p>
          ),
        },
      ]}
    />
  );
}

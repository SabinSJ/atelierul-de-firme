import LegalPage from "@/components/legal/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Politica de confidențialitate"
      subtitle="Această politică explică modul în care colectăm, utilizăm și protejăm datele personale ale persoanelor care utilizează site-ul Atelierul de Firme."
      lastUpdated="03.11.2026"
      sections={[
        {
          title: "1. Cine suntem?",
          content: (
            <>
              <p>Operatorul datelor cu caracter personal este:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Denumire: [DENUMIREA FIRMEI]</li>
                <li>Formă juridică: [SRL / PFA / ALTĂ FORMĂ]</li>
                <li>CUI: [CUI]</li>
                <li>Nr. Registrul Comerțului: [JXX/XXXX/XXXX]</li>
                <li>Sediu: [ADRESA COMPLETĂ]</li>
                <li>Email: [EMAIL CONTACT]</li>
                <li>Telefon: [NUMĂR DE TELEFON]</li>
              </ul>

              <p>
                În cuprinsul acestei politici, operatorul va fi denumit în
                continuare „Atelierul de Firme”.
              </p>
            </>
          ),
        },
        {
          title: "2. Ce date personale colectăm?",
          content: (
            <>
              <p>
                În funcție de modul în care interacționezi cu site-ul, putem
                colecta următoarele categorii de date:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Nume și prenume;</li>
                <li>Denumirea companiei reprezentate;</li>
                <li>Adresa de email;</li>
                <li>Numărul de telefon;</li>
                <li>
                  Informații incluse în mesajele transmise prin formulare;
                </li>
                <li>
                  Fișiere încărcate voluntar, precum logo-uri sau materiale
                  grafice;
                </li>
                <li>
                  Date tehnice necesare funcționării și securității site-ului.
                </li>
              </ul>

              <p>
                Nu solicităm în mod intenționat categorii speciale de date
                personale. Te rugăm să nu transmiți astfel de informații prin
                formularele site-ului.
              </p>
            </>
          ),
        },
        {
          title: "3. În ce scop utilizăm datele?",
          content: (
            <>
              <p>Datele pot fi utilizate pentru:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Preluarea și gestionarea solicitărilor de ofertă;</li>
                <li>
                  Contactarea persoanelor interesate de produsele și serviciile
                  noastre;
                </li>
                <li>Pregătirea ofertelor comerciale personalizate;</li>
                <li>
                  Comunicarea privind proiectele și serviciile solicitate;
                </li>
                <li>Îmbunătățirea funcționării și securității site-ului;</li>
                <li>Îndeplinirea obligațiilor legale aplicabile.</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Temeiul legal al prelucrării",
          content: (
            <>
              <p>
                În funcție de situație, prelucrarea datelor se poate baza pe:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Demersuri efectuate la solicitarea persoanei vizate, înainte
                  de încheierea unui contract;
                </li>
                <li>
                  Executarea unui contract sau îndeplinirea obligațiilor
                  contractuale;
                </li>
                <li>Îndeplinirea obligațiilor legale ale operatorului;</li>
                <li>
                  Interesul legitim al operatorului, acolo unde acesta este
                  aplicabil;
                </li>
                <li>
                  Consimțământul persoanei vizate, atunci când acesta este
                  necesar.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "5. Cui putem transmite datele?",
          content: (
            <>
              <p>
                Datele personale pot fi accesate sau transmise, în măsura
                necesară, către furnizori care ne ajută să operăm site-ul și să
                furnizăm serviciile solicitate.
              </p>

              <p>Exemple de categorii de destinatari:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Furnizori de găzduire web;</li>
                <li>Furnizori de servicii de email;</li>
                <li>Furnizori de servicii IT și mentenanță;</li>
                <li>
                  Furnizori de servicii de analiză a traficului, dacă sunt
                  utilizați;
                </li>
                <li>
                  Autorități publice, atunci când există o obligație legală.
                </li>
              </ul>

              <p>
                Nu vindem datele personale către terți în scopuri comerciale.
              </p>

              <p>
                [ADĂUGAȚI FURNIZORII REALI ȘI VERIFICAȚI DACĂ EXISTĂ TRANSFERURI
                DE DATE ÎN AFARA SPAȚIULUI ECONOMIC EUROPEAN.]
              </p>
            </>
          ),
        },
        {
          title: "6. Cât timp păstrăm datele?",
          content: (
            <p>
              Păstrăm datele personale numai atât timp cât este necesar pentru
              scopurile pentru care au fost colectate sau atât timp cât impun
              obligațiile legale aplicabile. Perioadele concrete de păstrare
              depind de tipul datelor, de natura solicitării și de eventualele
              relații contractuale. [DEFINIȚI PERIOADELE REALE DE PĂSTRARE.]
            </p>
          ),
        },
        {
          title: "7. Drepturile persoanelor vizate",
          content: (
            <>
              <p>
                În condițiile prevăzute de legislația privind protecția datelor,
                ai următoarele drepturi:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Dreptul de acces la date;</li>
                <li>Dreptul la rectificarea datelor;</li>
                <li>Dreptul la ștergerea datelor;</li>
                <li>Dreptul la restricționarea prelucrării;</li>
                <li>Dreptul la portabilitatea datelor, unde este aplicabil;</li>
                <li>Dreptul de opoziție;</li>
                <li>
                  Dreptul de a retrage consimțământul, atunci când prelucrarea
                  se bazează pe acesta;
                </li>
                <li>
                  Dreptul de a depune o plângere la autoritatea de supraveghere.
                </li>
              </ul>

              <p>
                Pentru exercitarea drepturilor, ne poți contacta la:{" "}
                <a
                  href="mailto:[EMAIL CONTACT]"
                  className="text-[#00c6ff] hover:underline"
                >
                  [EMAIL CONTACT]
                </a>
                .
              </p>

              <p>
                Autoritatea de supraveghere din România este Autoritatea
                Națională de Supraveghere a Prelucrării Datelor cu Caracter
                Personal (ANSPDCP):{" "}
                <a
                  href="https://www.dataprotection.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c6ff] hover:underline"
                >
                  www.dataprotection.ro
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "8. Securitatea datelor",
          content: (
            <p>
              Aplicăm măsuri tehnice și organizatorice adecvate pentru
              protejarea datelor împotriva accesului neautorizat, pierderii,
              modificării sau divulgării neautorizate. Nicio metodă de
              transmitere sau stocare electronică nu poate garanta însă
              securitate absolută.
            </p>
          ),
        },
        {
          title: "9. Modificarea politicii",
          content: (
            <p>
              Ne rezervăm dreptul de a actualiza această politică atunci când
              apar modificări ale serviciilor, ale modului de prelucrare a
              datelor sau ale legislației aplicabile. Versiunea actualizată va
              fi publicată pe această pagină.
            </p>
          ),
        },
      ]}
    />
  );
}

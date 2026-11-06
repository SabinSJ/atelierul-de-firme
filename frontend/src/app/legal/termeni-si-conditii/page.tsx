import LegalPage from "@/components/legal/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Termeni și condiții"
      subtitle="Te rugăm să citești acești termeni înainte de a utiliza site-ul Atelierul de Firme și de a solicita informații sau oferte pentru produsele și serviciile prezentate."
      lastUpdated="03.11.2026"
      sections={[
        {
          title: "1. Informații generale",
          content: (
            <>
              <p>Site-ul Atelierul de Firme este administrat de:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Denumire: [DENUMIREA FIRMEI]</li>
                <li>CUI: [CUI]</li>
                <li>Nr. Registrul Comerțului: [NUMĂR]</li>
                <li>Sediu: [ADRESA]</li>
                <li>Email: [EMAIL]</li>
                <li>Telefon: [TELEFON]</li>
              </ul>

              <p>
                Utilizarea site-ului implică acceptarea acestor termeni, în
                măsura în care aceștia sunt aplicabili activității desfășurate
                și relației dintre utilizator și operator.
              </p>
            </>
          ),
        },
        {
          title: "2. Scopul site-ului",
          content: (
            <p>
              Site-ul prezintă informații despre produsele și serviciile
              Atelierul de Firme, inclusiv materiale de prezentare, servicii de
              design, identitate vizuală și alte soluții destinate companiilor.
              Informațiile publicate au rol de prezentare și informare.
            </p>
          ),
        },
        {
          title: "3. Solicitări de ofertă",
          content: (
            <>
              <p>
                Utilizatorii pot transmite solicitări prin intermediul
                formularelor disponibile pe site.
              </p>

              <p>
                Trimiterea unei solicitări nu reprezintă automat încheierea unui
                contract și nu constituie o comandă confirmată.
              </p>

              <p>
                O eventuală colaborare va fi stabilită separat, prin comunicarea
                condițiilor comerciale, a serviciilor solicitate, a prețului și
                a termenelor de execuție.
              </p>
            </>
          ),
        },
        {
          title: "4. Produse și servicii personalizate",
          content: (
            <>
              <p>
                Produsele și materialele prezentate pot fi personalizate în
                funcție de cerințele fiecărui client.
              </p>

              <p>
                Caracteristicile finale, materialele, dimensiunile, finisajele,
                cantitățile și prețurile vor fi stabilite individual, în funcție
                de proiect.
              </p>

              <p>
                Imaginile de pe site au caracter ilustrativ și pot prezenta
                exemple de realizări sau propuneri vizuale.
              </p>
            </>
          ),
        },
        {
          title: "5. Prețuri și disponibilitate",
          content: (
            <p>
              Prețurile afișate, acolo unde există, trebuie interpretate conform
              informațiilor asociate produsului și ofertei comerciale.
              [PRECIZAȚI DACĂ PREȚURILE SUNT ESTIMATIVE, DACĂ INCLUDE TVA ȘI
              DACĂ SE APLICĂ ÎN FUNCȚIE DE CANTITATE.] Oferta finală va fi
              comunicată înainte de confirmarea unei eventuale colaborări.
            </p>
          ),
        },
        {
          title: "6. Obligațiile utilizatorului",
          content: (
            <>
              <p>Prin utilizarea site-ului, te obligi:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Să furnizezi informații corecte în formulare;</li>
                <li>Să nu utilizezi site-ul în scopuri ilegale;</li>
                <li>
                  Să nu încerci să afectezi funcționarea sau securitatea
                  site-ului;
                </li>
                <li>Să nu încarci fișiere care conțin programe malițioase;</li>
                <li>
                  Să ai dreptul de a utiliza materialele transmise, inclusiv
                  logo-uri și imagini.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "7. Proprietate intelectuală",
          content: (
            <p>
              Conținutul site-ului, inclusiv textele, elementele grafice,
              identitatea vizuală, imaginile și materialele originale, este
              protejat de legislația aplicabilă privind proprietatea
              intelectuală. Reproducerea sau utilizarea acestuia fără acordul
              titularului drepturilor este interzisă, cu excepția cazurilor
              permise de lege.
            </p>
          ),
        },
        {
          title: "8. Limitarea răspunderii",
          content: (
            <p>
              Depunem eforturi pentru a menține informațiile de pe site corecte
              și actualizate. Cu toate acestea, pot exista erori de redactare,
              întreruperi temporare sau informații care necesită confirmare.
              Informațiile de prezentare nu înlocuiesc oferta comercială
              individuală și documentele contractuale.
            </p>
          ),
        },
        {
          title: "9. Protecția datelor personale",
          content: (
            <p>
              Datele personale transmise prin intermediul site-ului sunt
              prelucrate conform Politicii de confidențialitate, disponibilă pe
              pagina dedicată.
            </p>
          ),
        },
        {
          title: "10. Modificarea termenilor",
          content: (
            <p>
              Acești termeni pot fi actualizați în funcție de modificările
              serviciilor sau ale legislației aplicabile. Versiunea publicată pe
              site este cea care trebuie consultată la momentul utilizării.
            </p>
          ),
        },
        {
          title: "11. Contact",
          content: (
            <p>
              Pentru întrebări referitoare la acești termeni, ne poți contacta
              la [EMAIL CONTACT] sau la [NUMĂR DE TELEFON].
            </p>
          ),
        },
      ]}
    />
  );
}

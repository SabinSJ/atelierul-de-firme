type LegalSection = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
}: Props) {
  return (
    <main className="min-h-screen bg-[#080d12] text-[#f4f8fb]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
            Atelierul de Firme
          </p>

          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h1>

          <p className="max-w-2xl text-sm leading-7 text-[#a9bac5]">
            {subtitle}
          </p>

          <p className="mt-6 text-xs text-[#71808b]">
            Ultima actualizare: {lastUpdated}
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-xl font-semibold text-[#f4f8fb]">
                {section.title}
              </h2>

              <div className="space-y-4 text-sm leading-7 text-[#a9bac5]">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

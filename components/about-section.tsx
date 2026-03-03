const pillars = [
  {
    number: "01",
    title: "Pensamento Estratégico",
    desc: "Cada projeto começa com uma análise cuidadosa. Identificamos oportunidades, definimos objetivos claros e traçamos o caminho mais eficiente para alcançá-los.",
  },
  {
    number: "02",
    title: "Colaboração Integrada",
    desc: "Reunimos habilidades complementares em uma equipe multidisciplinar. Cada membro contribui com sua especialidade para garantir a qualidade do resultado final.",
  },
  {
    number: "03",
    title: "Execução Contínua",
    desc: "Acreditamos no aprendizado pela prática. Nosso processo é iterativo: planejamos, executamos, avaliamos os resultados e aprimoramos constantemente.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
              Nossa Filosofia
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Compromisso com a excelência desde o início
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              A Auster foi fundada com a missão de provar que jovens estudantes podem entregar projetos de alto nível. Nosso método combina planejamento estratégico, colaboração e execução disciplinada para gerar resultados reais em cada iniciativa.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-5 lg:gap-8">
          <div className="relative overflow-hidden lg:col-span-2">
            <img
              src="/images/about-architecture.jpg"
              alt="Ambiente de trabalho profissional"
              width={600}
              height={800}
              className="h-80 w-full object-cover shadow-xl lg:h-full"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1 lg:gap-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className={`py-8 lg:py-10 ${
                  i < pillars.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-display text-[11px] font-semibold tracking-[0.3em] uppercase text-muted-foreground/60">
                  {pillar.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

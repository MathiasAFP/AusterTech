const team = [
  {
    initials: "SV",
    name: "Samuel Vortmann",
    role: "Gestão & Operações",
    bio: "Coordena prazos, organiza processos e mantém a equipe alinhada nos objetivos de cada projeto.",
  },
  {
    initials: "MP",
    name: "Matheus Polinski",
    role: "Desenvolvimento & Tecnologia",
    bio: "Lidera a parte técnica dos projetos, garantindo qualidade na implementação e funcionamento de cada solução.",
  },
  {
    initials: "FP",
    name: "Felipe Pertile",
    role: "Cofundador & Estratégia",
    bio: "Responsável pela visão geral dos projetos, trazendo novas ideias e direcionamento estratégico para a equipe.",
  },
  {
    initials: "MB",
    name: "Maria Bernardes",
    role: "Design & Comunicação",
    bio: "Cuida da identidade visual e da comunicação dos projetos, garantindo uma apresentação profissional e impactante.",
  },
  {
    initials: "NQ",
    name: "Nicoly Quechini",
    role: "Pesquisa & Conteúdo",
    bio: "Conduz pesquisas e análises que fundamentam as decisões do grupo, buscando sempre referências de qualidade.",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
            Equipe
          </p>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Os profissionais por trás da Auster
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nossa equipe reúne talentos complementares, combinando visão estratégica, competência técnica e criatividade para entregar projetos de excelência.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.initials}
              className="flex flex-col bg-card p-8 transition-colors hover:bg-accent lg:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-primary text-sm font-semibold tracking-[0.1em] text-primary-foreground">
                {member.initials}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-card-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground">
                {member.role}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

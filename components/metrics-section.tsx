const metrics = [
  { value: "5", label: "Membros Ativos", sub: "Equipe multidisciplinar" },
  { value: "3+", label: "Projetos Entregues", sub: "Em constante crescimento" },
  { value: "100%", label: "Produção Própria", sub: "Concepção à entrega" },
  { value: "2026", label: "Ano de Fundação", sub: "Trajetória em construção" },
]

export function MetricsSection() {
  return (
    <section className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
              Resultados
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance sm:text-4xl">
              Números que refletem nosso compromisso
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
              Cada indicador representa o esforço e a dedicação da nossa equipe. Valorizamos tanto o processo quanto o resultado final de cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-l-2 border-primary pl-6">
                <p className="font-display text-3xl font-semibold text-foreground lg:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

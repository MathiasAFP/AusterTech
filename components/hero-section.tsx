import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "5", label: "Integrantes" },
  { value: "3+", label: "Projetos Desenvolvidos" },
  { value: "2025", label: "Fundação" },
  { value: "100%", label: "Compromisso" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Arquitetura moderna ao entardecer"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-40 pb-20 lg:px-12 lg:pb-28">
        <div className="max-w-[720px]">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/60">
            {"Inovação & Tecnologia Estudantil"}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-primary-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvendo soluções com propósito e inovação
          </h1>
          <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-primary-foreground/70">
            A Auster é um grupo estudantil dedicado ao desenvolvimento de projetos em tecnologia, design e impacto social. Transformamos ideias em resultados concretos.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-primary-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary transition-all hover:bg-primary-foreground/90"
            >
              Ver Projetos
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 border border-primary-foreground/30 px-8 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary-foreground transition-all hover:border-primary-foreground/60"
            >
              Nossa Abordagem
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-primary-foreground/15 pt-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-primary-foreground lg:text-[40px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.1em] uppercase text-primary-foreground/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

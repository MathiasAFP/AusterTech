import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    image: "/images/portfolio-1.jpg",
    category: "Tecnologia",
    title: "Plataforma de Comunicação",
    desc: "Sistema web desenvolvido para otimizar a comunicação entre alunos e corpo docente, com foco em acessibilidade e eficiência.",
  },
  {
    image: "/images/portfolio-2.jpg",
    category: "Sustentabilidade",
    title: "EcoConsciente",
    desc: "Aplicativo de conscientização ambiental, promovendo práticas sustentáveis na comunidade escolar através de dados e engajamento.",
  },
  {
    image: "/images/portfolio-3.jpg",
    category: "Branding",
    title: "Identidade Auster",
    desc: "Desenvolvimento completo da identidade visual da marca, incluindo logotipo, sistema de cores e materiais institucionais.",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/50">
              Portfólio
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              Projetos que geram impacto real
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 self-start text-[11px] font-semibold tracking-[0.15em] uppercase text-primary-foreground/70 transition-colors hover:text-primary-foreground md:self-auto"
          >
            Ver Todos os Projetos
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div className="mt-6">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/50">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-primary-foreground transition-colors group-hover:text-primary-foreground/80">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60 text-pretty">
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

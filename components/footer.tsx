import Image from "next/image"

const companyLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Equipe", href: "#leadership" },
  { label: "Contato", href: "#contact" },
]

const teamMembers = [
  "Samuel Vortmann",
  "Matheus Polinski",
  "Felipe Pertile",
  "Maria Bernardes",
  "Nicoly Quechini",
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logo Auster"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-xl font-semibold tracking-[0.2em] uppercase text-foreground">
                Auster
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Grupo estudantil dedicado ao desenvolvimento de projetos de tecnologia, design e impacto social com excelência e propósito.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">
              Empresa
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">
              Equipe
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {teamMembers.map((name) => (
                <li key={name}>
                  <a
                    href="#leadership"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">
              Redes
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Auster. Todos os direitos reservados."}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

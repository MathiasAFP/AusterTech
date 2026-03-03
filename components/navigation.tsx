"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Equipe", href: "#leadership" },
  { label: "Contato", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Auster logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl font-semibold tracking-[0.2em] uppercase text-primary-foreground">
            Auster
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium tracking-[0.1em] uppercase text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-primary-foreground/30 px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary md:inline-flex"
        >
          Entre em Contato
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-xl px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[13px] font-medium tracking-[0.1em] uppercase text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 border border-primary-foreground/30 px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
          >
            Entre em Contato
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </header>
  )
}

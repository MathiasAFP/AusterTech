"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <section id="contact" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-foreground/50">
              Contato
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              Vamos conversar sobre como colaborar
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/60">
              Se você tem interesse em parcerias, colaborações ou deseja saber mais sobre nossos projetos, entre em contato. Estamos abertos a novas oportunidades.
            </p>

            <div className="mt-12 flex flex-col gap-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/40">
                  Localização
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  Ensino Médio
                  <br />
                  Instituição Auster
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/40">
                  E-mail Institucional
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  contato@auster.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.1em] uppercase text-primary-foreground/50"
                  >
                    Nome
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.1em] uppercase text-primary-foreground/50"
                  >
                    Sobrenome
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Seu sobrenome"
                    className="w-full border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.1em] uppercase text-primary-foreground/50"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.1em] uppercase text-primary-foreground/50"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full resize-none border-0 border-b border-primary-foreground/20 bg-transparent px-0 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="mt-4 inline-flex items-center gap-3 self-start bg-primary-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary transition-all hover:bg-primary-foreground/90 disabled:opacity-70 disabled:pointer-events-none"
              >
                {submitted ? "Enviado!" : "Enviar Mensagem"}
                {!submitted && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

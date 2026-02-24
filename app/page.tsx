import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { MetricsSection } from "@/components/metrics-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <MetricsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

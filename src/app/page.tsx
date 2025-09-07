import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { ServicesPreviewSection } from "@/components/sections/services-preview-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaBannerSection } from "@/components/sections/cta-banner-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesPreviewSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </div>
  )
}

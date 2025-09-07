"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const scrollToGenerator = () => {
    const element = document.getElementById("generator-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pulse-glow"></div>

      {/* Content */}
      <div className="responsive-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/40 bg-primary/10 text-foreground text-xs md:text-sm font-medium">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            AI-Powered Freelance Automation
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
            <span className="text-foreground">
              AI Agents for <span className="text-primary">Freelancers</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto px-2">
            Automate client communication, generate proposals instantly, and deliver projects on time with intelligent
            freelance agents.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center px-2">
            <Button
              size="lg"
              className="text-base md:text-lg px-4 md:px-6 py-3 md:py-4 group w-full sm:w-auto"
              onClick={scrollToGenerator}
            >
              Try Generator
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-primary/20 hover:border-primary bg-transparent w-full sm:w-auto"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-border/20 px-2">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">10x</div>
              <div className="text-sm md:text-base text-muted-foreground">Faster Proposals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm md:text-base text-muted-foreground">Client Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">95%</div>
              <div className="text-sm md:text-base text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

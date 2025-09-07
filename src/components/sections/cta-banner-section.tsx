import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaBannerSection() {
  return (
    <section className="py-8">
      <div className="container px-2">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse-glow"></div>
          <div className="relative px-4 py-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-3">
              Ready to revolutionize your <span className="text-primary">freelancing?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
              Join thousands of freelancers who have already transformed their workflow with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="text-lg px-6 py-4 group" asChild>
                <Link href="/pricing">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-6 py-4 border-primary/20 hover:border-primary bg-transparent"
                asChild
              >
                <Link href="/generator">Try Generator</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

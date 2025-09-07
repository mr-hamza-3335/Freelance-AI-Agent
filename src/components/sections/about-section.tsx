import { Card } from "@/components/ui/card"
import { Bot, Zap, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-8 bg-card/20">
      <div className="container px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              About <span className="text-primary">Freelance AI Agent</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform revolutionizes the freelancing industry by providing intelligent AI agents that handle the
              most time-consuming aspects of freelance work. From client communication to proposal generation, we
              automate your workflow so you can focus on what you do best.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Smart AI</div>
                  <div className="text-xs text-muted-foreground">Advanced algorithms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Lightning Fast</div>
                  <div className="text-xs text-muted-foreground">Instant results</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Precise</div>
                  <div className="text-xs text-muted-foreground">Accurate outputs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <Card className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-3">
                <div className="h-3 bg-primary/20 rounded animate-pulse"></div>
                <div className="h-3 bg-primary/30 rounded animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="h-3 bg-primary/20 rounded animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="h-6 bg-primary/40 rounded animate-pulse" style={{ animationDelay: "1.5s" }}></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

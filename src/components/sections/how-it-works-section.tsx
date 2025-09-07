import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, Clock } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Client Interaction Agent",
      description:
        "Automatically handles client communications, responds to inquiries, and maintains professional relationships 24/7.",
    },
    {
      icon: FileText,
      title: "Proposal Agent",
      description:
        "Generates compelling, customized proposals based on client requirements and your expertise in seconds.",
    },
    {
      icon: Clock,
      title: "Deadline Agent",
      description: "Manages project timelines, sends reminders, and ensures you never miss a deadline again.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Three powerful AI agents working together to transform your freelancing workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:border-primary/50 transition-all duration-300 glow-effect"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </CardContent>
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

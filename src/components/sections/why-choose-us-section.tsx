import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, TrendingUp, MessageCircle, Workflow } from "lucide-react"

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce administrative work by 80% and focus on delivering quality projects.",
    },
    {
      icon: TrendingUp,
      title: "Win More Projects",
      description: "Professional proposals and quick responses increase your success rate.",
    },
    {
      icon: MessageCircle,
      title: "Professional Communication",
      description: "AI-powered responses maintain consistent, professional client relationships.",
    },
    {
      icon: Workflow,
      title: "AI Workflow",
      description: "Seamlessly integrate AI agents into your existing freelance workflow.",
    },
  ]

  return (
    <section className="py-24 bg-card/20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the future of freelancing with our intelligent automation platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center group hover:border-primary/50 transition-all duration-300 float-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-effect">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

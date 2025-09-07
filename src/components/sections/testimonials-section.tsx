import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Web Developer",
      content:
        "Freelance AI Agent transformed my business. I now spend 70% less time on admin work and can focus on actual development.",
      rating: 5,
    },
    {
      name: "Muhammad Ali",
      role: "Graphic Designer",
      content:
        "The proposal generator is incredible. It creates professional proposals that win me more clients than ever before.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      role: "Content Writer",
      content:
        "Client communication has never been easier. The AI handles inquiries professionally while I focus on writing.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-card/20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            What Freelancers <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of successful freelancers who trust our AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-all duration-300 glow-effect">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

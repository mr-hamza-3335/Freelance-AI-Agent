import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, FileText, Clock, Workflow, Check, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

export function ServicesPreviewSection() {
  const services = [
    {
      icon: MessageSquare,
      title: "Client Communication AI",
      description: "Automated client interactions and professional responses",
      price: "PKR 1,500",
      period: "/month",
      slug: "client-communication-ai",
      features: [
        "24/7 automated responses",
        "Professional tone matching",
        "Multi-language support",
        "Client sentiment analysis",
      ],
      benefits: [
        "Save 5+ hours daily",
        "Never miss client messages",
        "Maintain professional image",
        "Increase client satisfaction",
      ],
      popular: false,
    },
    {
      icon: FileText,
      title: "Proposal Generation AI",
      description: "Instant, customized proposals for any project type",
      price: "PKR 1,000",
      period: "/month",
      slug: "proposal-generation-ai",
      features: [
        "Instant proposal generation",
        "Custom templates library",
        "Pricing optimization",
        "Success rate tracking",
      ],
      benefits: ["10x faster proposals", "Higher win rates", "Professional formatting", "Competitive pricing insights"],
      popular: true,
    },
    {
      icon: Clock,
      title: "Project Deadline Manager",
      description: "Smart timeline management and deadline tracking",
      price: "PKR 1,200",
      period: "/month",
      slug: "project-deadline-manager",
      features: ["Smart deadline tracking", "Automated reminders", "Progress monitoring", "Client updates"],
      benefits: ["Never miss deadlines", "Better time management", "Improved client trust", "Stress-free workflow"],
      popular: false,
    },
    {
      icon: Workflow,
      title: "Custom AI Workflow",
      description: "Tailored automation solutions for your specific needs",
      price: "PKR 2,500",
      period: "/month",
      slug: "custom-ai-workflow",
      features: ["Custom automation flows", "Integration with tools", "Personalized AI training", "Priority support"],
      benefits: ["Complete automation", "Tailored to your needs", "Maximum efficiency", "Competitive advantage"],
      popular: false,
    },
  ]

  return (
    <section id="services-preview" className="py-16 md:py-24">
      <div className="responsive-container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/40 bg-primary/10 text-foreground text-xs md:text-sm font-medium glow-effect-hover">
            <Star className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            Complete AI Solutions
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
            Our <span className="text-primary">AI Services</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Comprehensive AI-powered tools designed specifically for freelancers to automate workflows and boost
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:border-primary/50 transition-all duration-300 h-full flex flex-col relative ${
                service.popular ? "border-primary/30 bg-primary/5" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center flex-shrink-0 pb-4">
                <div className="mx-auto w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-effect-hover">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary">{service.price}</span>
                  <span className="text-muted-foreground text-sm">{service.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  <Button asChild className="w-full glow-effect-hover" size="lg">
                    <Link href={`/services/${service.slug}`}>Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/40 mb-12">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-xl md:text-2xl font-bold">
              How Our <span className="text-primary">AI Agents</span> Work Together
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              A complete ecosystem of AI agents that seamlessly integrate to transform your freelancing workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">1. Client Interaction</h4>
                <p className="text-sm text-muted-foreground">
                  AI handles initial client communications, qualifies leads, and schedules meetings automatically
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Proposal Generation</h4>
                <p className="text-sm text-muted-foreground">
                  Creates professional proposals with optimal pricing based on project requirements and market data
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Project Management</h4>
                <p className="text-sm text-muted-foreground">
                  Tracks deadlines, manages timelines, and keeps clients updated on progress automatically
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              Ready to <span className="text-primary">Transform</span> Your Freelancing?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join thousands of freelancers who have automated their workflow and increased their income by 300%
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="glow-effect-hover w-full sm:w-auto">
              <Link href="/services">View All Services</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/20 hover:border-primary bg-transparent w-full sm:w-auto"
            >
              <Link href="/pricing">See Pricing Plans</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

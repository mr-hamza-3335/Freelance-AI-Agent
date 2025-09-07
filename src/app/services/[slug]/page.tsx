import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  FileText,
  Clock,
  Workflow,
  Bot,
  Mic,
  Package,
  Check,
  Star,
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
  Heart,
  Timer,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: MessageSquare,
      title: "Client Communication AI",
      description: "24/7 automated client support with professional responses",
      price: "PKR 1,500",
      period: "/month",
      slug: "client-communication-ai",
      features: ["24/7 Support", "Professional Tone", "Multi-language", "Easy Integration"],
      benefits: ["Save 5+ hours daily", "Never miss messages", "Professional responses", "Happy clients"],
      stats: { users: "2,500+", satisfaction: "98%", timeSaved: "5hrs" },
      popular: false,
    },
    {
      icon: FileText,
      title: "Proposal Generation AI",
      description: "Create winning proposals instantly with AI power",
      price: "PKR 1,000",
      period: "/month",
      slug: "proposal-generation-ai",
      features: ["Instant Creation", "Custom Templates", "High Win Rate", "Multiple Formats"],
      benefits: ["10x faster proposals", "60% higher win rate", "Professional format", "Smart pricing"],
      stats: { users: "5,000+", satisfaction: "99%", timeSaved: "3hrs" },
      popular: true,
    },
    {
      icon: Clock,
      title: "Project Deadline Manager",
      description: "Smart timeline management and automated reminders",
      price: "PKR 1,200",
      period: "/month",
      slug: "project-deadline-manager",
      features: ["Smart Timelines", "Auto Reminders", "Progress Track", "Client Updates"],
      benefits: ["Never miss deadlines", "85% better delivery", "70% fewer complaints", "Better work-life balance"],
      stats: { users: "3,200+", satisfaction: "97%", timeSaved: "2hrs" },
      popular: false,
    },
    {
      icon: Workflow,
      title: "Custom AI Workflow",
      description: "Personalized automation for your unique needs",
      price: "PKR 2,500",
      period: "/month",
      slug: "custom-ai-workflow",
      features: ["Custom Solutions", "Personal Training", "Priority Support", "Full Integration"],
      benefits: ["Complete automation", "Tailored for you", "Maximum efficiency", "Competitive edge"],
      stats: { users: "800+", satisfaction: "100%", timeSaved: "8hrs" },
      popular: false,
    },
  ]

  const comingSoon = [
    {
      icon: Bot,
      title: "Auto-Bidder Agent",
      description: "Automatically bid on projects with smart analysis",
      year: "2027",
      features: ["Smart Matching", "Auto Bidding", "Market Analysis", "Success Tracking"],
    },
    {
      icon: Mic,
      title: "Voice-to-Proposal",
      description: "Speak your ideas, get professional proposals",
      year: "2026",
      features: ["Voice Recognition", "AI Enhancement", "Professional Format", "Multi-language"],
    },
    {
      icon: Package,
      title: "Multi-Agent SDKs",
      description: "Developer tools for custom AI integrations",
      year: "2027",
      features: ["Developer APIs", "Custom Integration", "Workflow Builder", "Enterprise Support"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Star className="h-3 w-3 mr-1" />
              AI Solutions for Freelancers
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary">AI Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Choose from our AI-powered tools to boost your freelancing income by 300%
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-6">
              <Card className="p-3 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Users</div>
                </div>
              </Card>
              <Card className="p-3 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">98.5%</div>
                  <div className="text-xs text-muted-foreground">Happy</div>
                </div>
              </Card>
              <Card className="p-3 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">300%</div>
                  <div className="text-xs text-muted-foreground">Income</div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Available <span className="text-primary">Services</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Professional AI tools designed specifically for freelancers
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 ${
                      service.popular ? "border-primary/30 bg-primary/5" : ""
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-6">
                        <Badge className="bg-primary text-primary-foreground text-xs px-3 py-1">Most Popular</Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-primary">{service.price}</span>
                            <span className="text-sm text-muted-foreground">{service.period}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="text-center">
                          <Users className="h-4 w-4 text-primary mx-auto mb-1" />
                          <div className="text-xs font-medium">{service.stats.users}</div>
                        </div>
                        <div className="text-center">
                          <Heart className="h-4 w-4 text-primary mx-auto mb-1" />
                          <div className="text-xs font-medium">{service.stats.satisfaction}</div>
                        </div>
                        <div className="text-center">
                          <Timer className="h-4 w-4 text-primary mx-auto mb-1" />
                          <div className="text-xs font-medium">{service.stats.timeSaved}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                          <Zap className="h-3 w-3 text-primary" />
                          Features
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.map((feature, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-primary" />
                          Benefits
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-1 text-xs">
                              <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full hover:bg-primary/90 transition-colors" size="sm">
                        <Link href={`/services/${service.slug}`}>
                          Get Started
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Coming <span className="text-primary">Soon</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Exciting new features in development for the future
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {comingSoon.map((service, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="border-primary/50 text-primary text-xs px-2 py-1">
                          {service.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardHeader>

                    <CardContent>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Features:</h4>
                        <div className="space-y-1">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="max-w-2xl mx-auto space-y-4">
                  <h3 className="text-2xl font-bold">
                    Ready to <span className="text-primary">Transform</span> Your Work?
                  </h3>
                  <p className="text-muted-foreground">
                    Join thousands of freelancers who increased their income by 300%
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg" className="hover:bg-primary/90 transition-colors" asChild>
                      <Link href="/pricing">
                        View Pricing
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary bg-transparent"
                      asChild
                    >
                      <Link href="/generator">Try Free</Link>
                    </Button>
                  </div>

                  <div className="flex justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      30-day trial
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      No setup fees
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      Cancel anytime
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

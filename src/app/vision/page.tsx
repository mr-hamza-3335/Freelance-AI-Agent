import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Bot, Mic, Package, CreditCard, Users, Globe, Zap, Target, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function VisionPage() {
  const roadmap2026 = [
    {
      icon: CreditCard,
      title: "Raast-Ready Escrow System",
      description:
        "Secure payment processing integrated with Pakistan's national payment system for safe transactions.",
      status: "planned",
    },
    {
      icon: Mic,
      title: "Voice-to-Proposal Technology",
      description:
        "Convert voice recordings directly into professional written proposals using advanced speech recognition.",
      status: "planned",
    },
    {
      icon: Users,
      title: "AI Marketplace Matching",
      description:
        "Intelligent matching system that connects freelancers with ideal clients based on skills and preferences.",
      status: "planned",
    },
  ]

  const roadmap2027 = [
    {
      icon: Bot,
      title: "Auto-Bidder Agent",
      description:
        "Automated bidding system that finds and bids on relevant projects with intelligent proposal generation.",
      status: "future",
    },
    {
      icon: Package,
      title: "Multi-Agent Marketplace",
      description:
        "Comprehensive marketplace where developers can create and sell custom AI agents to other freelancers.",
      status: "future",
    },
    {
      icon: Globe,
      title: "Cross-Platform SDKs",
      description: "Developer tools and SDKs for building custom AI agent integrations across multiple platforms.",
      status: "future",
    },
  ]

  const visionPillars = [
    {
      icon: Zap,
      title: "Complete Automation",
      description:
        "A future where freelancers can automate 80% of administrative tasks and focus purely on creative work.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description:
        "Making advanced AI tools accessible to freelancers worldwide, regardless of their location or budget.",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description:
        "Building a thriving ecosystem where freelancers can share, customize, and improve AI agents together.",
    },
    {
      icon: Target,
      title: "Industry Leadership",
      description: "Becoming the global standard for AI-powered freelance automation and workflow optimization.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              Our <span className="text-primary">Vision</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Shaping the future of freelancing through intelligent automation and AI-powered tools that empower
              creators worldwide.
            </p>
          </div>

          {/* Vision Statement */}
          <Card className="mb-16 border-primary/20 glow-effect">
            <CardContent className="p-8 text-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">The Future of Freelancing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We envision a world where freelancers are liberated from repetitive administrative tasks and can focus
                entirely on their creative and technical expertise. Through advanced AI agents, we're building an
                ecosystem that handles client communication, project management, proposal generation, and business
                operations automatically.
              </p>
            </CardContent>
          </Card>

          {/* Vision Pillars */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Vision Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionPillars.map((pillar, index) => {
                const PillarIcon = pillar.icon
                return (
                  <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-effect">
                          <PillarIcon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{pillar.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 2026 Roadmap */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">2026 Roadmap</h2>
              <Badge className="bg-primary/20 text-primary border-primary/50">Coming Soon</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmap2026.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <Card key={index} className="group hover:border-primary/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-effect">
                        <ItemIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 2027 Roadmap */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">2027 Roadmap</h2>
              <Badge variant="outline" className="border-primary/50 text-primary">
                Future Vision
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmap2027.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <Card key={index} className="group hover:border-primary/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-effect">
                        <ItemIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Impact Goals */}
          <Card className="mb-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Our Impact Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Freelancers Empowered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Time Saved on Admin Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Countries Reached</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Vision */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Technology Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Advanced AI Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Leveraging cutting-edge machine learning models, natural language processing, and computer vision to
                    create truly intelligent agents that understand context and nuance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Seamless Ecosystem</h4>
                  <p className="text-muted-foreground text-sm">
                    Building interconnected tools that work together seamlessly, from initial client contact to project
                    delivery and payment processing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    AI agents that learn from each interaction, becoming more effective and personalized over time while
                    maintaining privacy and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Be Part of the Future</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us in revolutionizing the freelancing industry. Start your journey with our AI agents today and be
                part of shaping the future of work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-effect group" asChild>
                  <Link href="/pricing">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary bg-transparent"
                  asChild
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

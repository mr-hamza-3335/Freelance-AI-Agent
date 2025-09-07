import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Target, Heart, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We push the boundaries of AI technology to create solutions that truly transform freelancing workflows.",
    },
    {
      icon: Heart,
      title: "Freelancer-Focused",
      description: "Every feature is designed with freelancers in mind, addressing real pain points and challenges.",
    },
    {
      icon: Zap,
      title: "Efficiency Driven",
      description: "We believe in automation that saves time without sacrificing quality or personal touch.",
    },
    {
      icon: Globe,
      title: "Accessible to All",
      description: "Our tools are designed to be affordable and accessible to freelancers worldwide.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "50,000+", label: "Proposals Generated" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" },
  ]

  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description:
        "Ameer Hamza started developing AI solutions for freelancers while studying at Governor Sindh House.",
    },
    {
      year: "2024",
      title: "First AI Agent",
      description: "Launched the Proposal Generation AI, helping freelancers create professional proposals instantly.",
    },
    {
      year: "2025",
      title: "Platform Launch",
      description: "Released the complete Freelance AI Agent platform with multiple specialized agents.",
    },
    {
      year: "2025",
      title: "Growing Community",
      description: "Thousands of freelancers now use our AI agents to automate their workflows and win more projects.",
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
              About <span className="text-primary">Freelance AI Agent</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Empowering freelancers worldwide with intelligent automation tools that transform how they work,
              communicate, and succeed.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 border-primary/20 glow-effect">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                To revolutionize the freelancing industry by providing intelligent AI agents that automate repetitive
                tasks, enhance client communication, and help freelancers focus on what they do best - delivering
                exceptional work.
              </p>
            </CardContent>
          </Card>

          {/* Founder Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Meet the Founder</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center glow-effect">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Ameer Hamza</h3>
                    <Badge variant="outline" className="mb-4">
                      Student at Governor Sindh House, Agentic AI
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      A passionate AI enthusiast and student specializing in Agentic AI at Governor Sindh House. Ameer
                      recognized the challenges freelancers face and dedicated himself to creating AI solutions that
                      make freelancing more efficient and profitable.
                    </p>
                    <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                      <p>Email: ameerhamza94572@gmail.com</p>
                      <p>Phone: 03252106239</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const ValueIcon = value.icon
                return (
                  <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-effect">
                          <ValueIcon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-effect flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Freelancing?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of freelancers who have already revolutionized their workflow with our AI agents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-effect" asChild>
                  <Link href="/pricing">Get Started Today</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary bg-transparent"
                  asChild
                >
                  <Link href="/vision">View Our Vision</Link>
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

"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Copy, Loader2, Sparkles, MessageSquare, Calendar, Target } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function GeneratorPage() {
  const [input, setInput] = useState("")
  const [type, setType] = useState("")
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!input.trim() || !type) {
      toast({
        title: "Missing Information",
        description: "Please provide input text and select a project type.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/generate-proposal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input, type }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate proposal")
      }

      const data = await response.json()
      setOutput(data.proposal || "Generated proposal content would appear here...")
    } catch (error) {
      // Fallback demo content when API is not available
      const demoProposal = `# Project Proposal for ${type} Development

## Executive Summary
Thank you for considering our services for your ${type.toLowerCase()} project. Based on your requirements: "${input}", we have crafted a comprehensive solution that addresses your specific needs.

## Project Scope
- Custom ${type.toLowerCase()} development tailored to your requirements
- Modern, responsive design with optimal user experience
- Integration of advanced features and functionality
- Quality assurance and testing throughout development

## Timeline & Deliverables
- **Week 1-2**: Project planning and design mockups
- **Week 3-4**: Core development and feature implementation
- **Week 5**: Testing, optimization, and final delivery

## Investment
Based on the project complexity and requirements, our investment for this project is competitive and includes:
- Complete development as per specifications
- 30 days of post-launch support
- Source code and documentation

## Why Choose Us
- 5+ years of experience in ${type.toLowerCase()} development
- Proven track record with 95% client satisfaction
- Modern development practices and clean code
- Ongoing support and maintenance options

We're excited to bring your vision to life. Let's schedule a call to discuss the details further.

Best regards,
Your AI-Powered Freelance Team`

      setOutput(demoProposal)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      toast({
        title: "Copied!",
        description: "Proposal copied to clipboard.",
      })
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      })
    }
  }

  const services = [
    {
      name: "Proposal Generator",
      icon: Sparkles,
      description: "AI-powered proposal creation",
      benefits: ["Professional formatting", "Industry-specific templates", "Instant generation"],
      usage: "Enter project details and get a complete proposal in seconds",
    },
    {
      name: "Client Communication",
      icon: MessageSquare,
      description: "Automated client messaging",
      benefits: ["Follow-up automation", "Professional responses", "Multi-language support"],
      usage: "Set up automated responses and follow-ups for better client relationships",
    },
    {
      name: "Project Deadline Manager",
      icon: Calendar,
      description: "Smart deadline tracking",
      benefits: ["Automatic reminders", "Progress tracking", "Client updates"],
      usage: "Track all your project deadlines and never miss a delivery date",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI Proposal Generator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Generate Professional <span className="text-primary">Proposals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Transform your project requirements into compelling, professional proposals in seconds using our advanced
              AI technology
            </p>
          </div>

          {/* Services Guide Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">How Our AI Services Help You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const ServiceIcon = service.icon
                return (
                  <Card
                    key={index}
                    className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ServiceIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-primary">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-primary">How to Use:</h4>
                        <p className="text-sm text-muted-foreground">{service.usage}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Generator Interface */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">AI Proposal Generator</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="h-fit border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Project Details
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Provide your project information to generate a professional proposal
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label className="text-base font-medium">Project Type</label>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger className="border-2 border-muted bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 h-12">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Web Development">🌐 Web Development</SelectItem>
                        <SelectItem value="Mobile App">📱 Mobile App</SelectItem>
                        <SelectItem value="E-commerce">🛒 E-commerce</SelectItem>
                        <SelectItem value="Business">💼 Business</SelectItem>
                        <SelectItem value="Startup">🚀 Startup</SelectItem>
                        <SelectItem value="Tech">💻 Tech</SelectItem>
                        <SelectItem value="Design">🎨 Design</SelectItem>
                        <SelectItem value="Marketing">📈 Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Input Textarea */}
                  <div className="space-y-2">
                    <label className="text-base font-medium">Project Requirements</label>
                    <Textarea
                      placeholder="Describe your project requirements in detail:
• What type of project is this?
• What are your main goals?
• What features do you need?
• What's your timeline?
• Any specific requirements or preferences?"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="min-h-[200px] border-2 border-muted bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                      style={{
                        caretColor: "white",
                      }}
                    />
                  </div>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                    disabled={isLoading || !input.trim() || !type}
                    className="w-full h-12 text-lg font-medium"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Generating Your Proposal...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate Professional Proposal
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card className="h-fit border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Copy className="h-5 w-5 text-primary" />
                        Generated Proposal
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Your AI-generated professional proposal</p>
                    </div>
                    {output && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="bg-transparent border-primary/20 hover:border-primary"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {output ? (
                    <div className="max-h-[500px] overflow-y-auto bg-muted/10 rounded-lg p-6 border border-border/40">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">{output}</pre>
                    </div>
                  ) : (
                    <div className="h-[500px] flex items-center justify-center bg-muted/10 rounded-lg border border-border/40">
                      <div className="text-center space-y-4">
                        <Sparkles className="h-12 w-12 text-muted-foreground mx-auto" />
                        <div>
                          <p className="text-muted-foreground font-medium">Your generated proposal will appear here</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Fill in the project details and click generate
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Platform Integration Guide */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">How to Buy & Integrate AI Agents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-500">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Choose Your Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Select from Basic, Standard, Premium, or Enterprise plans based on your needs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-500">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Get API Keys</h3>
                  <p className="text-sm text-muted-foreground">
                    After purchase, receive your unique API keys and integration tokens
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-500">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Easy Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our SDKs for React, Node.js, Python, or simple REST API calls
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-500">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Start Automating</h3>
                  <p className="text-sm text-muted-foreground">
                    Begin using AI agents in your apps, websites, or workflows immediately
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Supported Platforms & Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <Badge variant="outline" className="justify-center py-2">
                      🌐 Web Apps
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      📱 Mobile Apps
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      💬 WhatsApp
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      📸 Instagram
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      ⚛️ React/Next.js
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      🟢 Node.js
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      🐍 Python
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      🔗 REST API
                    </Badge>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="/integration-guide">📚 View Integration Guide</a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary bg-transparent"
                      asChild
                    >
                      <a href="/marketplace">🤖 Browse AI Agents</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Success Stats */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Why Freelancers Choose Our AI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Faster Proposal Creation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-muted-foreground">Higher Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Hours Saved Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

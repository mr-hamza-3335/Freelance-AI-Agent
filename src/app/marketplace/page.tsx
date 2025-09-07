"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  FileText,
  Clock,
  Workflow,
  Bot,
  Mic,
  Package,
  Search,
  Filter,
  Star,
  ShoppingCart,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { toast } = useToast()

  const agents = [
    {
      id: 1,
      icon: MessageSquare,
      title: "Client Communication AI",
      description: "Automated client interactions and professional responses available 24/7",
      price: "PKR 1,500",
      rating: 4.9,
      reviews: 234,
      category: "communication",
      features: ["24/7 Support", "Multi-language", "Professional Templates"],
      popular: true,
    },
    {
      id: 2,
      icon: FileText,
      title: "Proposal Generation AI",
      description: "Instant, customized proposals for any project type with high conversion rates",
      price: "PKR 1,000",
      rating: 4.8,
      reviews: 189,
      category: "proposals",
      features: ["Instant Generation", "Custom Templates", "High Conversion"],
      popular: true,
    },
    {
      id: 3,
      icon: Clock,
      title: "Project Deadline Manager",
      description: "Smart timeline management and deadline tracking with automated reminders",
      price: "PKR 1,200",
      rating: 4.7,
      reviews: 156,
      category: "management",
      features: ["Timeline Management", "Automated Reminders", "Progress Tracking"],
      popular: false,
    },
    {
      id: 4,
      icon: Workflow,
      title: "Custom AI Workflow",
      description: "Tailored automation solutions designed specifically for your unique workflow",
      price: "PKR 2,500",
      rating: 4.9,
      reviews: 98,
      category: "automation",
      features: ["Custom Solutions", "Workflow Integration", "Personal Training"],
      popular: false,
    },
    {
      id: 5,
      icon: Bot,
      title: "Social Media Manager AI",
      description: "Automate your social media presence with intelligent content scheduling",
      price: "PKR 1,800",
      rating: 4.6,
      reviews: 142,
      category: "marketing",
      features: ["Content Scheduling", "Engagement Tracking", "Multi-platform"],
      popular: false,
    },
    {
      id: 6,
      icon: Mic,
      title: "Voice Assistant AI",
      description: "Convert voice commands into actionable tasks and responses",
      price: "PKR 2,200",
      rating: 4.5,
      reviews: 87,
      category: "automation",
      features: ["Voice Recognition", "Task Automation", "Natural Language"],
      popular: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Agents" },
    { id: "communication", label: "Communication" },
    { id: "proposals", label: "Proposals" },
    { id: "management", label: "Management" },
    { id: "automation", label: "Automation" },
    { id: "marketing", label: "Marketing" },
  ]

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePurchase = (agent: (typeof agents)[0]) => {
    toast({
      title: "Purchase Successful!",
      description: `You've successfully purchased ${agent.title}`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              AI Agent <span className="text-primary">Marketplace</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Buy your own AI agents and integrate them into your workflow. Choose from our collection of specialized
              automation tools.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-input bg-input focus:border-primary focus:ring-primary"
                style={{ caretColor: "white" }}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "glow-effect"
                      : "border-primary/20 hover:border-primary bg-transparent"
                  }
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => {
              const AgentIcon = agent.icon
              return (
                <Card
                  key={agent.id}
                  className="group hover:border-primary/50 transition-all duration-300 h-full flex flex-col relative"
                >
                  {agent.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-effect">
                          <AgentIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{agent.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="text-sm font-medium">{agent.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">({agent.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{agent.description}</p>

                    <div className="space-y-3 mb-4 flex-grow">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.features.map((feature, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-2xl font-bold text-primary">{agent.price}</div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="glow-effect">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Buy Agent
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Purchase {agent.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                              <h4 className="font-bold text-lg mb-2">Purchase Successful!</h4>
                              <p className="text-muted-foreground mb-4">Your integration key:</p>
                              <Badge variant="outline" className="text-primary border-primary/50 px-4 py-2">
                                ai_agent_key_{agent.id}23456abcdef
                              </Badge>
                              <p className="text-sm text-muted-foreground mt-4">
                                Use this key to integrate the agent into your workflow. Check our integration guide for
                                setup instructions.
                              </p>
                              <Button className="mt-4 glow-effect" onClick={() => handlePurchase(agent)}>
                                Continue to Integration
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* No Results */}
          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No agents found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Agent?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? We can build custom AI agents tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="glow-effect" asChild>
                    <a href="mailto:custom@freelanceaiagent.com">Request Custom Agent</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary bg-transparent"
                    asChild
                  >
                    <a href="/integration-guide">View Integration Guide</a>
                  </Button>
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

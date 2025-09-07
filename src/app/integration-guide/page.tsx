"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, MessageCircle, Instagram, Code, Copy, ExternalLink, CheckCircle } from "lucide-react"

export default function IntegrationGuidePage() {
  const integrations = [
    {
      icon: Globe,
      title: "Website Integration",
      description: "Embed AI agents directly into your website",
      difficulty: "Easy",
      time: "5 minutes",
      steps: [
        "Copy your integration key from the marketplace",
        "Add the script tag to your website's <head> section",
        "Initialize the agent with your configuration",
        "Test the integration and customize as needed",
      ],
      code: `<!-- Add to your website's <head> section -->
<script src="https://cdn.freelanceaiagent.com/widget.js"></script>
<script>
  FreelanceAI.init({
    apiKey: 'your_integration_key_here',
    position: 'bottom-right',
    theme: 'dark'
  });
</script>`,
    },
    {
      icon: Smartphone,
      title: "Mobile SDK",
      description: "Integrate AI agents into your mobile applications",
      difficulty: "Medium",
      time: "15 minutes",
      steps: [
        "Install the FreelanceAI SDK via npm or yarn",
        "Import and configure the SDK in your app",
        "Set up your integration key and preferences",
        "Implement agent calls in your application logic",
      ],
      code: `// Install the SDK
npm install @freelanceai/mobile-sdk

// Initialize in your app
import { FreelanceAI } from '@freelanceai/mobile-sdk';

const ai = new FreelanceAI({
  apiKey: 'your_integration_key_here',
  environment: 'production'
});

// Use the agent
const response = await ai.generateProposal({
  projectType: 'web-development',
  requirements: 'Build a modern e-commerce site'
});`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      description: "Set up WhatsApp webhook for automated responses",
      difficulty: "Advanced",
      time: "30 minutes",
      steps: [
        "Set up a WhatsApp Business API account",
        "Configure webhook URL in your WhatsApp settings",
        "Create a server endpoint to handle incoming messages",
        "Integrate FreelanceAI API for automated responses",
      ],
      code: `// Express.js webhook handler
app.post('/whatsapp-webhook', async (req, res) => {
  const { message, from } = req.body;
  
  // Process with FreelanceAI
  const response = await fetch('https://api.freelanceaiagent.com/chat', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer your_integration_key_here',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message.text,
      context: 'whatsapp'
    })
  });
  
  const aiResponse = await response.json();
  
  // Send response back via WhatsApp API
  await sendWhatsAppMessage(from, aiResponse.message);
  
  res.status(200).send('OK');
});`,
    },
    {
      icon: Instagram,
      title: "Instagram Automation",
      description: "Automate Instagram DMs and comments with AI",
      difficulty: "Advanced",
      time: "45 minutes",
      steps: [
        "Set up Instagram Basic Display API",
        "Configure Instagram webhook for messages",
        "Create automation rules and triggers",
        "Connect FreelanceAI for intelligent responses",
      ],
      code: `// Instagram webhook handler
app.post('/instagram-webhook', async (req, res) => {
  const { object, entry } = req.body;
  
  if (object === 'instagram') {
    for (const item of entry) {
      if (item.messaging) {
        for (const message of item.messaging) {
          await handleInstagramMessage(message);
        }
      }
    }
  }
  
  res.status(200).send('EVENT_RECEIVED');
});

async function handleInstagramMessage(message) {
  const response = await fetch('https://api.freelanceaiagent.com/chat', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer your_integration_key_here',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message.message.text,
      platform: 'instagram',
      userId: message.sender.id
    })
  });
  
  const aiResponse = await response.json();
  // Send response via Instagram API
}`,
    },
  ]

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/chat",
      description: "Send a message to your AI agent",
      params: ["message", "context", "userId"],
    },
    {
      method: "POST",
      endpoint: "/api/generate-proposal",
      description: "Generate a project proposal",
      params: ["projectType", "requirements", "budget"],
    },
    {
      method: "GET",
      endpoint: "/api/agent-status",
      description: "Check your agent's status and usage",
      params: ["agentId"],
    },
    {
      method: "POST",
      endpoint: "/api/schedule-reminder",
      description: "Schedule a deadline reminder",
      params: ["projectId", "deadline", "message"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              Integration <span className="text-primary">Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Learn how to integrate your AI agents into websites, mobile apps, WhatsApp, Instagram, and more
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-12 border-primary/20 glow-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Quick Start Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Purchase an AI agent from marketplace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Copy your integration key</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Choose your integration method</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Follow the setup guide below</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integration Methods */}
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-bold text-center">Integration Methods</h2>

            {integrations.map((integration, index) => {
              const IntegrationIcon = integration.icon
              return (
                <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-effect">
                        <IntegrationIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{integration.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {integration.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {integration.time}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{integration.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Steps */}
                      <div>
                        <h4 className="font-semibold mb-3">Setup Steps:</h4>
                        <ol className="space-y-2">
                          {integration.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                                {i + 1}
                              </div>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Code Example */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Code Example:</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigator.clipboard.writeText(integration.code)}
                            className="border-primary/20 hover:border-primary bg-transparent"
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-muted/20 rounded-lg p-4 border border-border/40 overflow-x-auto">
                          <pre className="text-xs text-muted-foreground">
                            <code>{integration.code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* API Reference */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                API Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border border-border/40 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={endpoint.method === "GET" ? "secondary" : "default"} className="text-xs">
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono text-primary">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{endpoint.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {endpoint.params.map((param, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {param}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help with Integration?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our technical team is here to help you get your AI agents up and running quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-effect" asChild>
                  <a href="mailto:support@freelanceaiagent.com">Contact Support</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary bg-transparent"
                  asChild
                >
                  <a href="https://docs.freelanceaiagent.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Docs
                  </a>
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

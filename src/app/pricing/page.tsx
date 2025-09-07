"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Star, Zap, Crown, Building, UserPlus, Lock, CreditCard, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    country: "",
    paymentMethod: "card",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    setIsAuthenticated(!!user)
  }, [])

  const handlePaymentSubmit = async (planName: string, price: string) => {
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
      toast({
        title: "Missing Payment Information",
        description: "Please fill in all required payment fields.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `Your ${planName} plan has been activated. Welcome aboard!`,
      })

      // Store subscription info
      const subscriptionData = {
        plan: planName,
        price: price,
        activatedAt: new Date().toISOString(),
        status: "active",
      }
      localStorage.setItem("subscription", JSON.stringify(subscriptionData))

      setIsProcessing(false)
      setPaymentData({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
        billingAddress: "",
        city: "",
        country: "",
        paymentMethod: "card",
      })
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const plans = [
    {
      name: "Basic",
      price: "PKR 1,000",
      period: "/month",
      description: "Perfect for getting started with AI automation",
      icon: Zap,
      features: ["Proposal Generation AI", "Basic templates", "Email support", "5 proposals/month", "Basic analytics"],
      popular: false,
      color: "border-border",
    },
    {
      name: "Standard",
      price: "PKR 2,500",
      period: "/month",
      description: "Most popular choice for growing freelancers",
      icon: Star,
      features: [
        "Proposal Generation AI",
        "Client Communication AI",
        "Advanced templates",
        "Priority support",
        "50 proposals/month",
        "Detailed analytics",
        "WhatsApp integration",
      ],
      popular: true,
      color: "border-primary glow-effect-hover",
    },
    {
      name: "Premium",
      price: "PKR 4,000",
      period: "/month",
      description: "Complete automation suite for professionals",
      icon: Crown,
      features: [
        "All Standard features",
        "Project Deadline Manager",
        "Custom AI Workflow",
        "24/7 phone support",
        "Unlimited proposals",
        "Advanced integrations",
        "Custom branding",
        "API access",
      ],
      popular: false,
      color: "border-border",
    },
    {
      name: "Enterprise",
      price: "Contact Sales",
      period: "",
      description: "Custom solutions for teams and agencies",
      icon: Building,
      features: [
        "All Premium features",
        "Team collaboration",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label solution",
        "Advanced security",
        "Training & onboarding",
      ],
      popular: false,
      color: "border-border",
    },
  ]

  const handlePurchase = (planName: string, price: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Sign Up Required",
        description: "Please create an account to purchase a plan.",
        variant: "destructive",
      })
      return
    }

    setSelectedPlan(planName)
  }

  const handleSignupRedirect = () => {
    router.push("/signup")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="responsive-container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              Choose Your <span className="text-primary">Plan</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Select the perfect plan to transform your freelancing workflow with AI automation
            </p>
            {!isAuthenticated && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-sm font-medium">
                <Lock className="h-4 w-4" />
                Sign up required to purchase plans
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => {
              const PlanIcon = plan.icon
              return (
                <Card
                  key={index}
                  className={`relative group hover:border-primary/50 transition-all duration-300 h-full flex flex-col ${plan.color}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <PlanIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">
                        {plan.price}
                        <span className="text-sm text-muted-foreground font-normal">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {!isAuthenticated ? (
                      <Button className="w-full bg-transparent" variant="outline" onClick={handleSignupRedirect}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Sign Up to Purchase
                      </Button>
                    ) : (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className={`w-full ${plan.popular ? "glow-effect-hover" : ""}`}
                            variant={plan.popular ? "default" : "outline"}
                            onClick={() => handlePurchase(plan.name, plan.price)}
                          >
                            {plan.name === "Enterprise" ? "Contact Sales" : `Choose ${plan.name}`}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <CreditCard className="h-5 w-5 text-primary" />
                              {plan.name === "Enterprise" ? "Contact Sales" : `Purchase ${plan.name} Plan`}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {plan.name === "Enterprise" ? (
                              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                                <h4 className="font-bold text-lg mb-2">Get in Touch</h4>
                                <p className="text-muted-foreground mb-4">
                                  Contact our sales team for custom enterprise solutions
                                </p>
                                <div className="space-y-2 text-sm">
                                  <p>Email: ameerhamza94572@gmail.com</p>
                                  <p>Phone: +92 325 2106239</p>
                                </div>
                              </div>
                            ) : (
                              <>
                                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium">Plan: {plan.name}</span>
                                    <Badge variant="outline" className="text-primary border-primary/50">
                                      {plan.price}
                                      {plan.period}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                                </div>

                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label className="text-base font-medium">Payment Method</Label>
                                    <Select
                                      value={paymentData.paymentMethod}
                                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                                    >
                                      <SelectTrigger className="border-2 border-muted bg-background focus:border-primary">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="card">💳 Credit/Debit Card</SelectItem>
                                        <SelectItem value="jazzcash">📱 JazzCash</SelectItem>
                                        <SelectItem value="easypaisa">💰 EasyPaisa</SelectItem>
                                        <SelectItem value="bank">🏦 Bank Transfer</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  {paymentData.paymentMethod === "card" && (
                                    <>
                                      <div className="space-y-2">
                                        <Label className="text-base font-medium">Cardholder Name</Label>
                                        <Input
                                          placeholder="Enter cardholder name"
                                          value={paymentData.cardholderName}
                                          onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                                          className="border-2 border-muted bg-background focus:border-primary"
                                          style={{ caretColor: "white" }}
                                        />
                                      </div>

                                      <div className="space-y-2">
                                        <Label className="text-base font-medium">Card Number</Label>
                                        <Input
                                          placeholder="1234 5678 9012 3456"
                                          value={paymentData.cardNumber}
                                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                                          className="border-2 border-muted bg-background focus:border-primary"
                                          style={{ caretColor: "white" }}
                                        />
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">Expiry Date</Label>
                                          <Input
                                            placeholder="MM/YY"
                                            value={paymentData.expiryDate}
                                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                                            className="border-2 border-muted bg-background focus:border-primary"
                                            style={{ caretColor: "white" }}
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">CVV</Label>
                                          <Input
                                            placeholder="123"
                                            value={paymentData.cvv}
                                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                                            className="border-2 border-muted bg-background focus:border-primary"
                                            style={{ caretColor: "white" }}
                                          />
                                        </div>
                                      </div>

                                      <div className="space-y-2">
                                        <Label className="text-base font-medium">Billing Address</Label>
                                        <Input
                                          placeholder="Enter billing address"
                                          value={paymentData.billingAddress}
                                          onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                                          className="border-2 border-muted bg-background focus:border-primary"
                                          style={{ caretColor: "white" }}
                                        />
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">City</Label>
                                          <Input
                                            placeholder="Enter city"
                                            value={paymentData.city}
                                            onChange={(e) => handleInputChange("city", e.target.value)}
                                            className="border-2 border-muted bg-background focus:border-primary"
                                            style={{ caretColor: "white" }}
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label className="text-base font-medium">Country</Label>
                                          <Select
                                            value={paymentData.country}
                                            onValueChange={(value) => handleInputChange("country", value)}
                                          >
                                            <SelectTrigger className="border-2 border-muted bg-background focus:border-primary">
                                              <SelectValue placeholder="Select country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="pakistan">🇵🇰 Pakistan</SelectItem>
                                              <SelectItem value="india">🇮🇳 India</SelectItem>
                                              <SelectItem value="bangladesh">🇧🇩 Bangladesh</SelectItem>
                                              <SelectItem value="other">🌍 Other</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                      </div>
                                    </>
                                  )}

                                  {paymentData.paymentMethod !== "card" && (
                                    <div className="bg-blue-500/5 rounded-lg p-4 border border-blue-500/20">
                                      <h4 className="font-medium text-blue-400 mb-2">
                                        {paymentData.paymentMethod === "jazzcash" && "JazzCash Payment"}
                                        {paymentData.paymentMethod === "easypaisa" && "EasyPaisa Payment"}
                                        {paymentData.paymentMethod === "bank" && "Bank Transfer"}
                                      </h4>
                                      <p className="text-sm text-muted-foreground mb-3">
                                        You will be redirected to complete your payment securely.
                                      </p>
                                      <div className="text-sm space-y-1">
                                        <p>
                                          <strong>Amount:</strong> {plan.price}
                                        </p>
                                        <p>
                                          <strong>Account:</strong> 03252106239
                                        </p>
                                        <p>
                                          <strong>Reference:</strong> {plan.name} Plan
                                        </p>
                                      </div>
                                    </div>
                                  )}

                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Shield className="h-4 w-4 text-green-500" />
                                    <span>Your payment information is secure and encrypted</span>
                                  </div>

                                  <Button
                                    className="w-full h-12 text-lg font-medium"
                                    onClick={() => handlePaymentSubmit(plan.name, plan.price)}
                                    disabled={isProcessing}
                                  >
                                    {isProcessing ? (
                                      <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                                        Processing Payment...
                                      </>
                                    ) : (
                                      <>
                                        <CreditCard className="mr-2 h-5 w-5" />
                                        Complete Payment {plan.price}
                                      </>
                                    )}
                                  </Button>
                                </div>
                              </>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {!isAuthenticated && (
            <div className="mb-12">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to <span className="text-primary">Get Started?</span>
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Create your free account to access our AI-powered freelancing tools and start transforming your
                    workflow today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="glow-effect-hover" asChild>
                      <Link href="/signup">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Free Account
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary bg-transparent"
                      asChild
                    >
                      <Link href="/login">Already have an account?</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Free to sign up</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>30-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>No credit card required</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* FAQ Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Not sure which plan is right for you? Start with our Basic plan and upgrade anytime as your business
                  grows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="glow-effect-hover" asChild>
                    <a href="mailto:support@freelanceaiagent.com">Contact Support</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary bg-transparent"
                    asChild
                  >
                    <Link href="/generator">Try Generator Free</Link>
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

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Zap, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for beginners",
    features: [
      "1 Trading Bot",
      "Basic Analytics",
      "Email Support",
      "Mobile App Access"
    ],
    popular: false,
    current: false
  },
  {
    name: "Professional", 
    price: 79,
    description: "Most popular choice",
    features: [
      "3 Trading Bots",
      "Advanced Analytics",
      "Priority Support",
      "AI Chat Assistant",
      "Portfolio Optimization",
      "Risk Management Tools"
    ],
    popular: true,
    current: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For serious traders",
    features: [
      "Unlimited Trading Bots",
      "Custom Strategies",
      "24/7 Phone Support",
      "Dedicated Account Manager",
      "API Access",
      "White-label Options",
      "Advanced Risk Controls"
    ],
    popular: false,
    current: false
  }
]

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const handleUpgrade = (planName: string) => {
    // In real app, this would integrate with Stripe
    console.log("Upgrade to:", planName)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Choose Your Plan</h1>
        <p className="text-gray-400 mb-6">Unlock the full potential of AI trading</p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-blue-600 transition-transform ${
                billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>
            Yearly
          </span>
          {billingCycle === "yearly" && (
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
              Save 20%
            </Badge>
          )}
        </div>
      </div>

      {/* Current Subscription Status */}
      <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-600/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-600/20">
                <Crown className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Current Plan: Professional</h3>
                <p className="text-gray-300">Next billing: January 15, 2025</p>
              </div>
            </div>
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`relative bg-white/5 border-white/10 backdrop-blur-sm ${
              plan.popular ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
              <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">
                  ${billingCycle === "yearly" ? Math.round(plan.price * 0.8) : plan.price}
                </span>
                <span className="text-gray-400">/{billingCycle === "yearly" ? "year" : "month"}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.current
                    ? "bg-gray-600 hover:bg-gray-700 cursor-not-allowed"
                    : plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-white/10 hover:bg-white/20 border border-white/20"
                }`}
                onClick={() => handleUpgrade(plan.name)}
                disabled={plan.current}
              >
                {plan.current ? (
                  "Current Plan"
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    {plan.name === "Starter" ? "Downgrade" : "Upgrade"} to {plan.name}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-lg">Bots Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">3 / 3</div>
            <p className="text-gray-400 text-sm">Professional plan limit</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-lg">API Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">8.2K / 10K</div>
            <p className="text-gray-400 text-sm">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-lg">Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">2 / ∞</div>
            <p className="text-gray-400 text-sm">Priority support</p>
          </CardContent>
        </Card>
      </div>

      {/* Billing History */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Dec 15, 2024", amount: "$79.00", status: "Paid" },
              { date: "Nov 15, 2024", amount: "$79.00", status: "Paid" },
              { date: "Oct 15, 2024", amount: "$79.00", status: "Paid" },
            ].map((invoice, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                <div>
                  <p className="text-white font-medium">{invoice.date}</p>
                  <p className="text-gray-400 text-sm">Professional Plan</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{invoice.amount}</p>
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                    {invoice.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

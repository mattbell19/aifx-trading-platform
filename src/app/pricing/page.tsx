import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Check, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight,
  Crown,
  Target
} from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      id: "fx-5-range",
      name: "FX 5° RANGE",
      subtitle: "Conservative Trading",
      price: 29.99,
      originalPrice: 49.99,
      description: "Perfect for beginners who want steady, low-risk returns",
      performance: "89.4%",
      monthlyProfit: "$89.45",
      popular: false,
      features: [
        "24/7 Automated Trading",
        "Conservative Risk Management", 
        "Real-time Monitoring",
        "Email Alerts",
        "Basic Analytics",
        "Customer Support"
      ],
      icon: Shield,
      color: "green"
    },
    {
      id: "fx-10-range", 
      name: "FX 10° RANGE",
      subtitle: "Balanced Trading",
      price: 49.99,
      originalPrice: 79.99,
      description: "Our most popular bot with optimal risk-reward balance",
      performance: "94.2%",
      monthlyProfit: "$156.78",
      popular: true,
      features: [
        "Everything in Conservative",
        "Multi-pair Support",
        "Advanced Risk Controls",
        "SMS + Email Alerts",
        "Detailed Analytics",
        "Priority Support",
        "Strategy Customization"
      ],
      icon: Target,
      color: "blue"
    },
    {
      id: "fx-25-range",
      name: "FX 25° RANGE", 
      subtitle: "Aggressive Trading",
      price: 79.99,
      originalPrice: 119.99,
      description: "For experienced traders seeking higher returns",
      performance: "91.8%",
      monthlyProfit: "$234.12",
      popular: false,
      features: [
        "Everything in Balanced",
        "High-Frequency Trading",
        "Advanced Analytics",
        "Custom Indicators",
        "API Access",
        "Dedicated Account Manager",
        "Weekly Strategy Calls"
      ],
      icon: Zap,
      color: "purple"
    },
    {
      id: "3d-fx-fund",
      name: "3D FX FUND",
      subtitle: "Premium Strategy",
      price: 149.99,
      originalPrice: 199.99,
      description: "Elite performance with cutting-edge AI algorithms",
      performance: "96.7%",
      monthlyProfit: "$412.89",
      popular: false,
      features: [
        "Everything in Aggressive",
        "AI-Powered Optimization",
        "Institutional-Grade Tools",
        "White-Glove Support",
        "Custom Strategy Development",
        "Direct Line to Developers",
        "Exclusive Market Insights",
        "VIP Community Access"
      ],
      icon: Crown,
      color: "gold"
    }
  ]

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties or fees."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 7-day free trial for all new users to test our bots risk-free."
    },
    {
      question: "What's the minimum deposit?",
      answer: "You can start with as little as $100, though we recommend $500 for optimal results."
    },
    {
      question: "Are the results guaranteed?",
      answer: "While past performance is strong, trading involves risk and results may vary."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-6">
            Special Launch Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Trading Bot
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start with any plan and upgrade anytime. All plans include our core features 
            with 24/7 automated trading and full customer support.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all relative ${plan.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto p-3 rounded-xl w-fit mb-4 ${
                    plan.color === 'green' ? 'bg-green-600/20' :
                    plan.color === 'blue' ? 'bg-blue-600/20' :
                    plan.color === 'purple' ? 'bg-purple-600/20' :
                    'bg-yellow-600/20'
                  }`}>
                    <plan.icon className={`h-6 w-6 ${
                      plan.color === 'green' ? 'text-green-400' :
                      plan.color === 'blue' ? 'text-blue-400' :
                      plan.color === 'purple' ? 'text-purple-400' :
                      'text-yellow-400'
                    }`} />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white mb-1">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400 mb-4">{plan.subtitle}</CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm text-gray-500 line-through">${plan.originalPrice}</span>
                      <Badge className="bg-red-600/20 text-red-400 border-red-600/30 text-xs">
                        Save {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mt-4">{plan.description}</p>
                  
                  {/* Performance Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-4 p-3 bg-white/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{plan.performance}</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{plan.monthlyProfit}</div>
                      <div className="text-xs text-gray-400">Avg. Monthly</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}>
                    <Link href="/auth/signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-8 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Try any bot for 7 days completely free. No credit card required.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            <Link href="/auth/signup">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

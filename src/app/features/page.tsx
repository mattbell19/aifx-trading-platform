import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3, 
  Zap, 
  Target, 
  Globe, 
  Lock,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Trading Bots",
      description: "Advanced algorithms that analyze market patterns and execute trades 24/7 with precision and speed.",
      benefits: ["Machine learning optimization", "Pattern recognition", "Automated execution", "Continuous learning"]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Analysis",
      description: "Get instant insights into market movements with our sophisticated analysis tools and indicators.",
      benefits: ["Live market data", "Technical indicators", "Trend analysis", "Price predictions"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Built-in safety features protect your capital with stop-losses, position sizing, and risk controls.",
      benefits: ["Automated stop-losses", "Position sizing", "Risk assessment", "Capital protection"]
    },
    {
      icon: Clock,
      title: "24/7 Trading",
      description: "Never miss an opportunity. Our bots work around the clock, even while you sleep.",
      benefits: ["Continuous monitoring", "Global market coverage", "No downtime", "Timezone independent"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed reports and analytics help you track performance and optimize your trading strategy.",
      benefits: ["Detailed reporting", "Performance metrics", "Strategy optimization", "Historical analysis"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our high-speed infrastructure and direct market access.",
      benefits: ["Sub-second execution", "Direct market access", "Low latency", "High-frequency capable"]
    },
    {
      icon: Target,
      title: "Multiple Strategies",
      description: "Choose from conservative, balanced, or aggressive trading strategies to match your risk tolerance.",
      benefits: ["Strategy diversity", "Risk customization", "Portfolio balance", "Flexible options"]
    },
    {
      icon: Globe,
      title: "Multi-Market Support",
      description: "Trade across multiple markets and currency pairs with unified portfolio management.",
      benefits: ["Forex markets", "Multiple pairs", "Global coverage", "Unified dashboard"]
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Your funds and data are protected with enterprise-grade security and encryption.",
      benefits: ["256-bit encryption", "Secure API keys", "Two-factor auth", "Regular audits"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-6">
            Advanced Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Trading Features
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover the advanced capabilities that make AIFx the most sophisticated 
            trading platform for automated forex trading.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of traders who are already using AIFx to automate their trading success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Link href="/auth/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

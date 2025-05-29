import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  UserPlus, 
  Settings, 
  Play, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Shield,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up in minutes with just your email. No complex verification process.",
      details: [
        "Quick email registration",
        "Secure account setup",
        "Instant access to dashboard",
        "No hidden fees or commitments"
      ]
    },
    {
      step: "02", 
      icon: Settings,
      title: "Choose Your Strategy",
      description: "Select from our proven trading bots based on your risk tolerance and goals.",
      details: [
        "Conservative, balanced, or aggressive options",
        "Detailed performance history",
        "Risk assessment tools",
        "Customizable parameters"
      ]
    },
    {
      step: "03",
      icon: Play,
      title: "Activate Your Bot",
      description: "Connect your broker account and let our AI start trading for you automatically.",
      details: [
        "Secure broker integration",
        "API key setup assistance",
        "Real-time monitoring",
        "Instant activation"
      ]
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Watch Your Profits Grow",
      description: "Monitor your performance in real-time and withdraw profits whenever you want.",
      details: [
        "Live performance tracking",
        "Detailed analytics dashboard",
        "Flexible profit withdrawal",
        "24/7 customer support"
      ]
    }
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: "Proven Results",
      description: "Our bots have generated consistent profits with average returns of 15-25% monthly.",
      stat: "94.2% Success Rate"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Built-in safety features protect your capital with advanced risk controls.",
      stat: "Maximum 2% Risk Per Trade"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds to capture the best market opportunities.",
      stat: "<100ms Execution Time"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-6">
            Simple Process
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How AIFx Works
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get started with automated forex trading in just 4 simple steps. 
            No experience required - our AI does the work for you.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-bl-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">{step.step}</span>
                </div>
                
                <CardHeader className="pb-4 pr-24">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-xl">
                      <step.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-8 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AIFx?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of successful traders who trust our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="mx-auto p-4 bg-blue-600/20 rounded-full w-fit mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">{benefit.title}</CardTitle>
                  <div className="text-2xl font-bold text-green-400 mb-4">{benefit.stat}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 10,000 traders who are already earning with AIFx automated trading bots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Link href="/auth/signup">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
              <Link href="/features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

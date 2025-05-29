import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Financial Analyst",
      location: "Singapore",
      image: "/api/placeholder/80/80",
      rating: 5,
      profit: "+$12,450",
      timeframe: "3 months",
      quote: "AIFx has completely transformed my trading approach. The FX 10° bot has been incredibly consistent, generating steady profits while I focus on my day job. The risk management is excellent.",
      bot: "FX 10° RANGE"
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      location: "Madrid, Spain",
      image: "/api/placeholder/80/80",
      rating: 5,
      profit: "+$8,920",
      timeframe: "2 months",
      quote: "As a tech person, I was skeptical about automated trading. But AIFx's algorithms are impressive. The transparency and real-time analytics give me complete confidence in the system.",
      bot: "FX 25° RANGE"
    },
    {
      name: "Jennifer Walsh",
      role: "Marketing Director",
      location: "London, UK",
      image: "/api/placeholder/80/80",
      rating: 5,
      profit: "+$15,680",
      timeframe: "4 months",
      quote: "I started with the conservative bot and was amazed by the consistent returns. Now I'm using multiple bots and my portfolio has grown beyond my expectations. Highly recommended!",
      bot: "3D FX FUND"
    },
    {
      name: "David Kim",
      role: "Business Owner",
      location: "Seoul, South Korea",
      image: "/api/placeholder/80/80",
      rating: 5,
      profit: "+$22,340",
      timeframe: "6 months",
      quote: "AIFx has been a game-changer for my investment strategy. The 24/7 trading means I never miss opportunities, and the customer support is outstanding. Best decision I've made.",
      bot: "FX 10° RANGE"
    },
    {
      name: "Emma Thompson",
      role: "Retired Teacher",
      location: "Sydney, Australia",
      image: "/api/placeholder/80/80",
      rating: 5,
      profit: "+$6,750",
      timeframe: "2 months",
      quote: "I was nervous about automated trading, but AIFx made it so simple. The conservative bot gives me peace of mind while generating steady income for my retirement.",
      bot: "FX 5° RANGE"
    },
    {
      name: "Ahmed Hassan",
      role: "Investment Banker",
      location: "Dubai, UAE",
      image: "/api/placeholder/80/80",
      rating: 5,
      profit: "+$31,200",
      timeframe: "5 months",
      quote: "Working in finance, I know good algorithms when I see them. AIFx's bots are sophisticated and profitable. The risk-adjusted returns are exceptional.",
      bot: "3D FX FUND"
    }
  ]

  const stats = [
    { label: "Active Traders", value: "10,000+" },
    { label: "Total Profits Generated", value: "$2.4M+" },
    { label: "Average Monthly Return", value: "18.5%" },
    { label: "Success Rate", value: "94.2%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-6">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Traders Say
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Real stories from real traders who are earning consistent profits with AIFx.
            Join thousands of successful traders worldwide.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all relative">
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-blue-400/50" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Profit Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {testimonial.profit} in {testimonial.timeframe}
                    </Badge>
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400">
                      {testimonial.bot}
                    </Badge>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="px-8 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join a global community of successful traders who trust AIFx with their investments.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-2">
              🔒 Bank-Level Security
            </Badge>
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30 px-4 py-2">
              ✅ Verified Results
            </Badge>
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 px-4 py-2">
              🏆 Award Winning
            </Badge>
            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 px-4 py-2">
              ⭐ 4.9/5 Rating
            </Badge>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey to financial freedom with AIFx automated trading bots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Link href="/auth/signup">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
              <Link href="/pricing">
                View Plans
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

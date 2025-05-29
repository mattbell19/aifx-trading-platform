import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  TrendingUp,
  Bot,
  Shield,
  BarChart3,
  Lightbulb,
  Target
} from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const featuredPost = {
    title: "The Future of Automated Forex Trading: AI Revolution in 2024",
    excerpt: "Discover how artificial intelligence is transforming forex trading and why automated bots are becoming essential for modern traders.",
    author: "Alex Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI Trading",
    image: "/api/placeholder/600/300",
    slug: "future-automated-forex-trading-ai-2024"
  }

  const blogPosts = [
    {
      title: "5 Risk Management Strategies Every Forex Trader Should Know",
      excerpt: "Learn essential risk management techniques that can protect your capital and maximize your trading success.",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Risk Management",
      icon: Shield,
      slug: "risk-management-strategies-forex-trading"
    },
    {
      title: "How to Choose the Right Trading Bot for Your Strategy",
      excerpt: "A comprehensive guide to selecting the perfect automated trading bot based on your risk tolerance and goals.",
      author: "Michael Rodriguez",
      date: "March 10, 2024", 
      readTime: "7 min read",
      category: "Trading Bots",
      icon: Bot,
      slug: "choose-right-trading-bot-strategy"
    },
    {
      title: "Understanding Market Volatility and How Bots Adapt",
      excerpt: "Explore how modern trading algorithms adjust to market volatility and maintain consistent performance.",
      author: "Emma Thompson",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      icon: BarChart3,
      slug: "market-volatility-bot-adaptation"
    },
    {
      title: "Backtesting Your Trading Strategy: A Complete Guide",
      excerpt: "Learn how to properly backtest trading strategies and validate their effectiveness before going live.",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Strategy",
      icon: Target,
      slug: "backtesting-trading-strategy-guide"
    },
    {
      title: "The Psychology of Automated Trading: Removing Emotions",
      excerpt: "Discover how automated trading eliminates emotional decision-making and improves trading outcomes.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Psychology",
      icon: Lightbulb,
      slug: "psychology-automated-trading-emotions"
    },
    {
      title: "Maximizing Profits with Multi-Bot Strategies",
      excerpt: "Learn advanced techniques for running multiple trading bots simultaneously to diversify and optimize returns.",
      author: "James Wilson",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Advanced Trading",
      icon: TrendingUp,
      slug: "maximizing-profits-multi-bot-strategies"
    }
  ]

  const categories = [
    "All Posts",
    "AI Trading", 
    "Risk Management",
    "Trading Bots",
    "Market Analysis",
    "Strategy",
    "Psychology",
    "Advanced Trading"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-6">
            Trading Insights
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AIFx Trading Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Expert insights, trading strategies, and the latest trends in automated forex trading. 
            Learn from industry professionals and improve your trading success.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  index === 0 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "border-white/30 text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Featured Article</p>
                </div>
              </div>
              <div className="p-8">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                      <post.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <Badge variant="outline" className="border-white/30 text-gray-300">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-8 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Trading Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest trading strategies, market analysis, and AI insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Automated Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Put your knowledge into practice with AIFx trading bots.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            <Link href="/auth/signup">
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, TrendingUp, Shield, Zap, Users, BarChart3, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AIFx</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-white hover:text-blue-400">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">
            Professional Trading Bots
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            High-Performance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}AI Trading Software
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI BOT technology offers all the advantages of high frequency trading,
            without the need to employ a broker or any prior market knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Trading Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View Live Performance
            </Button>
          </div>
        </div>
      </section>

      {/* Trading Success Rate Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Trading Results
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our AI-powered bots deliver consistent performance across all market conditions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">300+</div>
              <p className="text-gray-300">Global Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$1.5B+</div>
              <p className="text-gray-300">Monthly Volume</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">5</div>
              <p className="text-gray-300">Continents</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-gray-300">Trading Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AIFx?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with proven trading strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">High-Performance Investment</CardTitle>
                <CardDescription className="text-gray-300">
                  Utilising our financial planning experience and proprietary trading technologies we deliver maximum profits at minimal risk. We constantly deliver double digit monthly returns with robust risk management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">We Keep Your Funds Safe</CardTitle>
                <CardDescription className="text-gray-300">
                  All client funds are held in segregated accounts with tier 1 custodian banks, including HSBC international and The Commonwealth Bank of Australia, which use secure encryption technology.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">A Strong Team</CardTitle>
                <CardDescription className="text-gray-300">
                  Our team consists of professional traders and technologists with vast experience in handling large sums of money, ability to assess and react swiftly to market changes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Trading Bots Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Home of the FX Plus Range
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our FX Plus products are a range of forex funds that use the highest levels of AI trading technology. We are a team made up of advanced financial players and Forex AI coders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FX 5° RANGE */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>

              <CardHeader className="pt-24 text-center">
                <CardTitle className="text-white text-lg font-bold">SIMPLY BOTS</CardTitle>
                <CardDescription className="text-gray-300 font-semibold text-base">
                  FX 5° RANGE
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-center">
                <p className="text-gray-300 text-sm">Conservative trading with tight risk management</p>

                <div className="text-4xl font-bold text-white">
                  $29.99
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Low Risk</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">5° Range Trading</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Stable Returns</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* FX 10° RANGE */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden border-blue-500/50">
              <Badge className="absolute top-4 right-4 bg-blue-600 text-white">Popular</Badge>
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>

              <CardHeader className="pt-24 text-center">
                <CardTitle className="text-white text-lg font-bold">SIMPLY BOTS</CardTitle>
                <CardDescription className="text-gray-300 font-semibold text-base">
                  FX 10° RANGE
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-center">
                <p className="text-gray-300 text-sm">Balanced trading strategy for moderate growth</p>

                <div className="text-4xl font-bold text-white">
                  $49.99
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Medium Risk</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">10° Range Trading</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Steady Growth</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* FX 25° RANGE */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>

              <CardHeader className="pt-24 text-center">
                <CardTitle className="text-white text-lg font-bold">SIMPLY BOTS</CardTitle>
                <CardDescription className="text-gray-300 font-semibold text-base">
                  FX 25° RANGE
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-center">
                <p className="text-gray-300 text-sm">Aggressive trading for maximum profit potential</p>

                <div className="text-4xl font-bold text-white">
                  $79.99
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">High Risk</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">25° Range Trading</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">High Returns</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* 3D FX FUND */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-purple-600 text-white">Premium</Badge>
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>

              <CardHeader className="pt-24 text-center">
                <CardTitle className="text-white text-lg font-bold">SIMPLY BOTS</CardTitle>
                <CardDescription className="text-gray-300 font-semibold text-base">
                  3D FX FUND
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-center">
                <p className="text-gray-300 text-sm">Premium fund strategy with advanced algorithms</p>

                <div className="text-4xl font-bold text-white">
                  $149.99
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Premium Strategy</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">3D Analysis</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Elite Performance</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get started with AIFx in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Choose Your Bot</h3>
              <p className="text-gray-300">
                Select from our range of AI-powered trading bots based on your risk tolerance and trading goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect & Configure</h3>
              <p className="text-gray-300">
                Link your trading account and set your preferences. Our bots will handle the rest automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Watch Profits Grow</h3>
              <p className="text-gray-300">
                Monitor your performance in real-time as our AI executes trades 24/7 to maximize your returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Traders Say
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of successful traders who trust AIFx with their investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "We have been working with Simple Bot for 6 months now and though the fund had its short term ups and downs we have made about 120% of our initial investment already."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">AK</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Anna K</p>
                    <p className="text-gray-400 text-sm">FX Plus Range Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Since signing up, the fund constantly made profits far above my expectations and much better than any other of my investment. By re-investing the profits and exploiting the compound effect, you can really see how your wealth growth at an almost breathtaking pace."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">JD</p>
                    <p className="text-gray-400 text-sm">FX Plus Range Investor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Easiest money i ever made, sounded to good to be true but its the best investment i ever came across. Quick easy set up with instant returns."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">MD</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">MD</p>
                    <p className="text-gray-400 text-sm">FX Plus Range Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-600/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Earning?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of traders who trust AIFx with their investments
              </p>
              <Link href="/auth/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

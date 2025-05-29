"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const availableBots = [
  {
    id: 1,
    name: "SIMPLY BOTS",
    range: "FX 5° RANGE",
    description: "Conservative trading with tight risk management",
    monthlyFee: 29.99,
    features: ["Low Risk", "5° Range Trading", "Conservative Approach", "Stable Returns"],
    color: "from-red-500 to-pink-500",
    isSubscribed: false
  },
  {
    id: 2,
    name: "SIMPLY BOTS",
    range: "FX 10° RANGE",
    description: "Balanced trading strategy for moderate growth",
    monthlyFee: 49.99,
    features: ["Medium Risk", "10° Range Trading", "Balanced Approach", "Steady Growth"],
    color: "from-blue-500 to-cyan-500",
    isSubscribed: true
  },
  {
    id: 3,
    name: "SIMPLY BOTS",
    range: "FX 25° RANGE",
    description: "Aggressive trading for maximum profit potential",
    monthlyFee: 79.99,
    features: ["High Risk", "25° Range Trading", "Aggressive Approach", "High Returns"],
    color: "from-orange-500 to-yellow-500",
    isSubscribed: false
  },
  {
    id: 4,
    name: "SIMPLY BOTS",
    range: "3D FX FUND",
    description: "Premium fund strategy with advanced algorithms",
    monthlyFee: 149.99,
    features: ["Premium Strategy", "3D Analysis", "Fund Management", "Elite Performance"],
    color: "from-purple-500 to-indigo-500",
    isSubscribed: false
  }
]

export default function TradingBots() {
  const connectBot = (botId: number) => {
    // In real app, this would handle bot connection
    console.log("Connect bot:", botId)
  }

  const disconnectBot = (botId: number) => {
    // In real app, this would handle bot disconnection
    console.log("Disconnect bot:", botId)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Trading Bots</h1>
        <p className="text-gray-400">Choose your FX trading strategy and connect your bot</p>
      </div>

      {/* Trading Bots Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {availableBots.map((bot) => (
          <Card key={bot.id} className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
            {/* Gradient Icon */}
            <div className="absolute top-6 left-6">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${bot.color} flex items-center justify-center`}>
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
            </div>

            <CardHeader className="pt-24 text-center">
              <CardTitle className="text-white text-lg font-bold">{bot.name}</CardTitle>
              <CardDescription className="text-gray-300 font-semibold text-base">
                {bot.range}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 text-center">
              <p className="text-gray-300 text-sm">{bot.description}</p>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-white">
                  ${bot.monthlyFee}
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-3">
                {bot.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Badge
                  className={`mb-4 ${
                    bot.isSubscribed
                      ? "bg-green-600/20 text-green-400 border-green-600/30"
                      : "bg-gray-600/20 text-gray-400 border-gray-600/30"
                  }`}
                >
                  {bot.isSubscribed ? "Active Subscription" : "Not Subscribed"}
                </Badge>

                <Button
                  className={`w-full ${
                    bot.isSubscribed
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  onClick={() => bot.isSubscribed ? disconnectBot(bot.id) : connectBot(bot.id)}
                >
                  {bot.isSubscribed ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

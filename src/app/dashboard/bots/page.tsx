"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Play, Pause, Settings, TrendingUp, TrendingDown, DollarSign } from "lucide-react"

const availableBots = [
  {
    id: 1,
    name: "Grid Trading Pro",
    description: "Advanced grid trading strategy for volatile markets",
    strategy: "Grid Trading",
    performance: "94.2%",
    monthlyFee: 29.99,
    features: ["24/7 Trading", "Risk Management", "Auto-rebalancing"],
    rating: 4.8,
    users: 1247
  },
  {
    id: 2,
    name: "DCA Master",
    description: "Dollar-cost averaging with smart entry points",
    strategy: "DCA Strategy", 
    performance: "87.5%",
    monthlyFee: 19.99,
    features: ["Smart DCA", "Market Analysis", "Portfolio Optimization"],
    rating: 4.6,
    users: 892
  },
  {
    id: 3,
    name: "Arbitrage Hunter",
    description: "Cross-exchange arbitrage opportunities",
    strategy: "Arbitrage",
    performance: "91.8%",
    monthlyFee: 39.99,
    features: ["Multi-Exchange", "Real-time Scanning", "Auto-execution"],
    rating: 4.9,
    users: 634
  }
]

const myBots = [
  {
    id: 1,
    name: "Grid Trading Pro",
    status: "active",
    profit: 156.78,
    performance: 94.2,
    startDate: "2024-01-15",
    trades: 47,
    winRate: 89.4
  },
  {
    id: 2,
    name: "DCA Master",
    status: "active",
    profit: 89.34,
    performance: 87.5,
    startDate: "2024-01-20",
    trades: 23,
    winRate: 82.6
  },
  {
    id: 3,
    name: "Arbitrage Hunter",
    status: "paused",
    profit: 45.23,
    performance: 76.8,
    startDate: "2024-02-01",
    trades: 12,
    winRate: 75.0
  }
]

export default function TradingBots() {
  const [activeTab, setActiveTab] = useState("my-bots")

  const toggleBotStatus = (botId: number) => {
    // In real app, this would call an API
    console.log("Toggle bot status:", botId)
  }

  const rentBot = (botId: number) => {
    // In real app, this would handle subscription
    console.log("Rent bot:", botId)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Trading Bots</h1>
          <p className="text-gray-400">Manage your AI-powered trading strategies</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Bot className="mr-2 h-4 w-4" />
          Browse All Bots
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/5 border-white/10">
          <TabsTrigger value="my-bots" className="data-[state=active]:bg-blue-600">
            My Bots ({myBots.length})
          </TabsTrigger>
          <TabsTrigger value="available" className="data-[state=active]:bg-blue-600">
            Available Bots ({availableBots.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-bots" className="space-y-4">
          <div className="grid gap-6">
            {myBots.map((bot) => (
              <Card key={bot.id} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-blue-600/20">
                        <Bot className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-white">{bot.name}</CardTitle>
                        <CardDescription className="text-gray-300">
                          Started on {new Date(bot.startDate).toLocaleDateString()}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        className={`${
                          bot.status === "active" 
                            ? "bg-green-600/20 text-green-400 border-green-600/30" 
                            : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                        }`}
                      >
                        {bot.status}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => toggleBotStatus(bot.id)}
                      >
                        {bot.status === "active" ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Total Profit</p>
                      <p className={`text-lg font-semibold ${
                        bot.profit > 0 ? "text-green-400" : "text-red-400"
                      }`}>
                        +${bot.profit.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Performance</p>
                      <p className="text-lg font-semibold text-white">{bot.performance}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Total Trades</p>
                      <p className="text-lg font-semibold text-white">{bot.trades}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Win Rate</p>
                      <p className="text-lg font-semibold text-white">{bot.winRate}%</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-white">{bot.performance}%</span>
                    </div>
                    <Progress value={bot.performance} className="h-2 bg-white/10" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBots.map((bot) => (
              <Card key={bot.id} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-600/20">
                      <Bot className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{bot.name}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {bot.strategy}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">{bot.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-400 text-sm">Performance</p>
                      <p className="text-green-400 font-semibold">{bot.performance}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Monthly Fee</p>
                      <p className="text-white font-semibold">${bot.monthlyFee}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {bot.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">
                      ⭐ {bot.rating} • {bot.users} users
                    </span>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => rentBot(bot.id)}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    Rent Bot - ${bot.monthlyFee}/month
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

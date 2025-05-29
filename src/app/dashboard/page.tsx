"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Bot, Activity, Settings, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState({
    'fx-5-range': false,
    'fx-10-range': true,
    'fx-25-range': false,
    '3d-fx-fund': true
  })

  // Mock data - in real app, this would come from your API
  const stats = {
    totalBalance: 1498.78,
    totalProfit: 324.56,
    profitPercentage: 27.8,
    activeBots: 2,
  }

  const bots = [
    {
      id: 'fx-5-range',
      name: 'FX 5° RANGE',
      subtitle: 'Conservative Trading',
      description: 'Conservative FX trading with minimal risk',
      avgPerformance: '89.4%',
      avgMonthlyProfit: '$89.45',
      features: ['24/7 Trading', 'Risk Management', 'Conservative Strategy'],
      price: '$29.99',
      popular: false
    },
    {
      id: 'fx-10-range',
      name: 'FX 10° RANGE',
      subtitle: 'Balanced Trading',
      description: 'Balanced FX trading with moderate risk',
      avgPerformance: '94.2%',
      avgMonthlyProfit: '$156.78',
      features: ['24/7 Trading', 'Risk Management', 'Multi-pair Support'],
      price: '$49.99',
      popular: true
    },
    {
      id: 'fx-25-range',
      name: 'FX 25° RANGE',
      subtitle: 'Aggressive Trading',
      description: 'Aggressive FX trading with higher risk/reward',
      avgPerformance: '91.8%',
      avgMonthlyProfit: '$234.12',
      features: ['24/7 Trading', 'Advanced Analytics', 'High Frequency'],
      price: '$79.99',
      popular: false
    },
    {
      id: '3d-fx-fund',
      name: '3D FX FUND',
      subtitle: 'Premium Strategy',
      description: 'Elite performance with advanced AI algorithms',
      avgPerformance: '96.7%',
      avgMonthlyProfit: '$412.89',
      features: ['24/7 Trading', 'AI Optimization', 'Premium Support'],
      price: '$149.99',
      popular: false
    }
  ]

  const hasActiveSubscription = Object.values(subscriptions).some(sub => sub)

  const handleSubscription = (botId: string) => {
    setSubscriptions(prev => ({
      ...prev,
      [botId]: !prev[botId as keyof typeof prev]
    }))
  }



  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here&apos;s your FX trading overview.</p>
        </div>
        <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
          All Systems Active
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">${stats.totalBalance.toLocaleString()}</div>
            <p className="text-xs text-gray-400">+2.1% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">+${stats.totalProfit.toLocaleString()}</div>
            <p className="text-xs text-gray-400">+{stats.profitPercentage}% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Bots</CardTitle>
            <Bot className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.activeBots}</div>
            <p className="text-xs text-gray-400">Currently subscribed</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Performance</CardTitle>
            <Activity className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">94%</div>
            <p className="text-xs text-gray-400">Success rate this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Live Alerts Channel - Only for paying customers */}
      {hasActiveSubscription && (
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <MessageCircle className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Join Our Live Alerts Channel</h3>
                  <p className="text-gray-300">Get real-time trading signals and market insights from our experts</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Channel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Trading Bots Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Trading Bots</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bots.map((bot) => (
            <Card key={bot.id} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm relative">
              {bot.popular && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-orange-500 text-white px-3 py-1 rounded-full">
                    ⭐ Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{bot.name}</CardTitle>
                      <CardDescription className="text-gray-400">{bot.subtitle}</CardDescription>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">{bot.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Avg. Performance</p>
                    <p className="text-2xl font-bold text-green-400">{bot.avgPerformance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg. Monthly Profit</p>
                    <p className="text-2xl font-bold text-green-400">{bot.avgMonthlyProfit}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {bot.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-700 text-gray-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Subscription Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="text-lg font-semibold text-white">
                    {bot.price}<span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex space-x-2">
                    {subscriptions[bot.id as keyof typeof subscriptions] ? (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-600 text-gray-300 hover:bg-slate-700"
                          onClick={() => handleSubscription(bot.id)}
                        >
                          Unsubscribe
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Settings className="h-4 w-4 mr-1" />
                          Manage
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleSubscription(bot.id)}
                      >
                        Subscribe
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

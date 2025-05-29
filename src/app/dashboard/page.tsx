"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Bot, Activity, Settings, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

export default function Dashboard() {
  const { data: session } = useSession()
  const [subscriptions, setSubscriptions] = useState({
    'fx-5-range': false,
    'fx-10-range': false,
    'fx-25-range': false,
    '3d-fx-fund': false
  })
  const [loading, setLoading] = useState(false)

  // Mock data - in real app, this would come from your API
  const stats = {
    totalBalance: 1498.78,
    totalProfit: 324.56,
    profitPercentage: 27.8,
    activeBots: Object.values(subscriptions).filter(Boolean).length,
  }

  // Load user subscriptions
  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        const response = await fetch('/api/subscriptions')
        if (response.ok) {
          const data = await response.json()
          setSubscriptions(data.subscriptions)
        }
      } catch (error) {
        console.error('Failed to load subscriptions:', error)
      }
    }

    if (session) {
      loadSubscriptions()
    }
  }, [session])

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

  const handleSubscription = async (botId: string) => {
    if (loading) return

    setLoading(true)
    try {
      if (subscriptions[botId as keyof typeof subscriptions]) {
        // Handle unsubscribe - redirect to customer portal
        const response = await fetch('/api/stripe/portal', {
          method: 'POST',
        })

        if (response.ok) {
          const { url } = await response.json()
          window.location.href = url
        } else {
          toast.error('Failed to open billing portal')
        }
      } else {
        // Handle subscribe - redirect to Stripe checkout
        const response = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ planId: botId }),
        })

        if (response.ok) {
          const { url } = await response.json()
          window.location.href = url
        } else {
          toast.error('Failed to start checkout')
        }
      }
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleManage = async () => {
    if (loading) return

    setLoading(true)
    try {
      const response = await fetch('/api/stripe/portal', {
        method: 'POST',
      })

      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      } else {
        toast.error('Failed to open billing portal')
      }
    } catch (error) {
      console.error('Portal error:', error)
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="px-8 py-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Dashboard</h1>
            <p className="text-gray-400 text-lg">Welcome back! Here&apos;s your FX trading overview.</p>
          </div>
          <Badge className="bg-green-600/20 text-green-400 border-green-600/30 px-4 py-2">
            All Systems Active
          </Badge>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-300">Total Balance</CardTitle>
              <DollarSign className="h-5 w-5 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${stats.totalBalance.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-1">+2.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-300">Total Profit</CardTitle>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">+${stats.totalProfit.toLocaleString()}</div>
              <p className="text-xs text-gray-400 mt-1">+{stats.profitPercentage}% this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-300">Active Bots</CardTitle>
              <Bot className="h-5 w-5 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeBots}</div>
              <p className="text-xs text-gray-400 mt-1">Currently subscribed</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-300">Performance</CardTitle>
              <Activity className="h-5 w-5 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">94%</div>
              <p className="text-xs text-gray-400 mt-1">Success rate this week</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Live Alerts Section */}
      {hasActiveSubscription && (
        <div className="px-8 pb-10">
          <Card className="bg-blue-600/90 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="p-4 bg-white/20 rounded-full">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Join Our Live Alerts Channel</h3>
                    <p className="text-blue-100 text-base">Get real-time trading signals and market insights from our experts</p>
                  </div>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3">
                  Join Channel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Trading Bots Section */}
      <div className="px-8 pb-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Trading Bots</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {bots.map((bot) => (
              <Card key={bot.id} className="bg-white/10 border-white/20 backdrop-blur-sm relative hover:bg-white/15 transition-all p-2">
                {bot.popular && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
                      ⭐ Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-6 pt-6 px-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <TrendingUp className="h-7 w-7 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-white mb-1">{bot.name}</CardTitle>
                        <CardDescription className="text-gray-300 text-base">{bot.subtitle}</CardDescription>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4 leading-relaxed">{bot.description}</p>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-6">
                  {/* Performance Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-400 mb-2">Avg. Performance</p>
                      <p className="text-3xl font-bold text-green-400">{bot.avgPerformance}</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-400 mb-2">Avg. Monthly Profit</p>
                      <p className="text-3xl font-bold text-green-400">{bot.avgMonthlyProfit}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm text-gray-400 mb-3">Features:</p>
                    <div className="flex flex-wrap gap-3">
                      {bot.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/10 text-gray-300 border-white/20 px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Subscription Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/20">
                    <div className="text-xl font-semibold text-white">
                      {bot.price}<span className="text-base text-gray-400">/month</span>
                    </div>
                    <div className="flex space-x-3">
                      {subscriptions[bot.id as keyof typeof subscriptions] ? (
                        <>
                          <Button
                            variant="outline"
                            size="default"
                            className="border-white/30 text-gray-300 hover:bg-white/10 px-4 py-2"
                            onClick={() => handleSubscription(bot.id)}
                            disabled={loading}
                          >
                            Unsubscribe
                          </Button>
                          <Button
                            size="default"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                            onClick={handleManage}
                            disabled={loading}
                          >
                            <Settings className="h-4 w-4 mr-2" />
                            Manage
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="default"
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                          onClick={() => handleSubscription(bot.id)}
                          disabled={loading}
                        >
                          {loading ? 'Processing...' : 'Subscribe'}
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
    </div>
  )
}

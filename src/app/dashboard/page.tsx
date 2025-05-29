"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, DollarSign, Bot, Activity, Users } from "lucide-react"
import { PortfolioChart } from "@/components/dashboard/portfolio-chart"
import { ProfitLossChart } from "@/components/dashboard/profit-loss-chart"
import { ActiveBotsChart } from "@/components/dashboard/active-bots-chart"
import { CryptoTrendChart } from "@/components/dashboard/crypto-trend-chart"

export default function Dashboard() {
  // Mock data - in real app, this would come from your API
  const stats = {
    totalBalance: 1498.78,
    totalProfit: 324.56,
    profitPercentage: 27.8,
    activeBots: 3,
    totalUsers: 1247
  }

  const portfolioData = [
    { name: "BTC", value: 45, amount: 0.0307247, price: 763.51 },
    { name: "ETH", value: 30, amount: 0.9463890, price: 877.62 },
    { name: "USDT", value: 25, amount: 57.95, price: 57.95 }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's your trading overview.</p>
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
            <p className="text-xs text-gray-400">2 performing above average</p>
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Overview */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Portfolio Overview</CardTitle>
            <CardDescription className="text-gray-300">
              Your current asset allocation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PortfolioChart data={portfolioData} />
          </CardContent>
        </Card>

        {/* Profit & Loss */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Profit and Loss</CardTitle>
            <CardDescription className="text-gray-300">
              Daily performance over the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfitLossChart />
          </CardContent>
        </Card>

        {/* Active Bots */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Active Bots</CardTitle>
            <CardDescription className="text-gray-300">
              Your trading bots performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ActiveBotsChart />
          </CardContent>
        </Card>

        {/* Crypto Trends */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Top Cryptos</CardTitle>
            <CardDescription className="text-gray-300">
              Trending cryptocurrencies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CryptoTrendChart />
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-gray-300">
            Manage your trading bots and account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Bot className="mr-2 h-4 w-4" />
              Add New Bot
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <DollarSign className="mr-2 h-4 w-4" />
              Withdraw Funds
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

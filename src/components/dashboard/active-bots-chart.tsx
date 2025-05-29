"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bot, TrendingUp, TrendingDown } from "lucide-react"

const botsData = [
  {
    id: 1,
    name: "FX 10° RANGE",
    strategy: "Balanced FX trading",
    performance: 94.2,
    profit: 156.78,
    status: "active",
    trend: "up"
  },
  {
    id: 2,
    name: "FX 5° RANGE",
    strategy: "Conservative FX trading",
    performance: 87.5,
    profit: 89.34,
    status: "active",
    trend: "up"
  },
  {
    id: 3,
    name: "3D FX FUND",
    strategy: "Premium fund strategy",
    performance: 76.8,
    profit: 45.23,
    status: "active",
    trend: "down"
  }
]

export function ActiveBotsChart() {
  return (
    <div className="space-y-4">
      {botsData.map((bot) => (
        <div key={bot.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-600/20">
                <Bot className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">{bot.name}</h4>
                <p className="text-gray-400 text-sm">{bot.strategy}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {bot.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-400" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400" />
              )}
              <Badge
                className={`${
                  bot.status === "active"
                    ? "bg-green-600/20 text-green-400 border-green-600/30"
                    : "bg-gray-600/20 text-gray-400 border-gray-600/30"
                }`}
              >
                {bot.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Performance</span>
              <span className="text-white">{bot.performance}%</span>
            </div>
            <Progress
              value={bot.performance}
              className="h-2 bg-white/10"
            />
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="text-gray-400 text-sm">Profit</span>
            <span className={`font-medium ${
              bot.profit > 0 ? "text-green-400" : "text-red-400"
            }`}>
              +${bot.profit.toFixed(2)}
            </span>
          </div>
        </div>
      ))}

      <div className="text-center pt-2">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
          SHOW MORE
        </button>
      </div>
    </div>
  )
}

"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

const cryptoData = [
  {
    name: "Bitcoin (BTC)",
    symbol: "BTC",
    price: 43489.00,
    change: 2.84,
    changePercent: 6.98,
    data: [
      { value: 41000 }, { value: 41500 }, { value: 42000 }, 
      { value: 41800 }, { value: 42500 }, { value: 43000 }, { value: 43489 }
    ]
  },
  {
    name: "Ethereum (ETH)", 
    symbol: "ETH",
    price: 2847.32,
    change: -1.23,
    changePercent: -0.43,
    data: [
      { value: 2900 }, { value: 2850 }, { value: 2800 }, 
      { value: 2820 }, { value: 2860 }, { value: 2840 }, { value: 2847 }
    ]
  },
  {
    name: "Litecoin (LTC)",
    symbol: "LTC", 
    price: 73.45,
    change: 1.23,
    changePercent: 1.70,
    data: [
      { value: 70 }, { value: 71 }, { value: 72 }, 
      { value: 71.5 }, { value: 72.8 }, { value: 73.2 }, { value: 73.45 }
    ]
  }
]

export function CryptoTrendChart() {
  return (
    <div className="space-y-4">
      {cryptoData.map((crypto, index) => (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {crypto.symbol.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">{crypto.symbol}</h4>
              <p className="text-gray-400 text-xs">{crypto.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Mini Chart */}
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={crypto.data}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={crypto.changePercent > 0 ? "#10B981" : "#EF4444"}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Price and Change */}
            <div className="text-right">
              <div className="text-white font-medium text-sm">
                ${crypto.price.toLocaleString()}
              </div>
              <div className={`flex items-center text-xs ${
                crypto.changePercent > 0 ? "text-green-400" : "text-red-400"
              }`}>
                {crypto.changePercent > 0 ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {crypto.changePercent > 0 ? "+" : ""}{crypto.changePercent.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-2">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
          EXPLORE CHARTS
        </button>
      </div>
    </div>
  )
}

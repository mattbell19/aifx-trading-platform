"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", profit: 45.2, loss: -12.1 },
  { day: "Tue", profit: 67.8, loss: -8.5 },
  { day: "Wed", profit: 23.4, loss: -15.2 },
  { day: "Thu", profit: 89.1, loss: -5.7 },
  { day: "Fri", profit: 56.3, loss: -18.9 },
  { day: "Sat", profit: 78.5, loss: -9.3 },
  { day: "Sun", profit: 92.7, loss: -6.1 },
]

export function ProfitLossChart() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-white/10 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{label}</p>
          <p className="text-green-400">
            Profit: +${payload[0]?.value?.toFixed(2)}
          </p>
          <p className="text-red-400">
            Loss: ${payload[1]?.value?.toFixed(2)}
          </p>
          <p className="text-blue-400">
            Net: ${(payload[0]?.value + payload[1]?.value).toFixed(2)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="profit" fill="#10B981" radius={[2, 2, 0, 0]} />
          <Bar dataKey="loss" fill="#EF4444" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

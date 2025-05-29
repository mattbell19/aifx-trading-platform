"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, TrendingUp, DollarSign, BarChart3 } from "lucide-react"
import { toast } from "sonner"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

const quickQuestions = [
  "What's the best trading strategy for beginners?",
  "How do I optimize my portfolio?",
  "Which bot should I choose for Bitcoin?",
  "What are the current market trends?"
]

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI trading assistant. I can help you with trading strategies, market analysis, and bot recommendations. What would you like to know?",
      sender: "ai",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      // Simulate AI response - in real app, this would call your AI API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content),
        sender: "ai",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiResponse])
    } catch (error) {
      toast.error("Failed to get AI response")
    } finally {
      setIsLoading(false)
    }
  }

  const getAIResponse = (userMessage: string): string => {
    // Simple mock responses - in real app, this would be your AI service
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes("strategy") || lowerMessage.includes("trading")) {
      return "For beginners, I recommend starting with a DCA (Dollar-Cost Averaging) strategy. It's less risky and helps smooth out market volatility. Our DCA Master bot is perfect for this approach and has shown consistent 87.5% performance."
    }
    
    if (lowerMessage.includes("portfolio") || lowerMessage.includes("optimize")) {
      return "Portfolio optimization depends on your risk tolerance. I suggest diversifying across 3-5 major cryptocurrencies with 60% BTC, 25% ETH, and 15% in altcoins. Our Grid Trading Pro bot can help rebalance automatically."
    }
    
    if (lowerMessage.includes("bitcoin") || lowerMessage.includes("btc")) {
      return "For Bitcoin trading, I recommend the Grid Trading Pro bot. It's specifically optimized for BTC's volatility patterns and has achieved 94.2% success rate. The current market shows strong support at $42,000."
    }
    
    if (lowerMessage.includes("market") || lowerMessage.includes("trend")) {
      return "Current market trends show bullish momentum for major cryptocurrencies. Bitcoin is testing resistance at $44,000, while Ethereum shows strong support above $2,800. This could be a good time for accumulation strategies."
    }
    
    return "That's a great question! Based on current market conditions and your portfolio, I'd recommend focusing on risk management and diversification. Would you like me to analyze your specific trading goals or suggest a bot strategy?"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputMessage)
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">AI Trading Assistant</h1>
        <p className="text-gray-400">Get personalized trading advice and market insights</p>
      </div>

      {/* Quick Questions */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-6">
        <CardHeader>
          <CardTitle className="text-white text-lg">Quick Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-left h-auto p-3 justify-start"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Messages */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    message.sender === "user" 
                      ? "bg-blue-600" 
                      : "bg-gradient-to-r from-purple-500 to-blue-500"
                  }`}>
                    {message.sender === "user" ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white/10 text-white border border-white/10 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Message Input */}
          <div className="border-t border-white/10 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about trading..."
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isLoading || !inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      {/* AI Features */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-white font-medium">Market Analysis</h3>
            <p className="text-gray-400 text-sm">Real-time market insights</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <BarChart3 className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-medium">Strategy Advice</h3>
            <p className="text-gray-400 text-sm">Personalized recommendations</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-white font-medium">Risk Management</h3>
            <p className="text-gray-400 text-sm">Portfolio optimization</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

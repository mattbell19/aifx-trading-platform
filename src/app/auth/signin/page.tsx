"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Eye, EyeOff, Star } from "lucide-react"
import { toast } from "sonner"
import { Footer } from "@/components/footer"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error("Invalid credentials")
      } else {
        toast.success("Welcome back!")
        router.push("/dashboard")
      }
    } catch {
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AIFx</span>
            </Link>
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

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left side - Content */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900 p-12 flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-white mb-6">
              Welcome back, trader.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Continue your journey to financial freedom with our AI-powered trading bots.
            </p>

            {/* Phone mockup placeholder */}
            <div className="relative mb-8">
              <div className="w-64 h-96 bg-slate-800 rounded-3xl p-4 mx-auto">
                <div className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-900 rounded-2xl p-4">
                  <div className="text-white text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Portfolio</span>
                      <span>$18,247.50</span>
                    </div>
                    <div className="h-32 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400">📈 +24.5% Today</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Active Bots</span>
                        <span className="text-blue-400">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Profit</span>
                        <span className="text-green-400">+$4,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="text-green-400">94.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Trusted by <span className="italic">300+</span> traders worldwide
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.2 out of 5</span>
                <span className="text-gray-300">Trustpilot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign in to your account</h2>
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                  Create one
                </Link>
              </p>
            </div>



            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <span>🔒 The page is encrypted with https</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-2">
                <span>🔐 You use 2FA (multi factor auth)</span>
              </div>
            </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

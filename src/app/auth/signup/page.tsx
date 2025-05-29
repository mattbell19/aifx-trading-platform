"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Eye, EyeOff, Star } from "lucide-react"
import { toast } from "sonner"
import { Footer } from "@/components/footer"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      toast.error("Passwords don't match")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      if (response.ok) {
        toast.success("Account created successfully!")

        // Automatically sign in the user
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })

        if (result?.ok) {
          toast.success("Welcome to AIFx!")
          router.push("/dashboard")
        } else {
          toast.error("Account created but sign in failed. Please sign in manually.")
          router.push("/auth/signin")
        }
      } else {
        const data = await response.json()
        toast.error(data.message || "Something went wrong")
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
              You're in good company.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Thousands of other traders already joined our mission to change the way the world trades.
            </p>

            {/* Phone mockup placeholder */}
            <div className="relative mb-8">
              <div className="w-64 h-96 bg-slate-800 rounded-3xl p-4 mx-auto">
                <div className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-900 rounded-2xl p-4">
                  <div className="text-white text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Portfolio</span>
                      <span>$12,847.50</span>
                    </div>
                    <div className="h-32 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400">📈 Trading Chart</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>EUR/USD</span>
                        <span className="text-green-400">+2.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GBP/JPY</span>
                        <span className="text-green-400">+1.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>USD/CAD</span>
                        <span className="text-red-400">-0.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Traders <span className="italic">love</span> AIFx
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h2>
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                  Log in
                </Link>
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                variant="outline"
                className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => signIn('google')}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
                Continue with Apple
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">OR SIGN UP WITH EMAIL</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

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

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to AIFx's{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Subscribe to the AIFx newsletter
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create an account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.2 out of 5</span>
                <span>⭐ Trustpilot</span>
              </div>
            </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

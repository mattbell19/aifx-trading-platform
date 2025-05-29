"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Headphones,
  FileText,
  Users,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Message sent successfully! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      value: "support@aifx.com",
      action: "mailto:support@aifx.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us now",
      value: "Available 24/7",
      action: "#"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      value: "123 Trading St, Financial District, NY 10004",
      action: "#"
    }
  ]

  const supportOptions = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with platform issues, bot setup, and technical questions.",
      hours: "24/7 Available"
    },
    {
      icon: FileText,
      title: "Account & Billing",
      description: "Questions about subscriptions, payments, and account management.",
      hours: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Users,
      title: "Sales & Partnerships",
      description: "Interested in enterprise solutions or partnership opportunities.",
      hours: "Mon-Fri 9AM-6PM EST"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Have questions about AIFx? Our expert support team is here to help you 
            succeed with automated trading. Reach out anytime.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What can we help you with?"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your question or how we can help..."
                      rows={6}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-blue-600/20 rounded-lg">
                            <info.icon className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-sm text-gray-400 mb-2">{info.description}</p>
                            <a 
                              href={info.action}
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Support Options */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Support Options</h2>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-green-600/20 rounded-lg">
                            <option.icon className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-white">{option.title}</h3>
                              <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {option.hours}
                              </Badge>
                            </div>
                            <p className="text-gray-300 text-sm">{option.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-8 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Quick Answers?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Check out our comprehensive FAQ section for instant answers to common questions.
          </p>
          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
            <Link href="/faq">
              View FAQ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful traders using AIFx automated trading bots.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            <Link href="/auth/signup">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

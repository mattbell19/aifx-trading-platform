"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Bell, Shield, Key, Trash2 } from "lucide-react"
import { toast } from "sonner"

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567"
  })

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    trading: true,
    security: true
  })

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true
  })

  const handleProfileUpdate = () => {
    toast.success("Profile updated successfully!")
  }

  const handleNotificationUpdate = () => {
    toast.success("Notification preferences updated!")
  }

  const handleSecurityUpdate = () => {
    toast.success("Security settings updated!")
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and security</p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-blue-400" />
            <CardTitle className="text-white">Profile Information</CardTitle>
          </div>
          <CardDescription className="text-gray-300">
            Update your personal information and profile picture
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-blue-600 text-white text-xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Change Photo
              </Button>
              <p className="text-gray-400 text-sm mt-1">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone Number</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
          </div>

          <Button onClick={handleProfileUpdate} className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-blue-400" />
            <CardTitle className="text-white">Notifications</CardTitle>
          </div>
          <CardDescription className="text-gray-300">
            Choose how you want to be notified about account activity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-gray-400 text-sm">Receive notifications via email</p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-gray-400 text-sm">Receive push notifications in browser</p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">SMS Notifications</p>
                <p className="text-gray-400 text-sm">Receive important alerts via SMS</p>
              </div>
              <Switch
                checked={notifications.sms}
                onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
              />
            </div>

            <Separator className="bg-white/10" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Trading Alerts</p>
                <p className="text-gray-400 text-sm">Bot performance and trade notifications</p>
              </div>
              <Switch
                checked={notifications.trading}
                onCheckedChange={(checked) => setNotifications({...notifications, trading: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Security Alerts</p>
                <p className="text-gray-400 text-sm">Login attempts and security events</p>
              </div>
              <Switch
                checked={notifications.security}
                onCheckedChange={(checked) => setNotifications({...notifications, security: checked})}
              />
            </div>
          </div>

          <Button onClick={handleNotificationUpdate} className="bg-blue-600 hover:bg-blue-700">
            Save Preferences
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-400" />
            <CardTitle className="text-white">Security</CardTitle>
          </div>
          <CardDescription className="text-gray-300">
            Manage your account security and authentication
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Two-Factor Authentication</p>
                <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
              </div>
              <Switch
                checked={security.twoFactor}
                onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Login Alerts</p>
                <p className="text-gray-400 text-sm">Get notified of new login attempts</p>
              </div>
              <Switch
                checked={security.loginAlerts}
                onCheckedChange={(checked) => setSecurity({...security, loginAlerts: checked})}
              />
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Key className="mr-2 h-4 w-4" />
              Change Password
            </Button>
            
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Key className="mr-2 h-4 w-4" />
              Generate API Keys
            </Button>
          </div>

          <Button onClick={handleSecurityUpdate} className="bg-blue-600 hover:bg-blue-700">
            Update Security
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-red-900/20 border-red-500/30 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Trash2 className="h-5 w-5 text-red-400" />
            <CardTitle className="text-white">Danger Zone</CardTitle>
          </div>
          <CardDescription className="text-gray-300">
            Irreversible and destructive actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Delete Account</p>
              <p className="text-gray-400 text-sm">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

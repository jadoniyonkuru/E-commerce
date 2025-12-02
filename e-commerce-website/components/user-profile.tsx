"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, Package, MapPin, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/app/auth/providers"

export default function UserProfile() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("orders")

  if (!user) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground mb-4">Please sign in to view your profile</p>
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
          </Link>
        </div>
      </main>
    )
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}!</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
            <LogOut size={16} /> Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 border-b-2 transition ${
              activeTab === "orders"
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Package className="inline mr-2" size={18} /> Orders
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            className={`px-4 py-2 border-b-2 transition ${
              activeTab === "addresses"
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <MapPin className="inline mr-2" size={18} /> Addresses
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 border-b-2 transition ${
              activeTab === "settings"
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Settings className="inline mr-2" size={18} /> Settings
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {user.orders.length > 0 ? (
              user.orders.map((order) => (
                <div key={order.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">${order.total.toFixed(2)}</p>
                      <p
                        className={`text-sm font-medium ${order.status === "Delivered" ? "text-green-500" : "text-blue-500"}`}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-card border border-border rounded-lg">
                <p className="text-muted-foreground mb-4">No orders yet</p>
                <Link href="/products">
                  <Button className="bg-primary hover:bg-primary/90">Start Shopping</Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div className="space-y-4">
            {user.savedAddresses.length > 0 ? (
              user.savedAddresses.map((addr) => (
                <div key={addr.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{addr.label}</p>
                      <p className="text-sm text-muted-foreground">{addr.address}</p>
                      <p className="text-sm text-muted-foreground">
                        {addr.city}, {addr.zipCode}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-card border border-border rounded-lg">
                <p className="text-muted-foreground mb-4">No saved addresses</p>
                <Button className="bg-primary hover:bg-primary/90">Add Address</Button>
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl">
            <h3 className="text-xl font-bold mb-6">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <p className="text-foreground">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <p className="text-foreground">{user.email}</p>
              </div>
              {user.phone && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <p className="text-foreground">{user.phone}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

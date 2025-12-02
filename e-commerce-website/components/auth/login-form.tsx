"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/app/auth/providers"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoading, user } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      setTimeout(() => {
        if (email === "admin@shophub.com") {
          router.push("/admin")
        } else {
          router.push("/profile")
        }
      }, 0)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your ShopHub account</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email Address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-secondary border-border text-foreground"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-secondary border-border text-foreground"
                required
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 mt-6">
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Create one
              </Link>
            </p>
          </div>

          <div className="mt-4 p-3 bg-secondary rounded-md text-xs text-muted-foreground space-y-2">
            <div>
              <p className="font-medium mb-1">Customer Demo Credentials:</p>
              <p>Email: demo@shophub.com</p>
              <p>Password: Any password</p>
            </div>
            <div className="border-t border-border pt-2">
              <p className="font-medium mb-1">Admin Demo Credentials:</p>
              <p>Email: admin@shophub.com</p>
              <p>Password: Any password</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

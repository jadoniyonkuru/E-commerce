"use client"

import type React from "react"

import { createContext, useContext, useState, useCallback } from "react"

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  isAdmin?: boolean
  savedAddresses: Array<{ id: string; label: string; address: string; city: string; zipCode: string }>
  orders: Array<{ id: string; date: string; total: number; status: string }>
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (updates: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const isAdmin = email === "admin@shophub.com"

      // Mock user data
      const mockUser: User = {
        id: isAdmin ? "admin-1" : "1",
        name: isAdmin ? "Admin User" : "John Doe",
        email,
        phone: "+1-555-123-4567",
        address: "123 Main St",
        isAdmin,
        savedAddresses: [{ id: "1", label: "Home", address: "123 Main St", city: "New York", zipCode: "10001" }],
        orders: [
          { id: "ORD-001", date: "2025-11-15", total: 249.99, status: "Delivered" },
          { id: "ORD-002", date: "2025-11-10", total: 89.99, status: "Shipped" },
        ],
      }
      setUser(mockUser)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signup = useCallback(async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser: User = {
        id: Math.random().toString(),
        name,
        email,
        isAdmin: false,
        savedAddresses: [],
        orders: [],
      }
      setUser(newUser)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const updateProfile = useCallback((updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null))
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

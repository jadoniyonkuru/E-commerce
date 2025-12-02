"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/app/providers"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          ShopHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-foreground hover:text-primary transition">
            Products
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="text-foreground hover:text-primary transition p-2">
            <Search size={20} />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="text-foreground hover:text-primary transition p-2"
            >
              <User size={20} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg">
                <Link href="/login" className="block px-4 py-2 hover:bg-secondary rounded-t-md">
                  Sign In
                </Link>
                <Link href="/signup" className="block px-4 py-2 hover:bg-secondary">
                  Create Account
                </Link>
                <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-b-md flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          <Link href="/cart" className="relative">
            <button className="text-foreground hover:text-primary transition p-2">
              <ShoppingCart size={20} />
            </button>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <Link href="/products" className="block px-4 py-2 hover:bg-card transition">
            Products
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-card transition">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-card transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

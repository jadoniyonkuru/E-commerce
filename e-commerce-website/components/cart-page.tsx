"use client"

import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/app/providers"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          <div className="text-center py-20 bg-card rounded-lg border border-border">
            <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-6 border-b border-border last:border-b-0">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={`/.jpg?key=lb4u0&height=100&width=100&query=${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">${item.price.toFixed(2)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-secondary hover:bg-border rounded text-sm"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-secondary rounded text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-secondary hover:bg-border rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price and Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80 p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                    <p className="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link href="/products">
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-2 mb-4 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">${(totalPrice * 1.1).toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 mb-3">Proceed to Checkout</Button>
              </Link>

              {/* Clear Cart */}
              <Button variant="outline" onClick={clearCart} className="w-full bg-transparent">
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

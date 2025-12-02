"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/app/providers"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1) // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  if (items.length === 0 && step !== 3) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.firstName && formData.lastName && formData.address && formData.city && formData.zipCode) {
      setStep(2)
    }
  }

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      const order = Math.floor(100000 + Math.random() * 900000)
      setOrderNumber(order.toString())
      clearCart()
      setStep(3)
      setIsProcessing(false)
    }, 2000)
  }

  if (step === 3) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center">
            <CheckCircle size={64} className="text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Order Confirmed</h1>
            <p className="text-muted-foreground mb-8">Thank you for your purchase! Your order has been received.</p>

            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="text-3xl font-bold text-primary mb-6">{orderNumber}</p>

              <div className="text-left space-y-3 py-6 border-y border-border">
                <p className="text-sm">
                  <span className="text-muted-foreground">Email:</span> {formData.email}
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Delivery Address:</span> {formData.address}, {formData.city}{" "}
                  {formData.zipCode}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                You will receive an email confirmation shortly with tracking information.
              </p>
              <Link href="/products">
                <Button className="bg-primary hover:bg-primary/90 w-full">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
          >
            1
          </div>
          <ChevronRight className={step >= 2 ? "text-primary" : "text-muted-foreground"} />
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
          >
            2
          </div>
          <ChevronRight className={step >= 3 ? "text-primary" : "text-muted-foreground"} />
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
          >
            3
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                  <form onSubmit={handleSubmitShipping} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-secondary border-border text-foreground"
                        required
                      />
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-secondary border-border text-foreground"
                        required
                      />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-foreground"
                      required
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-foreground"
                      required
                    />
                    <Input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-foreground"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="bg-secondary border-border text-foreground"
                        required
                      />
                      <Input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="bg-secondary border-border text-foreground"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-6">
                      Continue to Payment
                    </Button>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                  <form onSubmit={handleSubmitPayment} className="space-y-4">
                    <Input
                      type="text"
                      name="cardName"
                      placeholder="Name on Card"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="bg-secondary border-border text-foreground"
                      required
                    />
                    <Input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      maxLength={16}
                      className="bg-secondary border-border text-foreground font-mono"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        maxLength={5}
                        className="bg-secondary border-border text-foreground"
                        required
                      />
                      <Input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength={4}
                        className="bg-secondary border-border text-foreground font-mono"
                        required
                      />
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-4">
                        This is a demo. Use card number: 4242 4242 4242 4242 for testing
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button type="submit" disabled={isProcessing} className="flex-1 bg-primary hover:bg-primary/90">
                        {isProcessing ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>

              {/* Items */}
              <div className="space-y-3 mb-4 pb-4 border-b border-border max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Totals */}
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
              <div className="flex justify-between items-center">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

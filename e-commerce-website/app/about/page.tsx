import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - ShopHub",
  description: "Learn about ShopHub and our mission",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">About ShopHub</h1>
        <p className="text-muted-foreground text-lg mb-8">Your trusted online marketplace for premium products</p>

        <div className="space-y-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At ShopHub, we believe that shopping should be easy, enjoyable, and accessible to everyone. Our mission is
              to provide a curated selection of high-quality products at competitive prices, with exceptional customer
              service and fast, reliable shipping.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Products Available</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose ShopHub?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                Wide selection of premium products across all categories
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                Competitive prices with regular discounts and promotions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                Fast and free shipping on orders over $50
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                30-day money-back guarantee on all products
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                Secure checkout with multiple payment options
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h2>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90">Browse Products</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

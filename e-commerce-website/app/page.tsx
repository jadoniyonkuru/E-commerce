import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"

export const metadata = {
  title: "ShopHub - Modern E-Commerce Store",
  description: "Discover amazing products with ShopHub. Fast shipping, secure checkout, and exclusive deals.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">Get exclusive deals and updates on new products</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

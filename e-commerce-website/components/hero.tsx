import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Discover Amazing Products for Your Lifestyle
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Shop from a curated collection of premium products. Fast shipping, secure checkout, and 30-day returns.
            </p>
            <div className="flex gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Now
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 bg-secondary rounded-lg overflow-hidden">
            <img
              src="/modern-products-display.jpg"
              alt="Featured products showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

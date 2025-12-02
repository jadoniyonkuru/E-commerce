"use client"

import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCart } from "@/app/providers"

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    rating: 4.8,
    image: "electronics",
    category: "Electronics",
  },
  { id: 2, name: "Classic Denim Jacket", price: 89.99, rating: 4.6, image: "fashion", category: "Fashion" },
  { id: 3, name: "Smart Home Hub", price: 149.99, rating: 4.7, image: "home", category: "Home & Garden" },
  { id: 4, name: "Professional Yoga Mat", price: 49.99, rating: 4.9, image: "sports", category: "Sports" },
  { id: 5, name: "Skincare Essentials Set", price: 79.99, rating: 4.5, image: "beauty", category: "Beauty" },
  { id: 6, name: "Bestseller Book Collection", price: 34.99, rating: 4.8, image: "books", category: "Books" },
]

export default function FeaturedProducts() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-primary hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <img
                  src={`/.jpg?key=lb4u0&height=200&width=300&query=${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

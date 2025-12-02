"use client"

import { useState, useMemo } from "react"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/app/providers"

// Mock product data
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    rating: 4.8,
    stock: 15,
    image: "electronics-1",
  },
  {
    id: 2,
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    category: "Electronics",
    rating: 4.6,
    stock: 8,
    image: "electronics-2",
  },
  { id: 3, name: "4K Webcam", price: 129.99, category: "Electronics", rating: 4.7, stock: 12, image: "electronics-3" },
  { id: 4, name: "USB-C Hub", price: 59.99, category: "Electronics", rating: 4.5, stock: 20, image: "electronics-4" },
  {
    id: 5,
    name: "Classic Denim Jacket",
    price: 89.99,
    category: "Fashion",
    rating: 4.6,
    stock: 10,
    image: "fashion-1",
  },
  {
    id: 6,
    name: "Premium Cotton T-Shirt",
    price: 39.99,
    category: "Fashion",
    rating: 4.7,
    stock: 25,
    image: "fashion-2",
  },
  { id: 7, name: "Designer Sunglasses", price: 159.99, category: "Fashion", rating: 4.8, stock: 5, image: "fashion-3" },
  {
    id: 8,
    name: "Comfortable Sneakers",
    price: 119.99,
    category: "Fashion",
    rating: 4.5,
    stock: 18,
    image: "fashion-4",
  },
  { id: 9, name: "Smart Home Hub", price: 149.99, category: "Home", rating: 4.7, stock: 9, image: "home-1" },
  { id: 10, name: "LED Smart Lights", price: 79.99, category: "Home", rating: 4.6, stock: 14, image: "home-2" },
  { id: 11, name: "Modern Desk Lamp", price: 69.99, category: "Home", rating: 4.4, stock: 11, image: "home-3" },
  { id: 12, name: "Organizer Set", price: 49.99, category: "Home", rating: 4.5, stock: 22, image: "home-4" },
  {
    id: 13,
    name: "Professional Yoga Mat",
    price: 49.99,
    category: "Sports",
    rating: 4.9,
    stock: 16,
    image: "sports-1",
  },
  { id: 14, name: "Dumbbells Set", price: 99.99, category: "Sports", rating: 4.7, stock: 7, image: "sports-2" },
  { id: 15, name: "Running Shoes", price: 129.99, category: "Sports", rating: 4.8, stock: 13, image: "sports-3" },
  { id: 16, name: "Water Bottle", price: 29.99, category: "Sports", rating: 4.6, stock: 30, image: "sports-4" },
  {
    id: 17,
    name: "Skincare Essentials Set",
    price: 79.99,
    category: "Beauty",
    rating: 4.5,
    stock: 11,
    image: "beauty-1",
  },
  { id: 18, name: "Natural Face Mask", price: 34.99, category: "Beauty", rating: 4.7, stock: 19, image: "beauty-2" },
  { id: 19, name: "Organic Hair Serum", price: 44.99, category: "Beauty", rating: 4.6, stock: 14, image: "beauty-3" },
  {
    id: 20,
    name: "Premium Lipstick Collection",
    price: 59.99,
    category: "Beauty",
    rating: 4.4,
    stock: 8,
    image: "beauty-4",
  },
]

const CATEGORIES = ["All", "Electronics", "Fashion", "Home", "Sports", "Beauty"]
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "Over $200", min: 200, max: Number.POSITIVE_INFINITY },
]
const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Popular", value: "popular" },
]

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const { addItem } = useCart()

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = ALL_PRODUCTS

    // Filter by category
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory)
    }

    // Filter by search
    if (searchQuery) {
      products = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Filter by price
    products = products.filter((p) => p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max)

    // Sort
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        products.sort((a, b) => b.price - a.price)
        break
      case "rating":
        products.sort((a, b) => b.rating - a.rating)
        break
      case "popular":
        products.sort((a, b) => b.stock - a.stock)
        break
      case "newest":
      default:
        break
    }

    return products
  }, [selectedCategory, selectedPriceRange, searchQuery, sortBy])

  const handleAddToCart = (product: (typeof ALL_PRODUCTS)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <aside className={`lg:block ${isMobileFiltersOpen ? "block" : "hidden"}`}>
        <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
          <h3 className="font-bold text-lg mb-4">Filters</h3>

          {/* Search */}
          <div className="mb-6">
            <label className="text-sm font-semibold mb-2 block">Search</label>
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-secondary border-border text-foreground"
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3">Category</h4>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <label key={category} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3">Price Range</h4>
            <div className="space-y-2">
              {PRICE_RANGES.map((range) => (
                <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value={range.label}
                    checked={selectedPriceRange.label === range.label}
                    onChange={() => setSelectedPriceRange(range)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset Filters */}
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory("All")
              setSelectedPriceRange(PRICE_RANGES[0])
              setSearchQuery("")
            }}
            className="w-full"
          >
            Clear Filters
          </Button>
        </div>
      </aside>

      {/* Products Grid */}
      <div className="lg:col-span-3">
        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Showing {filteredProducts.length} products</p>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-card border border-border rounded-md text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition group"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <img
                    src={`/.jpg?key=lb4u0&height=200&width=300&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {product.stock < 10 && (
                    <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Low Stock
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">{product.category}</p>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products found matching your criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedPriceRange(PRICE_RANGES[0])
                setSearchQuery("")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import ProductCatalog from "@/components/product-catalog"

export const metadata: Metadata = {
  title: "Products - ShopHub",
  description: "Browse our full collection of premium products",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Explore our full collection of carefully selected items</p>
        </div>
        <ProductCatalog />
      </div>
    </main>
  )
}

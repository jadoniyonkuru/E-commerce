import Link from "next/link"

const categories = [
  { name: "Electronics", slug: "electronics", icon: "📱" },
  { name: "Fashion", slug: "fashion", icon: "👕" },
  { name: "Home & Garden", slug: "home", icon: "🏠" },
  { name: "Sports", slug: "sports", icon: "⚽" },
  { name: "Beauty", slug: "beauty", icon: "💄" },
  { name: "Books", slug: "books", icon: "📚" },
]

export default function Categories() {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products?category=${category.slug}`}>
              <div className="p-6 bg-card rounded-lg hover:bg-secondary transition cursor-pointer border border-border text-center">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-foreground hover:text-primary transition">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

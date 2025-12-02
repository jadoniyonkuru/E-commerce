"use client"

import { useState } from "react"
import { ShoppingCart, Package, Users, TrendingUp, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: number
  stock: number
  category: string
}

interface Order {
  id: string
  customer: string
  total: number
  status: "pending" | "shipped" | "delivered"
  date: string
}

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Premium Wireless Headphones", price: 199.99, stock: 15, category: "Electronics" },
  { id: 2, name: "Classic Denim Jacket", price: 89.99, stock: 10, category: "Fashion" },
  { id: 3, name: "Smart Home Hub", price: 149.99, stock: 9, category: "Home" },
  { id: 4, name: "Professional Yoga Mat", price: 49.99, stock: 16, category: "Sports" },
  { id: 5, name: "Skincare Essentials Set", price: 79.99, stock: 11, category: "Beauty" },
]

const MOCK_ORDERS: Order[] = [
  { id: "ORD-001", customer: "John Doe", total: 249.99, status: "delivered", date: "2025-11-15" },
  { id: "ORD-002", customer: "Jane Smith", total: 89.99, status: "shipped", date: "2025-11-16" },
  { id: "ORD-003", customer: "Bob Johnson", total: 199.99, status: "pending", date: "2025-11-17" },
  { id: "ORD-004", customer: "Alice Brown", total: 349.99, status: "shipped", date: "2025-11-17" },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS)
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS)
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, stock: 0, category: "" })

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const totalOrders = orders.length
  const totalProducts = products.length
  const totalCustomers = 128

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0) {
      const product: Product = {
        id: Math.max(...products.map((p) => p.id), 0) + 1,
        ...newProduct,
        price: Number.parseFloat(newProduct.price.toString()),
        stock: Number.parseInt(newProduct.stock.toString()),
      }
      setProducts([...products, product])
      setNewProduct({ name: "", price: 0, stock: 0, category: "" })
    }
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground text-sm">Manage your store</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 border-b-2 transition font-medium ${
              activeTab === "overview"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 border-b-2 transition font-medium ${
              activeTab === "products"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 border-b-2 transition font-medium ${
              activeTab === "orders"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Orders
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Total Revenue</h3>
                  <TrendingUp className="text-primary" size={20} />
                </div>
                <p className="text-3xl font-bold">${totalRevenue.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Total Orders</h3>
                  <ShoppingCart className="text-primary" size={20} />
                </div>
                <p className="text-3xl font-bold">{totalOrders}</p>
                <p className="text-xs text-muted-foreground mt-2">+8 this week</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Products</h3>
                  <Package className="text-primary" size={20} />
                </div>
                <p className="text-3xl font-bold">{totalProducts}</p>
                <p className="text-xs text-muted-foreground mt-2">All active</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Customers</h3>
                  <Users className="text-primary" size={20} />
                </div>
                <p className="text-3xl font-bold">{totalCustomers}</p>
                <p className="text-xs text-muted-foreground mt-2">+5 this week</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Revenue Trend</h3>
                <div className="h-64 flex items-end justify-around gap-2">
                  {[45, 60, 55, 70, 65, 80, 75].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-primary to-primary/50 rounded"
                      style={{ height: `${height * 2.5}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Order Status</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Delivered</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[45%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Shipped</span>
                      <span>35%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[35%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Pending</span>
                      <span>20%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[20%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-6">
            {/* Add Product Form */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-4">Add New Product</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <Input
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="bg-secondary border-border text-foreground"
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price || ""}
                  onChange={(e) => setNewProduct({ ...newProduct, price: Number.parseFloat(e.target.value) || 0 })}
                  className="bg-secondary border-border text-foreground"
                />
                <Input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock || ""}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: Number.parseInt(e.target.value) || 0 })}
                  className="bg-secondary border-border text-foreground"
                />
                <Button onClick={handleAddProduct} className="bg-primary hover:bg-primary/90">
                  <Plus size={16} className="mr-2" /> Add
                </Button>
              </div>
            </div>

            {/* Products List */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="border-b border-border bg-secondary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Product Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Stock</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-border last:border-b-0 hover:bg-secondary transition"
                    >
                      <td className="px-6 py-4">{product.name}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4 font-bold text-primary">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            product.stock > 10 ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {product.stock} units
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit2 size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-border bg-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Total</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-b-0 hover:bg-secondary transition">
                    <td className="px-6 py-4 font-bold">{order.id}</td>
                    <td className="px-6 py-4">{order.customer}</td>
                    <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                    <td className="px-6 py-4 font-bold text-primary">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "delivered"
                            ? "bg-green-500/20 text-green-400"
                            : order.status === "shipped"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

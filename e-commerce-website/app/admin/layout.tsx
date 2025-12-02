import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard - ShopHub",
  description: "Manage your store",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

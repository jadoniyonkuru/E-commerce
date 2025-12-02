import type { Metadata } from "next"
import CartPage from "@/components/cart-page"

export const metadata: Metadata = {
  title: "Shopping Cart - ShopHub",
  description: "Review and manage your shopping cart",
}

export default function Page() {
  return <CartPage />
}

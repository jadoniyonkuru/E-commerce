import type { Metadata } from "next"
import CheckoutPage from "@/components/checkout-page"

export const metadata: Metadata = {
  title: "Checkout - ShopHub",
  description: "Complete your purchase securely",
}

export default function Page() {
  return <CheckoutPage />
}

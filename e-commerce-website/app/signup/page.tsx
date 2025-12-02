import type { Metadata } from "next"
import SignupForm from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "Create Account - ShopHub",
  description: "Create a new ShopHub account",
}

export default function SignupPage() {
  return <SignupForm />
}

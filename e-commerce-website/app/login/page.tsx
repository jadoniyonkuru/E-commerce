import type { Metadata } from "next"
import LoginForm from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Sign In - ShopHub",
  description: "Sign in to your ShopHub account",
}

export default function LoginPage() {
  return <LoginForm />
}

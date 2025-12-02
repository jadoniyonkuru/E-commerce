import type { Metadata } from "next"
import UserProfile from "@/components/user-profile"

export const metadata: Metadata = {
  title: "My Profile - ShopHub",
  description: "Manage your ShopHub profile and orders",
}

export default function ProfilePage() {
  return <UserProfile />
}

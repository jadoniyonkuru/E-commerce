import type { Metadata } from "next"

export const siteMetadata: Metadata = {
  title: {
    default: "ShopHub - Modern E-Commerce Store",
    template: "%s - ShopHub",
  },
  description: "Shop premium products with fast shipping, secure checkout, and exceptional customer service.",
  keywords: ["ecommerce", "shopping", "products", "online store"],
  authors: [{ name: "ShopHub" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shophub.vercel.app",
    title: "ShopHub - Modern E-Commerce Store",
    description: "Shop premium products with fast shipping, secure checkout, and exceptional customer service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopHub - Modern E-Commerce Store",
    description: "Shop premium products with fast shipping, secure checkout, and exceptional customer service.",
  },
}

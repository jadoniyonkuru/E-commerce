import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/app/providers"
import { Analytics } from "@/components/analytics"
import { AuthProvider } from "@/app/auth/providers"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };

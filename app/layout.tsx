import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import { I18nProvider } from "@/contexts/I18nContext"
import { CartProvider } from "@/contexts/CartContext"

export const metadata: Metadata = {
  title: "Cartify",
  description: "A simple shopping site",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {/* Wrap children in both providers */}
        <I18nProvider>
          <CartProvider>
            <Navbar />
            <main className="container mx-auto px-4 py-6">{children}</main>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  )
}

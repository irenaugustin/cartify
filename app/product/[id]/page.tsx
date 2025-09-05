'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useCart } from "@/contexts/CartContext"
import { useI18n } from "@/contexts/I18nContext"

const sampleProducts = [
  { id: "1", name: "Wireless Headphones", price: 59.99, stock: 5, description: "High-quality wireless headphones.", image: "https://via.placeholder.com/400x400.png?text=Headphones" },
  { id: "2", name: "Smartphone", price: 499.99, stock: 10, description: "Latest smartphone with great camera.", image: "https://via.placeholder.com/400x400.png?text=Smartphone" },
  { id: "3", name: "Sneakers", price: 89.99, stock: 3, description: "Comfortable sneakers for daily wear.", image: "https://via.placeholder.com/400x400.png?text=Sneakers" },
  { id: "4", name: "Lipstick", price: 19.99, stock: 15, description: "Long-lasting matte lipstick.", image: "https://via.placeholder.com/400x400.png?text=Lipstick" },
  { id: "5", name: "Accessories", price: 2.99, stock: 7, description: "Beautiful accessories for luxury look.", image: "https://via.placeholder.com/400x400.png?text=Accessories" },
  { id: "6", name: "Office and School Supplies", price: 15.49, stock: 20, description: "Essential office and school supplies.", image: "https://via.placeholder.com/400x400.png?text=office+and+school+supplies" }
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { language } = useI18n()
  const product = sampleProducts.find(p => p.id === params.id)
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()

  if (!product) return <div>{language === "en" ? "Product not found" : "Bidhaa haipo"}</div>

  return (
    <div className="grid gap-6 md:grid-cols-2 p-4 md:p-8">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-lg shadow w-full md:w-auto"
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-2 text-[#1E90FF]">{product.name}</h1>
        <p className="text-[#FF8C00] font-bold mb-2">${product.price.toFixed(2)}</p>
        <p className={`mb-4 font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
          {product.stock > 0
            ? language === "en" ? "In Stock" : "Kuna Hapo"
            : language === "en" ? "Out of Stock" : "Haipo Hapo"}
        </p>
        <p className="mb-6">{product.description}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <input
            type="number"
            value={qty}
            min={1}
            max={product.stock}
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="w-full sm:w-24 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
            aria-label={`Quantity for ${product.name}`}
          />
          <button
            onClick={() => addToCart(product, qty)}
            className="bg-[#FF8C00] text-white px-4 py-2 rounded hover:bg-[#FFD700] w-full sm:w-auto transition-colors"
          >
            {language === "en" ? "Add to Cart" : "Ongeza Kikapu"}
          </button>
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="bg-[#1E90FF] text-white px-4 py-2 rounded hover:bg-[#00BFFF] w-full sm:w-auto transition-colors"
        >
          {language === "en" ? "Buy Now" : "Nunua Sasa"}
        </button>
      </div>
    </div>
  )
}

'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useCart } from "@/contexts/CartContext"

const sampleProducts = [
  { id: "1", name: "Wireless Headphones", price: 59.99, stock: 5, description: "High-quality wireless headphones.", image: "https://via.placeholder.com/400x400.png?text=Headphones" },
  { id: "2", name: "Smartphone", price: 499.99, stock: 10, description: "Latest smartphone with great camera.", image: "https://via.placeholder.com/400x400.png?text=Smartphone" },
  { id: "3", name: "Sneakers", price: 89.99, stock: 3, description: "Comfortable sneakers for daily wear.", image: "https://via.placeholder.com/400x400.png?text=Sneakers" },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const product = sampleProducts.find(p => p.id === params.id)
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()

  if (!product) return <div>Product not found</div>

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-lg shadow w-full md:w-auto"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-green-600 font-bold mb-2">${product.price}</p>
        <p className="mb-4">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        <p className="mb-6">{product.description}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <input
            type="number"
            value={qty}
            min={1}
            max={product.stock}
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="w-full sm:w-24 border rounded px-2 py-1"
            aria-label={`Quantity for ${product.name}`}
          />
          <button
            onClick={() => addToCart(product, qty)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full sm:w-auto"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

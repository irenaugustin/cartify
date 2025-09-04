'use client'

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

// Sample products with local images
const sampleProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    brand: "SoundX",
    image: "/image/products/headphones.jpg",
  },
  {
    id: "2",
    name: "Smartphone",
    price: 499.99,
    category: "Electronics",
    brand: "PhoneCo",
    image: "/image/products/smartphone.jpg",
  },
  {
    id: "3",
    name: "Sneakers",
    price: 89.99,
    category: "Fashion",
    brand: "StepUp",
    image: "/image/products/sneakers.jpg",
  },
  {
    id: "4",
    name: "Lipstick",
    price: 19.99,
    category: "Beauty",
    brand: "Glam",
    image: "/image/products/lipstick.jpg",
  },
]

export default function ShopPage() {
  const { addToCart } = useCart()
  const [filterCategory, setFilterCategory] = useState<string>("All")
  const [sortOption, setSortOption] = useState<string>("default")

  // Filter products
  const filteredProducts = sampleProducts.filter(product =>
    filterCategory === "All" ? true : product.category === filterCategory
  )

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price
    if (sortOption === "price-desc") return b.price - a.price
    return 0
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shop</h1>

      {/* Filters & Sorting */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="mr-2 font-semibold">Category:</label>
          <select
            id="category"
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>

        {/* Sort Filter */}
        <div>
          <label htmlFor="sort" className="mr-2 font-semibold">Sort By:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {sortedProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <Link href={`/product/${product.id}`} className="flex flex-col items-center">
              <Image
                src={product.image}      // local image from public/images/products/
                alt={product.name}
                width={160}
                height={160}
                className="rounded-lg hover:scale-105 transition"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            </Link>
            <p className="text-green-600 font-bold mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product, 1)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useCart } from "@/contexts/CartContext"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/shop" className="text-green-600 underline">Go shopping</Link></p>
      ) : (
        <div className="grid gap-6">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow">
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="object-cover rounded mr-0 sm:mr-4 mb-2 sm:mb-0"
              />
              <div className="flex-1 w-full">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-green-600 font-bold">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded px-2 py-1"
                    aria-label={`Quantity for ${item.name}`}
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Shipping: $5.00</p>
              <p>Total: ${(subtotal + 5).toFixed(2)}</p>
            </div>
            <Link
              href="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

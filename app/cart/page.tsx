'use client'

import { useCart } from "@/contexts/CartContext"
import Image from "next/image"
import Link from "next/link"
import {
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
  Truck,
  CreditCard,
  Headphones,
  MoreHorizontal,
} from "lucide-react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-6 shadow relative">
        <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          shopping cart <ShoppingCart className="w-6 h-6" />
        </h1>
        {/* Three-dot menu for share */}
        <button
          aria-label="Share cart"
          title="Share cart"
          className="absolute right-4 top-6 text-gray-600 hover:text-black"
        >
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">
            Your cart is empty.{" "}
            <Link href="/shop" className="text-pink-600 underline">
              Go shopping
            </Link>
          </p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items Table */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 font-bold text-white bg-pink-500 py-3 px-4">
                <span>product</span>
                <span>price</span>
                <span>Quantity</span>
                <span>subtotal</span>
              </div>

              {/* Items */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center px-4 py-4 border-b"
                >
                  {/* Product */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                      title={`Remove ${item.name}`}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded object-cover"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>

                  {/* Price */}
                  <div className="font-semibold">${item.price.toFixed(2)}</div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                      title={`Decrease quantity of ${item.name}`}
                      className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center disabled:opacity-50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label={`Increase quantity of ${item.name}`}
                      title={`Increase quantity of ${item.name}`}
                      className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6 h-fit">
              <h2 className="font-bold text-lg mb-4">order summary</h2>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </p>
                <p className="flex justify-between">
                  <span>Sub Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </p>
                <p className="flex justify-between font-bold text-black">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block text-center bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
              >
                proceed to checkout
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="bg-gray-100 border-t py-6 flex flex-col sm:flex-row justify-center gap-12 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-black" />
          <div>
            <p className="font-bold">Free Transportation</p>
            <p className="text-xs">free transportation for order above $80</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-black" />
          <div>
            <p className="font-bold">Flexible Payment</p>
            <p className="text-xs">Secure payment option</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Headphones className="w-6 h-6 text-black" />
          <div>
            <p className="font-bold">24×7 Support</p>
            <p className="text-xs">We support online all days</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

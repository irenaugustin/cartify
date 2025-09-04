'use client'

import { useState } from "react"

export default function CheckoutPage() {
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Order placed!\n\nShipping to: ${shipping.name}, ${shipping.address}, ${shipping.city}`)
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Details</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            value={shipping.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
            aria-label="Full Name"
            required
          />
          <input
            name="email"
            value={shipping.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            aria-label="Email"
            required
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="phone"
            value={shipping.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
            aria-label="Phone Number"
            required
          />
          <input
            name="city"
            value={shipping.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border px-4 py-2 rounded"
            aria-label="City"
            required
          />
        </div>
        <input
          name="address"
          value={shipping.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border px-4 py-2 rounded"
          aria-label="Address"
          required
        />
        <input
          name="postalCode"
          value={shipping.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className="w-full border px-4 py-2 rounded"
          aria-label="Postal Code"
          required
        />

        <h2 className="text-xl font-semibold mt-4">Payment Method</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Card
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="mobile"
              checked={paymentMethod === "mobile"}
              onChange={() => setPaymentMethod("mobile")}
            />
            Mobile Money
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            PayPal
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

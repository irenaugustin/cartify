'use client'

import { useState } from "react"
import Image from "next/image"

export default function CheckoutPage() {
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("visa")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Order placed!\n\nShipping to: ${shipping.name}, ${shipping.address}, ${shipping.city}\nPayment method: ${paymentMethod}`)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Shipping */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
          <h2 className="text-lg mb-2">Transportation Details</h2>

          <label className="block mb-3">
            Full Name
            <input
              name="name"
              value={shipping.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border px-3 py-2 mt-1 rounded"
              required
            />
          </label>

          <label className="block mb-3">
            Email
            <input
              type="email"
              name="email"
              value={shipping.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border px-3 py-2 mt-1 rounded"
              required
            />
          </label>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <label className="block">
              Phone Number
              <input
                name="phone"
                value={shipping.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border px-3 py-2 mt-1 rounded"
                required
              />
            </label>

            <label className="block">
              City
              <input
                name="city"
                value={shipping.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border px-3 py-2 mt-1 rounded"
                required
              />
            </label>
          </div>

          <label className="block mb-3">
            Address
            <input
              name="address"
              value={shipping.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border px-3 py-2 mt-1 rounded"
              required
            />
          </label>

          <label className="block mb-3">
            Postal Code
            <input
              name="postalCode"
              value={shipping.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full border px-3 py-2 mt-1 rounded"
              required
            />
          </label>
        </div>

        {/* Right Side - Payment */}
        <div className="bg-purple-500 p-4 rounded text-white">
          <h2 className="text-lg mb-3">Payment Method</h2>

          <div className="flex flex-wrap gap-4 mb-4">
            {/* Selcom */}
            <label className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded">
              <input
                type="radio"
                name="payment"
                value="selcom"
                checked={paymentMethod === "selcom"}
                onChange={() => setPaymentMethod("selcom")}
                aria-label="Selcom"
              />
              <Image src="/image/selcom.jpg" alt="Selcom" width={60} height={40} />
            </label>

            {/* PayPal */}
            <label className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                aria-label="PayPal"
              />
              <Image src="/image/paypal.jpg" alt="PayPal" width={60} height={40} />
            </label>

            {/* Visa */}
            <label className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded">
              <input
                type="radio"
                name="payment"
                value="visa"
                checked={paymentMethod === "visa"}
                onChange={() => setPaymentMethod("visa")}
                aria-label="Visa"
              />
              <Image src="/image/visa.jpg" alt="Visa" width={60} height={40} />
            </label>

            {/* MasterCard */}
            <label className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded">
              <input
                type="radio"
                name="payment"
                value="mastercard"
                checked={paymentMethod === "mastercard"}
                onChange={() => setPaymentMethod("mastercard")}
                aria-label="MasterCard"
              />
              <Image src="/image/mastercard.jpg" alt="MasterCard" width={60} height={40} />
            </label>
          </div>

          {/* Optional Card Details */}
          <label className="block mb-3 text-black">
            Card Name
            <input
              name="cardName"
              placeholder="Card Name"
              className="w-full border px-3 py-2 mt-1 rounded"
            />
          </label>

          <label className="block mb-3 text-black">
            Number
            <input
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full border px-3 py-2 mt-1 rounded"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block text-black">
              Expiry Date
              <input
                name="expiry"
                placeholder="MM/YY"
                className="w-full border px-3 py-2 mt-1 rounded"
              />
            </label>

            <label className="block text-black">
              CVC
              <input
                name="cvc"
                placeholder="CVC"
                className="w-full border px-3 py-2 mt-1 rounded"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-100 text-black font-semibold py-2 rounded mt-4"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  )
}

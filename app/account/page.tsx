'use client'

import { useState } from "react"

export default function AccountPage() {
  // Removed setProfile since we only read profile for now
  const [profile] = useState({
    name: "Irene Kalumna",
    email: "irene@example.com",
    phone: "+255 712 345 678",
  })

  const orders = [
    { id: "1001", date: "2025-08-15", total: 149.99, status: "Delivered" },
    { id: "1002", date: "2025-08-20", total: 59.99, status: "Processing" },
  ]

  const wishlist = [
    { id: "1", name: "Smartwatch", price: 199.99 },
    { id: "2", name: "Sunglasses", price: 49.99 },
  ]

  const addresses = [
    { id: "a1", label: "Home", address: "123 Dar es Salaam, Tanzania" },
    { id: "a2", label: "Office", address: "456 Arusha, Tanzania" },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>

      {/* Profile Info */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </section>

      {/* Order History */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <div className="grid gap-2">
          {orders.map(order => (
            <div key={order.id} className="flex justify-between border-b py-2">
              <span>Order #{order.id} ({order.date})</span>
              <span>${order.total.toFixed(2)} - {order.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Wishlist */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
        <ul className="list-disc list-inside">
          {wishlist.map(item => (
            <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      </section>

      {/* Saved Addresses */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
        <ul className="list-disc list-inside">
          {addresses.map(addr => (
            <li key={addr.id}>{addr.label}: {addr.address}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

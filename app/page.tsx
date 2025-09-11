// app/page.tsx
"use client";

import Link from "next/link";
import Footer from "../components/Footer"; // 👈 import footer

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-400 to-purple-500 rounded-2xl text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cartify</h1>
        <p className="text-lg mb-6">
          Shop the best products at the best prices
        </p>
        <Link href="/shop">
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            Start Shopping
          </button>
        </Link>
      </section>

      {/* Featured Categories */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Fashion
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Electronics
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Beauty
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Accessories
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Office and education supplies
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Wigs
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Clothes
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Shoes
          </div>
          <div className="bg-purple-500 text-white p-6 h-32 flex items-center justify-center rounded-lg shadow font-bold">
            Home supplies
          </div>
        </div>
      </section>

      {/* Reusable Footer */}
      <Footer />
    </main>
  );
}

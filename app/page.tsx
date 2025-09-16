"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-white p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Your Dream Phone <br /> At Best price!
          </h1>
          <p className="text-gray-600 mb-6">Stay connected in style.</p>
          <Link href="/shop">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
              TO SHOP
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 md:mt-0 items-center">
          <Image src="/hero/airpods.jpg" alt="Airpods" width={100} height={100} />
          <Image src="/hero/watch.jpg" alt="Watch" width={120} height={120} />
          <Image src="/hero/charger.jpg" alt="Charger" width={120} height={120} />
          <Image src="/hero/iphone.jpg" alt="iPhone" width={300} height={200} />
          <Image src="/hero/samsung.jpg" alt="Samsung phones" width={300} height={200} />
           <Image src="/hero/headphone.jpg" alt="head phones" width={300} height={300} />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-pink-200 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-6 px-6">
          {[
            { name: "Dresses", img: "/arrivals/dresses.jpg" },
            { name: "Coats", img: "/arrivals/coats.jpg" },
            { name: "Chargers", img: "/arrivals/chargers.jpg" },
            { name: "Smart Phones", img: "/arrivals/smartphones.jpg" },
            { name: "Sneakers", img: "/arrivals/sneakers.jpg" },
            { name: "High heels", img: "/arrivals/heels.jpg" },
            { name: "Two Pieces", img: "/arrivals/twopieces.jpg" },
            { name: "Men Shoes", img: "/arrivals/menshoes.jpg" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Fixed-size square image box */}
              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={140}
                  height={140}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 font-medium text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Products */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-10">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">Iphone 16 Pro Max</h3>
          <p className="text-gray-600 mb-3">Love The price.</p>
          <Image
            src="/products/iphone16.jpg"
            alt="iPhone"
            width={150}
            height={150}
            className="object-cover"
          />
          <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">6th Generation Airpods</h3>
          <p className="text-gray-600 mb-3">From $40.00</p>
          <Image
            src="/products/airpods6.jpg"
            alt="Airpods"
            width={150}
            height={150}
            className="object-cover"
          />
          <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">Mac Book Pro</h3>
          <p className="text-gray-600 mb-3">From $234</p>
          <Image
            src="/products/macbook.jpg"
            alt="Macbook"
            width={150}
            height={150}
            className="object-cover"
          />
          <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </section>
    </main>
  );
}

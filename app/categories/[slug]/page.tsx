"use client";

import { useParams } from "next/navigation";

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <main className="container mx-auto px-4 py-8">
        <p>Invalid category.</p>
      </main>
    );
  }

  const products = [
    { name: "Red Dress", category: "women-clothes" },
    { name: "Blue Shirt", category: "men-clothes" },
    { name: "Baby Romper", category: "baby-clothes" },
    { name: "Lipstick Set", category: "beauty" },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products available in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg text-center"
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

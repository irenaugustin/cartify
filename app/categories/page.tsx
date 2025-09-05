// app/categories/page.tsx
import Link from 'next/link';

const categories = [
  { name: 'Fashion', href: '/categories/fashion' },
  { name: 'Women Clothes', href: '/categories/women-clothes' },
  { name: 'Men Clothes', href: '/categories/men-clothes' },
  { name: 'Beauty', href: '/categories/beauty' },
  { name: 'Accessories', href: '/categories/accessories' },
  { name: 'Office & Education Supplies', href: '/categories/office-education' },
  { name: 'Baby Clothes', href: '/categories/baby-clothes' },
  { name: 'Wigs', href: '/categories/wigs' },
  { name: 'Men Shoes', href: '/categories/men-shoes' },
  { name: 'Women Shoes', href: '/categories/women-shoes' },
  { name: 'Baby Shoes', href: '/categories/baby-shoes' },
];

export default function CategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Placeholder icon, replace with images if you want */}
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
            <span className="text-center font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

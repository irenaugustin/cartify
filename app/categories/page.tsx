import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Fashion', href: '/categories/fashion', img: '/categories/fashion.jpg' },
  { name: 'Women', href: '/categories/women', img: '/categories/women.jpg' },
  { name: 'Men', href: '/categories/men', img: '/categories/men.jpg' },
  { name: 'Beauty', href: '/categories/beauty', img: '/categories/beauty.jpg' },
  { name: 'Accessories', href: '/categories/accessories', img: '/categories/accessories.jpg' },
  { name: 'Office & Education Supplies', href: '/categories/office-education', img: '/categories/office.jpg' },
  { name: 'Kids', href: '/categories/kids', img: '/categories/kids.jpg' },
  { name: 'Wigs', href: '/categories/wigs', img: '/categories/wigs.jpg' },
  { name: 'Home and Tools Improvement', href: '/categories/home-tools', img: '/categories/home.jpg' },
  { name: 'Kitchen', href: '/categories/kitchen', img: '/categories/kitchen.jpg' },
  { name: 'Decorations', href: '/categories/decorations', img: '/categories/decorations.jpg' },
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
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
              <Image
                src={category.img}
                alt={category.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <span className="text-center font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

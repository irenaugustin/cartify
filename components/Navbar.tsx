'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useI18n } from "@/contexts/I18nContext"
import {
  Home,
  ShoppingCart,
  Package,
  User,
  Settings,
  Grid,
  Search
} from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { language, toggleLanguage } = useI18n()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchTerm)}`
    }
  }

  const links = [
    { href: "/", labelEn: "Home", labelSw: "Nyumbani", icon: <Home size={18} /> },
    { href: "/shop", labelEn: "Shop", labelSw: "Duka", icon: <ShoppingCart size={18} /> },
    { href: "/categories", labelEn: "Categories", labelSw: "Jamii", icon: <Grid size={18} /> },
    { href: "/cart", labelEn: "Cart", labelSw: "Kikapu", icon: <Package size={18} /> },
    { href: "/account", labelEn: "Profile", labelSw: "Profaili", icon: <User size={18} /> },
    { href: "/setting", labelEn: "Setting", labelSw: "Mpangilio", icon: <Settings size={18} /> },
  ]

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">Cartify</Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-8">
          <input
            type="text"
            placeholder={language === "en" ? "Search products..." : "Tafuta bidhaa..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-gray-300 text-black px-4 py-2 rounded-r-lg hover:bg-gray-400 flex items-center justify-center"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1 px-2 py-1 rounded hover:text-black transition-colors ${
                  isActive ? "text-black font-semibold" : ""
                }`}
              >
                {link.icon} {language === "en" ? link.labelEn : link.labelSw}
              </Link>
            )
          })}
          <button
            onClick={toggleLanguage}
            className="ml-2 text-sm border px-2 py-1 rounded"
            aria-label="Toggle language"
          >
            {language === "en" ? "SW" : "EN"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 flex flex-col gap-2">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex mb-2">
            <input
              type="text"
              placeholder={language === "en" ? "Search products..." : "Tafuta bidhaa..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-300 text-black px-4 py-2 rounded-r-lg hover:bg-gray-400 flex items-center justify-center"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>

          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-2 py-1 rounded hover:text-black transition-colors ${
                  isActive ? "text-black font-semibold" : "text-gray-700"
                }`}
              >
                {link.icon} {language === "en" ? link.labelEn : link.labelSw}
              </Link>
            )
          })}

          <button
            onClick={toggleLanguage}
            className="mt-2 text-sm border px-2 py-1 rounded"
            aria-label="Toggle language"
          >
            {language === "en" ? "SW" : "EN"}
          </button>
        </nav>
      )}
    </header>
  )
}

'use client'   // <-- Add this line at the top

import { useState } from "react"
import Link from "next/link"
import { useI18n } from "@/contexts/I18nContext"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage } = useI18n()

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-600">Cartify</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">{language === "en" ? "Home" : "Nyumbani"}</Link>
          <Link href="/shop">{language === "en" ? "Shop" : "Duka"}</Link>
          <Link href="/categories">{language === "en" ? "Categories" : "Jamii"}</Link>
          <Link href="/cart">{language === "en" ? "Cart" : "Kikapu"}</Link>
          <Link href="/account">{language === "en" ? "Profile" : "Profaili"}</Link>
          <Link href="/setting">{language === "en" ? "Setting" : "Mpangilio"}</Link>
          <button onClick={toggleLanguage} className="ml-2 text-sm border px-2 py-1 rounded">
            {language === "en" ? "SW" : "EN"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 flex flex-col gap-2">
          <Link href="/">{language === "en" ? "Home" : "Nyumbani"}</Link>
          <Link href="/shop">{language === "en" ? "Shop" : "Duka"}</Link>
          <Link href="/categories">{language === "en" ? "Categories" : "Jamii"}</Link>
          <Link href="/cart">{language === "en" ? "Cart" : "Kikapu"}</Link>
          <Link href="/account">{language === "en" ? "Profile" : "Profaili"}</Link>
          <Link href="/setting">{language === "en" ? "Setting" : "Mpangilio"}</Link>
          <button onClick={toggleLanguage} className="mt-2 text-sm border px-2 py-1 rounded">
            {language === "en" ? "SW" : "EN"}
          </button>
        </nav>
      )}
    </header>
  )
}

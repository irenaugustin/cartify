'use client'

import { createContext, useContext, useState, ReactNode } from "react"

type Product = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cart: Product[]
  addToCart: (product: Omit<Product, "quantity">, qty?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  clearCart: () => void
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Omit<Product, "quantity">, qty: number = 1) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + qty } : p)
      }
      return [...prev, { ...product, quantity: qty }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  const updateQuantity = (id: string, qty: number) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: qty } : p))
  }

  const clearCart = () => setCart([])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}

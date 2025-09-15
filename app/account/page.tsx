'use client'

import { useState } from "react"
import { useI18n } from "@/contexts/I18nContext"
import Image from "next/image"

export default function AccountPage() {
  const { language } = useI18n()
  const [isLogin, setIsLogin] = useState(true)

  const labels = {
    login: language === "en" ? "LOGIN" : "INGIA",
    signup: language === "en" ? "SIGN UP" : "JISAJILI",
    toContinue: language === "en" ? "Login To Continue" : "Ingia Ili Kuendelea",
    forAccount: language === "en" ? "Create Your Account" : "Unda Akaunti Yako",
    username: language === "en" ? "Username" : "Jina la Mtumiaji",
    email: language === "en" ? "someone@gmail.com" : "barua@pepe.com",
    password: language === "en" ? "password" : "nenosiri",
    dontHave: language === "en" ? "Don’t have an account?" : "Hauna akaunti?",
    alreadyHave: language === "en" ? "Already have an account?" : "Tayari una akaunti?",
    toggleLogin: language === "en" ? "Login" : "Ingia",
    toggleSignUp: language === "en" ? "Sign Up" : "Jisajili",
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <Image
          src="/shopping-cart.jpg"
          alt="Shopping Cart"
          width={600}
          height={600}
          className="object-contain w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 bg-[#ec179a] text-white flex flex-col justify-center p-8 md:p-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {labels.toContinue}
        </h2>

        <form className="flex flex-col gap-4 mt-4 max-w-md mx-auto w-full">
          {!isLogin && (
            <input
              type="text"
              placeholder={labels.username}
              className="bg-white text-black rounded-full px-4 py-2 focus:outline-none"
            />
          )}

          {/* Email Input with Icon */}
          <div className="relative">
            <span className="absolute left-4 top-2.5 text-black">✉</span>
            <input
              type="email"
              placeholder={labels.email}
              className="w-full bg-white text-black rounded-full px-10 py-2 focus:outline-none"
            />
          </div>

          {/* Password Input with Icon */}
          <div className="relative">
            <span className="absolute left-4 top-2.5 text-black">🔒</span>
            <input
              type="password"
              placeholder={labels.password}
              className="w-full bg-white text-black rounded-full px-10 py-2 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-[#ec179a] font-bold py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            {isLogin ? labels.login : labels.signup}
          </button>
        </form>

        {/* Toggle Between Login and SignUp */}
        <p className="text-center mt-6 text-white text-sm">
          {isLogin ? labels.dontHave : labels.alreadyHave}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-bold underline"
          >
            {isLogin ? labels.toggleSignUp : labels.toggleLogin}
          </button>
        </p>
      </div>
    </div>
  )
}
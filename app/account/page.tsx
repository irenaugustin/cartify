'use client'

import { useState } from "react"
import { useI18n } from "@/contexts/I18nContext"

export default function AccountPage() {
  const { language } = useI18n()
  const [isLogin, setIsLogin] = useState(true)

  // Labels based on language
  const labels = {
    login: language === "en" ? "LOGIN" : "INGIA",
    signup: language === "en" ? "SIGN UP" : "JISAJILI",
    toContinue: language === "en" ? "TO CONTINUE" : "KWA KUENDELEA",
    forAccount: language === "en" ? "FOR YOUR ACCOUNT" : "KWA AKAUNTI YAKO",
    username: language === "en" ? "Username" : "Jina la Mtumiaji",
    email: language === "en" ? "someone@gmail.com" : "barua@pepe.com",
    password: language === "en" ? "••••••••••" : "••••••••••",
    dontHave: language === "en" ? "Don't have an account?" : "Hauna akaunti?",
    alreadyHave: language === "en" ? "Already have an account?" : "Tayari una akaunti?",
    toggleLogin: language === "en" ? "Login" : "Ingia",
    toggleSignUp: language === "en" ? "Sign Up" : "Jisajili",
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E90FF] p-4">
      <div className="w-full max-w-md bg-[#FFFFFF] shadow-xl rounded-2xl p-8 relative overflow-hidden">
        {/* Decorative Background Waves */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[#FFD700] opacity-30 rounded-t-[100%]"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#FF8C00] opacity-30 rounded-t-[100%]"></div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-[#1E90FF] mb-2 text-center z-10 relative">
          {isLogin ? labels.login : labels.signup}
        </h2>
        <p className="text-gray-600 mb-6 text-center z-10 relative">
          {isLogin ? labels.toContinue : labels.forAccount}
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4 relative z-10">
          {!isLogin && (
            <input
              type="text"
              placeholder={labels.username}
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
            />
          )}
          <input
            type="email"
            placeholder={labels.email}
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
          />
          <input
            type="password"
            placeholder={labels.password}
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
          />

          <button
            type="submit"
            className="bg-[#FF8C00] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#FFD700] transition-colors mt-2"
          >
            {isLogin ? labels.login : labels.signup}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <p className="text-center text-gray-600 mt-6 relative z-10">
          {isLogin ? labels.dontHave : labels.alreadyHave}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#1E90FF] font-semibold hover:text-[#FF8C00] transition-colors"
          >
            {isLogin ? labels.toggleSignUp : labels.toggleLogin}
          </button>
        </p>
      </div>
    </div>
  )
}

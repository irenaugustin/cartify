"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [currency, setCurrency] = useState("TZS");

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const currencies = [
    { code: "TZS", label: "Tanzanian Shilling (TZS)" },
    { code: "USD", label: "US Dollar (USD)" },
    { code: "EUR", label: "Euro (EUR)" },
    { code: "KES", label: "Kenyan Shilling (KES)" },
    { code: "GBP", label: "British Pound (GBP)" },
    { code: "ZAR", label: "South African Rand (ZAR)" },
  ];

  return (
    <main className="container mx-auto px-6 py-10 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Contact Preferences */}
      <section>
        <button
          className="w-full text-left text-xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => toggleSection("contact")}
        >
          Contact Preferences
        </button>
        {openSection === "contact" && (
          <p className="text-gray-600 px-4 py-2">
            Manage how you receive notifications and updates from Cartify.
          </p>
        )}
      </section>

      {/* About Cartify */}
      <section>
        <button
          className="w-full text-left text-xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => toggleSection("about")}
        >
          About Cartify
        </button>
        {openSection === "about" && (
          <div className="px-4 py-2">
            <h3 className="font-bold mt-2">Our Mission</h3>
            <p>
              At Cartify, our mission is to make online shopping simple,
              reliable, and affordable. We aim to connect people with the
              products they need, anytime and anywhere.
            </p>

            <h3 className="font-bold mt-4">Our Vision</h3>
            <p>
              To become a leading e-commerce platform in Africa and beyond,
              known for trust, quality, and excellent customer experience.
            </p>

            <h3 className="font-bold mt-4">Our Services</h3>
            <ul className="list-disc ml-6">
              <li>Wide range of quality products at competitive prices</li>
              <li>Secure and fast checkout process</li>
              <li>Reliable delivery to your doorstep</li>
              <li>Customer support to assist with your shopping needs</li>
            </ul>
          </div>
        )}
      </section>

      {/* Currency Options */}
      <section>
        <button
          className="w-full text-left text-xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => toggleSection("currency")}
        >
          Currency Options
        </button>
        {openSection === "currency" && (
          <div className="px-4 py-2">
            <label htmlFor="currency" className="block mb-2 font-medium">
              Choose your currency:
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-gray-500">
              Selected currency: <span className="font-semibold">{currency}</span>
            </p>
          </div>
        )}
      </section>

      {/* Logistics Services */}
      <section>
        <button
          className="w-full text-left text-xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => toggleSection("logistics")}
        >
          Logistics Services
        </button>
        {openSection === "logistics" && (
          <p className="text-gray-600 px-4 py-2">
            We partner with trusted logistics providers to ensure fast and
            reliable delivery across different regions.
          </p>
        )}
      </section>

      {/* Help Center */}
      <section>
        <button
          className="w-full text-left text-xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => toggleSection("help")}
        >
          Help Center
        </button>
        {openSection === "help" && (
          <p className="text-gray-600 px-4 py-2">
            Need assistance? Visit our Help Center or contact our support team
            for guidance.
          </p>
        )}
      </section>

      {/* Legal Notice */}
      <section>
        <button
          className="w-full text-left text-xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => toggleSection("legal")}
        >
          Legal Notice
        </button>
        {openSection === "legal" && (
          <ul className="list-disc ml-6 px-4 py-2">
            <li>Provide accurate information when creating an account or placing an order</li>
            <li>Use the platform responsibly and for personal shopping purposes only</li>
            <li>Understand that product availability, prices, and delivery times may vary</li>
            <li>Comply with our return and refund policy as outlined during checkout</li>
          </ul>
        )}
      </section>
    </main>
  );
}

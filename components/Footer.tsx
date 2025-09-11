"use client";

import { Instagram, MessageCircle, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-6 text-center text-gray-600">
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Cartify. All rights reserved.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-black"
        >
          <Music size={24} />
        </a>
        <a
          href="https://wa.me/255700000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </footer>
  );
}

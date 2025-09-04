import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"], // allow external images from this host
  },
};

export default nextConfig;

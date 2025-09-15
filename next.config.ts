/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.paypalobjects.com",
      "upload.wikimedia.org",
      "assets.airtel.in",
      "upload.wikimedia.org", // needed for M-Pesa and Airtel logos
    ],
  },
};

module.exports = nextConfig;

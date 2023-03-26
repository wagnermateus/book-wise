/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  images: {
    domains: [
      "github.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
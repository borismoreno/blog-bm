/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {
    domains: ['strapi-bm-images.s3.amazonaws.com'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig

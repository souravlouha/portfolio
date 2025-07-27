/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-domain.com'], // Add any external image domains
  },
  // Ensure proper build output
  output: 'standalone',
}

module.exports = nextConfig

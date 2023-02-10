/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: '/docs/index.html',
        locale: false,
      },
    ]
  }
}

module.exports = nextConfig

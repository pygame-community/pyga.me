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
    ];
  },
  async redirects() {
    return [
      // Exact path redirect
      {
        source: '/discord',
        destination: 'https://discord.com/invite/pygame-community-772505616680878080',
        permanent: true,
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;

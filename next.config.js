/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows local /public/images/** plus any remote CDN you decide to use later.
    remotePatterns: [
      { protocol: 'https', hostname: '**.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
    formats: ['image/avif', 'image/webp']
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: '/get-a-quote', destination: '/quote', permanent: true },
      { source: '/free-quote', destination: '/quote', permanent: true }
    ];
  }
};

module.exports = nextConfig;

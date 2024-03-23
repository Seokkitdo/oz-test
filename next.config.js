//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `https://www.betman.co.kr/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

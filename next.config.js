/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/content",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

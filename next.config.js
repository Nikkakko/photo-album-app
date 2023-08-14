/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  //set /gallery to be the homepage
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gallery',
        permanent: true,
      },
    ];
  },

  //ignore typescript errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      net: false,
      tls: false,
      fs: false
    };

    return config;
  },
};

module.exports = nextConfig
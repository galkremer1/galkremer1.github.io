/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.watchOptions = {
        followSymlinks: true,
        ignored: ['**/node_modules'],
        poll: 1000, // Changed from true to 1000 milliseconds
      };
    }
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === '/galkremer1.github.io' ? '' : '',
};

module.exports = nextConfig;

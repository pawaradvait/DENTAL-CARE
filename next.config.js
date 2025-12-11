/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // you already have this
  images: {
    unoptimized: true, // disable Image Optimization API
  },
}

module.exports = nextConfig;

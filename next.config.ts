/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Вимкнути ESLint під час "next build"
  },
};

module.exports = nextConfig;
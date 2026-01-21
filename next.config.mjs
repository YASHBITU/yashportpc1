/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // IGNORE ERRORS DURING BUILD
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // OPTIMIZE IMAGES
  images: {
    unoptimized: true,
  },
  experimental: {
  }
};

export default nextConfig;
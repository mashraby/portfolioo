/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.yoldashov.uz",
      },
    ],
  },
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

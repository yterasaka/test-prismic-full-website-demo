/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  experimental: {
    // Cloudflare向けの設定
    runtime: "edge",
    isrMemoryCacheSize: 0, // ISRキャッシュの無効化
  },
};

export default nextConfig;

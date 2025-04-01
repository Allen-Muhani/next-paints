import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.GITHUB_PAGES ? '/next-paints' : '',
  basePath:  process.env.GITHUB_PAGES ? '/next-paints' : '',
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;

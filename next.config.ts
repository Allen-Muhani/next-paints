import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export
  images: { unoptimized: true }, // GitHub Pages does not support Next.js image optimization
  basePath: "/next-paints", // Replace with your repo name
  assetPrefix: "/next-paints/",
};

export default nextConfig;

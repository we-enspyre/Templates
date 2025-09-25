import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // enables `next export`
  images: { unoptimized: true }, // disables Next.js image optimization
  basePath: '/Templates', // replace with your repo name
  assetPrefix: '/Templates/',
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_ENV === "prod";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/Templates" : "",
  assetPrefix: isProd ? "/Templates/" : "",
  trailingSlash: true
};

export default nextConfig;

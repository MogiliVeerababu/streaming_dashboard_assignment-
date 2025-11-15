/** next.config.ts */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // disable turbopack completely
  },
  productionBrowserSourceMaps: false, // stops invalid source-map warnings
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

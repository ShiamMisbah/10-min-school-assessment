import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.10minuteschool.com"], // ✅ add this line
  },
};

export default nextConfig;

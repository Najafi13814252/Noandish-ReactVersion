import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.8",
    "*.local"
  ],
};

export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Garante renderização perfeita sem dependência de biblioteca de otimização no container
  },
};

export default nextConfig;

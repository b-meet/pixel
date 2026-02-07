import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Disabled to allow Server Actions for Turnstile verification
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable standalone output for slimmer Docker images */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "personal-drshnk.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

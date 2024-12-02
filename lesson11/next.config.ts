import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.wikia.nocookie.net",
      "www.visir.is",
    ],
  },
};

export default nextConfig;

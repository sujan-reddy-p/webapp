import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [{ source: "/recruiter", destination: "/", permanent: false }];
  },
  experimental: {
    // The isolated webpack build worker intermittently stalls on this machine.
    webpackBuildWorker: false,
  },
};

export default nextConfig;

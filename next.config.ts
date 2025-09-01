import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname), // set your desired root path
  },
  // other config options here
};

export default nextConfig;

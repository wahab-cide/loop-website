import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95, 100],
  },
  turbopack: {
    // The mobile app's lockfile sits one directory up, and Turbopack otherwise
    // infers that as the workspace root and resolves against the wrong tree.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

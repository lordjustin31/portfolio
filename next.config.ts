import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Configure Turbopack for network access
  turbopack: {
    // Empty config to silence the warning
  },
  
  // Allow access from local network
  devIndicators: {
    position: 'bottom-right',
  },
  
  // Webpack config (only used when running with --webpack flag)
  webpack: (config, { isServer, dev }) => {
    // Only apply polling in development for network access
    if (!isServer && dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000, // Enable polling for network access
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;

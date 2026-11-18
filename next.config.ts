import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevent clickjacking attacks
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME type sniffing
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Enable XSS filter
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Control referrer information
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()', // Restrict browser features
          },
        ],
      },
    ];
  },
  
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

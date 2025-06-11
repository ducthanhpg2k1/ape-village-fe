import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  swcMinify: false,
  output: 'standalone',
  publicRuntimeConfig: {
    APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  devIndicators: false,
  images: {
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

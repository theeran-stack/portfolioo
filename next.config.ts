import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/journal/protosem/week-07/:task',
        destination: '/forge-journal/week-7/:task',
      },
      {
        source: '/journal/protosem/week-07',
        destination: '/forge-journal/week-7',
      },
      {
        source: '/journal/protosem',
        destination: '/forge-journal',
      },
    ];
  },
};

export default nextConfig;

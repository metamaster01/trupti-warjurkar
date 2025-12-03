import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // trailingSlash: true,           // 👈 forces /page/index.html
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },

  async headers() {
  return [
    {
      source: "/_next/static/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, must-revalidate",
        },
      ],
    },
  ];
}

};

export default nextConfig;

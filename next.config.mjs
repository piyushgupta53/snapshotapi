/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("_http_common");
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "easyscreenshot.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

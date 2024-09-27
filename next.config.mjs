/** @type {import('next').NextConfig} */

const nextConfig = {
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Only allow loading images from
        hostname: "image.tmdb.org", // https://image.tmdb
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

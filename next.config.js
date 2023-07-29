/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "history-computer.com",
      "irnpost.com",
      "eu.redmagic.gg"
    ],
  },
};

module.exports = nextConfig;

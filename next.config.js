const basePath =
  process.env.NODE_ENV === "production" ? "/bubble-sort-animation" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
};

module.exports = nextConfig;

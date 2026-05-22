/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // GitHub Pages project sites need basePath set to repo name.
  // GitHub Actions workflow auto-sets BASE_PATH env var.
  // For local builds, leave it empty.
  basePath: process.env.BASE_PATH || '',
  // Ensure trailing slashes work correctly on static hosts
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || '',
  },
};

module.exports = nextConfig;

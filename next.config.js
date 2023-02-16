/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/charnel-horse",
  reactStrictMode: true,
}

module.exports = nextConfig

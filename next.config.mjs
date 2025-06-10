/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/cognisync',
  assetPrefix: '/cognisync/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig

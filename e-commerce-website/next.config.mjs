/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Explicitly disable React Compiler to avoid requiring `babel-plugin-react-compiler`.
  reactCompiler: false,
  experimental: {
    // Other experimental flags can go here.
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      loader: 'custom',
      loaderFile: './my-loader.ts',
    },
  }
   
  module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
    eslint: {
      dirs: ['src'], // ESLint가 검사할 디렉토리 지정
    }
  }
  
  module.exports = nextConfig
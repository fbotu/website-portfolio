/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
    // includePaths: [path.join(__dirname, 'pages')],
    // includePaths: [path.join(__dirname, 'components')]
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  }
}

module.exports = nextConfig

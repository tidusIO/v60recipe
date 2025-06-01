/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true
  },

  // Add trailing slash for better compatibility
  trailingSlash: true,

  // Disable server-side features for static export
  experimental: {
    // Ensure static export works properly
  }
}

module.exports = nextConfig
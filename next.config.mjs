/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  distDir: 'build', // Add this line to specify the build directory
  output: 'export', // Add this line for static export
};

export default nextConfig;

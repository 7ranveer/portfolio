import type {NextConfig} from 'next';

// IMPORTANT: Replace 'your-repository-name' with the actual name of your GitHub repository.
const repositoryName = 'your-repository-name'; 

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  // Configure basePath and assetPrefix for GitHub Pages.
  // They should match your repository name if deploying to username.github.io/repository-name
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // When outputting to static export, the default image optimization is not available.
    // unoptimized: true will serve images as-is.
    // For optimized images on static sites, you might need a third-party loader or service.
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

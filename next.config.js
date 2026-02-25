/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const configuredBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubActions && repositoryName ? `/${repositoryName}` : '');
const basePath =
  configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

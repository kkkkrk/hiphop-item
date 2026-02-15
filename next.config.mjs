/** @type {import('next').NextConfig} */
const nextConfig = {
  // `appDir` is enabled by default in Next.js 16+ due to the presence of the `app` directory.
  // No need to explicitly set `appDir: true`.
  serverExternalPackages: ['mongodb'], // Updated from experimental.serverComponentsExternalPackages
  // `turbopack` configuration removed as it's causing issues and is not needed for this version.
};

export default nextConfig;

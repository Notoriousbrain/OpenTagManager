/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/dashboard/:path*",
      destination: "/dashboard_app/:path*", // Temp workaround if dashboard uses a different basePath
      permanent: false,
    },
  ],
};

export default nextConfig;

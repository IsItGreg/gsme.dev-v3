/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/photo",
        destination: "https://photo.gsme.dev",
        permanent: false,
        basePath: false,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;

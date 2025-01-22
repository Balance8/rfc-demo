const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

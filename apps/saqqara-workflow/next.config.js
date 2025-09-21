/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  env: {
    RHODIUM_VERIFICATION_ENDPOINT: process.env.RHODIUM_VERIFICATION_ENDPOINT,
    ANCIENT_WISDOM_DB_URL: process.env.ANCIENT_WISDOM_DB_URL,
    IRON_RULE_COMPLIANCE_API: process.env.IRON_RULE_COMPLIANCE_API,
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Iron-Rule-Framework',
            value: 'Commission or charitable donation only',
          },
          {
            key: 'X-Rhodium-Backed',
            value: 'true',
          },
          {
            key: 'X-Ancient-Wisdom',
            value: 'Saqqara-Giza protocols',
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/hire',
        destination: '/commission',
        permanent: true,
      },
      {
        source: '/employment',
        destination: '/iron-rule',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Ancient wisdom compilation optimizations
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meu-dominio-externo.com',
        // Se quiser liberar subcaminhos específicos, use pathname, ex:
        // pathname: '/subpath/**'
      },
      {
        protocol: 'https',
        hostname: 'outro-dominio-externo.com',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default withNextIntl(nextConfig);

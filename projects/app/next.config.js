/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const path = require('path');

function getBasePath() {
  return process.env.BASE_PATH || "/";
}

const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    basePath: getBasePath(),
  },
  assetPrefix: getBasePath(), //加前缀
  basePath: getBasePath(), //node
  i18n,
  output: 'standalone',
  reactStrictMode: process.env.NODE_ENV === 'development' ? false : true,
  compress: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false
        }
      };
    }
    Object.assign(config.resolve.alias, {
      '@mongodb-js/zstd': false,
      '@aws-sdk/credential-providers': false,
      snappy: false,
      aws4: false,
      'mongodb-client-encryption': false,
      kerberos: false,
      'supports-color': false,
      'bson-ext': false,
      'pg-native': false
    });
    config.module = {
      ...config.module,
      rules: config.module.rules.concat([
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack']
        }
      ]),
      exprContextCritical: false,
      unknownContextCritical: false
    };

    return config;
  },
  transpilePackages: ['@fastgpt/*'],
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'pg'],
    outputFileTracingRoot: path.join(__dirname, '../../')
  }
};

module.exports = nextConfig;

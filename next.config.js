/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  defaultLocale: 'ptbr',
  i18n: {
    locales: ['ptbr', 'en'],
    defaultLocale: 'ptbr',
    localDetection: false,
  }
}

module.exports = nextConfig

import createWithNextIntl from 'next-intl/plugin';

// The plugin now points to your i18n configuration file.
const withNextIntl = createWithNextIntl('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options go here.
};

// We wrap our config with the withNextIntl plugin to enable i18n routing.
export default withNextIntl(nextConfig);


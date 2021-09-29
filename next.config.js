const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["media.discordapp.net"],
    },
    i18n,
    async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.yehezkieldio.xyz',
        permanent: true,
      },
      {
        source: '/schoolwork',
        destination: 'https://schoolwork.yehezkieldio.xyz',
        permanent: true,
      },
    ]
  },
};

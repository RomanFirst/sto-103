/** @type {import('next').NextConfig} */

const withTranslateRoutes = require("next-translate-routes/plugin");
const nextTranslate = require("next-translate-plugin");
module.exports = nextTranslate(
  withTranslateRoutes({
    i18n: {
      locales: ["en", "ru"],
      defaultLocale: "ru",
    },
    async redirects() {
      return [
        {
          source: "/ru/:path*",
          destination: "/:path*",
          permanent: true,
        },
      ];
    },

    images: {
      formats: ["image/webp"],
    },
    reactStrictMode: true,
    experimental: {
      scrollRestoration: true,
    },
  })
);

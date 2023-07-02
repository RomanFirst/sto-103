module.exports = {
  locales: ["ru", "en"],
  defaultLocale: "ru",
  localeDetection: true,
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/404": ["common"],
  },
};

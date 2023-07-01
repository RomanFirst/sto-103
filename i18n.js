module.exports = {
  locales: ["ru", "en"],
  defaultLocale: "en",
  localeDetection: true,
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/404": ["common"],
  },
};

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5fs3pt",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:8000/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});

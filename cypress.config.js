const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      return config;  // ✅ Ensure config is returned
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
    env: {
      URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    }
  }
});

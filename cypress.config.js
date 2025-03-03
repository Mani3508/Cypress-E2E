const { defineConfig } = require("cypress");

reportDir: "cypress/reports/mochawesome",

module.exports = defineConfig({
  e2e: {
    //setupNodeEvents(on, config) {
      // implement node event listeners here
      reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    },
  },

  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});

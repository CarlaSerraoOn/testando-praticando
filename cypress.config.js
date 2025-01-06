const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mix4kx',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle:'Projeto Pratico do QAzando',
      reportPageTitle: 'Projeto Pratico do QAzando'
    },
    baseUrl:"https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
 
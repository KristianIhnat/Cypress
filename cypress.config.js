const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uf4bes",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

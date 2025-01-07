const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //specPattern:"./cypress/tests/**.*",
    //baseUrl:"https://the-internet.herokuapp.com/"
    specPattern:"./cypress/tests/*/*",
    baseUrl:"https://demoblaze.com/"
    
    


  },
  //defaultCommandTimeout:9000



});

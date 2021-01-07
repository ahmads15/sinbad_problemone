const chromedriver = require('chromedriver');
const firefoxdriver = require('geckodriver');

module.exports = {
  test_settings: {
    chrome: {
      desiredCapabilities:{
        browserName: 'chrome'
      },

      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
      webdriver: {
        start_process: true,
        port: 4446,
        server_path: chromedriver.path
      }
    },

    firefox:{
      desiredCapabilities:{
        browserName: 'firefox',
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
      webdriver: {
        start_process:true,
        port: 4448,
        server_path: firefoxdriver.path
      }
    }

  }
};
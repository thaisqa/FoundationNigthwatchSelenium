const seleniumServer = require('selenium-server');
const SCREENSHOT_PATH = ('reports/screenshots/');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  webdriver: {
    start_process: true,
    server_path: "./bin/geckodriver",
    cli_args: [
      "--log", "debug"
    ],
    port: 4444
  },
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      silent: true,
      screenshots : {
        enabled : true,
        path : SCREENSHOT_PATH,
        on_failure: true,
        on_error: true
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari'
      }
    },
    selenium: {
      cli_args: {
        'webdriver.chrome.driver': 'bin/chromedriver',
        'webdriver.gecko.driver': 'bin/geckodriver'
      }
    }
  }
};
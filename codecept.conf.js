const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
const path = require('path');

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
    platform: 'Android',
      app: path.join(process.cwd(), 'apks/Android' ,'app-release.apk'),
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: 'Pixel 2 API 29',
        platformVersion: "10",
      },
    },
  },
  //bootstrap: './server.js',
  //teardown: './server.js',
  mocha: {
    reporterOptions: {
      reportDir: './output',
      mochawesome_filename: 'result.xml',
    },
  },
  
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
  },
  name: 'CodeceptJS',
  translation: 'pt-BR'
}
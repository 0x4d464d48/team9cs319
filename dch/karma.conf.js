// Karma configuration
// Generated on Wed Mar 02 2016 13:13:00 GMT-0800 (PST)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // Order matters! If files aren't imported correctly Karma crashes
      'public/libs/javascript/jquery.min.js',
      'public/libs/javascript/d3-v3.min.js',
      'public/libs/javascript/bootstrap.min.js',
      'public/libs/javascript/angular-1.4.5.min.js',
      'public/libs/javascript/angular-1.4.5.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'public/app/shared/!(*-test).js',
      'public/app/shared/**/!(*-test).js',
      'public/app/components/!(*-test).js',
      'public/app/components/**/!(*-test).js',
      'public/app/**/!(*-test).js',
      'public/**/!(*-test).js',
      'public/**/*-test.js',
      'public/app/**/*.html'
    ],


    // list of files to exclude
    exclude: [
      'public/app/app-test-e2e.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'public/app/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'public',
      moduleName: 'directive-templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'ChromeCanary'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
}

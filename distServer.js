// This file configures a web server for testing the production build
// on your local machine.

var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

// Run Browsersync
browserSync({
  port: process.env.PORT || 8080,
  ui: {
    port: 8081
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});

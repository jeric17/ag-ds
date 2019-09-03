module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "iife.js",
      "testing/utils.ts",
      "src/**/*.spec.ts" // *.tsx for React Jsx
    ],
    exclude: [
      "src/**/flycheck*.spec.ts"
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    // reporters: ["progress", "karma-typescript"],
    reporters: ["progress", "karma-typescript", "kjhtml", "spec"],
    browsers: ["Chrome"],
    autoWatch: true,
    colors: true,
    logLevel: config.LOG_INFO,
    concurrency: 0,
    singleRun: false,
    browserDisconnectTimeout: 1000
  });
};

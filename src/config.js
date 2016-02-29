System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "npm:angular@1.5.0",
    "angular-ui-router": "npm:angular-ui-router@0.2.18",
    "angular2-polyfill": "npm:angular2-polyfill@0.0.7",
    "ng-metadata": "npm:ng-metadata@1.0.0",
    "typescript": "npm:typescript@1.8.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular-ui-router@0.2.18": {
      "angular": "npm:angular@1.5.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2-polyfill@0.0.7": {
      "angular": "npm:angular@1.5.0",
      "camelcase": "npm:camelcase@2.1.0",
      "dot-prop": "npm:dot-prop@2.3.0",
      "reflect-metadata": "npm:reflect-metadata@0.1.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:dot-prop@2.3.0": {
      "is-obj": "npm:is-obj@1.0.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ng-metadata@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:reflect-metadata@0.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

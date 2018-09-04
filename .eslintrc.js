module.exports = {
  root: true,

  extends: "eslint:recommended",

  parserOptions: {
    ecmaVersion: 6,
  },

  env: {
    es6: true,
    node: true,
  },

  rules: {
    eqeqeq: "error",
    "no-console": "off",
    "no-const-assign": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-template-curly-in-string": "error",
    "no-unused-vars": "error",
    "no-var": "error",
    "prefer-const": "error",
  },
};

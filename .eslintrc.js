module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: 0,
    'consistent-return': 0,
    'no-console': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-shadow': 0,
    eqeqeq: 0,
  },
};

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['webpack.config.js'],
  rules: {
    'prettier/prettier': 'error',
    'no-async-promise-executor': 'off',
  },
};

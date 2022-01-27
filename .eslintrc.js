module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
};

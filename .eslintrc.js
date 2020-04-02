module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: 'eslint:recommended',
  rules: {
    quotes: [2, 'single'],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'no-console': 2
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
};

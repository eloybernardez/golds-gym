module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'operator-linebreak': 0,
    'no-return-assing':0,
    indent: 0,
    'no-confusing-arrow': 0
  },
};

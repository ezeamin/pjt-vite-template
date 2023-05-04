module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

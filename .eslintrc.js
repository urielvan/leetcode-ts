module.exports = {
  root: true,
  env: {
    es6: true,
    es2020: true,
    node: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-void': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
  },
};

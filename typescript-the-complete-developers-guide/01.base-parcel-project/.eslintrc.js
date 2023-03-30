module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  env: {
    commonjs: true,
    jest: true,
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-shadow': 'off',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'prettier/prettier': ['error'],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-unused-vars': 'off',
    'lines-between-class-members': 'off',
    'import/no-import-module-exports': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'default-param-last': 'warn',
    'no-import-assign': 'warn',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.{ts}'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {},
    },
  ],
};

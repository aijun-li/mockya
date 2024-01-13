module.exports = {
  root: true,
  env: {
    browser: true,
  },
  globals: {
    __APP_VERSION__: 'readonly',
  },
  extends: [require.resolve('@mockya/config/eslint/common'), 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.cjs'],
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': 'off',
  },
};

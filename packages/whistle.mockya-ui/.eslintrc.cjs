module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [require.resolve('@mockya/config/eslint/common'), 'plugin:vue/vue3-essential'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue'],
};

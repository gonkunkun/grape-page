module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
    // 'vuetify',
  ],
  // plugins: ['eslint-comments', 'prettier'],
  // add your custom rules here
  rules: {}
}

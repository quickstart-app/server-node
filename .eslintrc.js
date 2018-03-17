module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard'
  ],
  plugins: [
    'import'
  ],
  // add your custom rules here
  'rules': {
    // allow new
    'no-new': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'indent': ["error", "tab"],
    'no-tabs': 0,
  },
  'settings': {
    'import/resolver': {
      'babel-plugin-root-import': {}
    }
  }
}

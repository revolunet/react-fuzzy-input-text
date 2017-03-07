module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFuzzyInputText',
      externals: {
        react: 'React'
      }
    }
  }
}

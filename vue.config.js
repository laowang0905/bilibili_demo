const path = require('path')
module.exports = {
  // base作为全局less
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/base.less')]
    }
  }
}

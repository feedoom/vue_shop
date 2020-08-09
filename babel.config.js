// 项目发布时用到的插件
const prodPlulgins = []
if (process.env.NODE_ENV === 'production') {
  prodPlulgins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    ...prodPlulgins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}

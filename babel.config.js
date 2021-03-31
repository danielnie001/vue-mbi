module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 按需引入vant组件，减小加载体积
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}

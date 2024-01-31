module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'maintained node versions', useBuiltIns: 'usage', corejs: 3, modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { useESModules: true }],
  ],
};

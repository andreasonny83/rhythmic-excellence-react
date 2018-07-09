module.exports = ctx => ({
  plugins: [
    require('precss'),
    require('autoprefixer'),
    ctx.env === 'production' ? require('cssnano') : false,
  ]
});

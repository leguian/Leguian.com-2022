module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

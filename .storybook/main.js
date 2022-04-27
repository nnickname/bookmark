module.exports = {
   core: {
     builder: "webpack5",
   },
   
  
  rules: {},
  loaders: [
      {
        ...require.resolve('style-loader'),
      ...require.resolve('css-loader'),
      ...require.resolve('file-loader') 
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
  ]
  
 };
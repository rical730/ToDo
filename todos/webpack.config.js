var webpack = require("webpack")
var path = require("path")

module.exports = {
 devtool: "inline-source-map",
 entry: [
  "webpack-dev-server/client?http://127.0.0.1:8080/",
  "webpack/hot/only-dev-server",
  "./app"
 ],

 output: {
  path: path.join(__dirname, "public"),
  filename: "bundle.js"
 },
 resolve: {
  moduleExtensions: ["node_modules", "app"],
  extensions: [".js"]
 },
 module: {
  loaders: [
   {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ["react-hot-loader", "babel-loader?presets[]=react,presets[]=es2015"]
   },
   {
    test: /\.css?$/,
    exclude: /node_modules/,
    loaders: ["style-loader", "css-loader"]
   }
  ]
 },
 plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
 ]
}



const path = require('path');

module.exports = 
{
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
},

module: 
{
    rules: [{
        loader: "babel-loader",
        // creates rule to check everytime .js file, run babel
        test: /\.js$/,
        exclude: /node_modules/
    },
    {
        //target folders end in css
        test: /\.s?css$/,
        use: [
            "style-loader",
            "css-loader", 
            "sass-loader"
        ]
    }]
},
    devtool: "cheap-module-eval-source-map",
    devServer: 
    {
        contentBase: path.join(__dirname, 'public'), 
        historyApiFallback: true
    }
};

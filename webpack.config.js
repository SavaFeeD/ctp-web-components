const path = require('path');
const webpack = require("webpack");
const packageJson = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');

const MODE = (process.env.MODE || "prod").trim();

const config = {
    entry: {
        "all": './src/entry-points/all.ts',
        "preview": './src/entry-points/preview.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    mode: MODE === "dev" || MODE === "local" ? 'development' : 'production',
    resolve: {
        extensions: ['.ts', '.js'],
        mainFields: ['module', 'browser', 'main'],
        alias: {
            "~": path.resolve(__dirname,  "src/"),
            "@": path.resolve(__dirname,  "src/components")
        }
    },
    output: {
        filename: `ctp.[name].js`,
        path: path.resolve(__dirname, 'dist'),
        library: "CrazyTeaParty",
        libraryTarget: "window"
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(packageJson.version),
            environment: JSON.stringify({})
        }),
        new CopyPlugin({
            patterns: [
                { from: "./dist", to: "../test" },
            ],
        }),
    ]
};

if (MODE === "dev" || MODE === "local") {
    config.mode = "development";
    config.devtool = "inline-source-map";
}

module.exports = config;
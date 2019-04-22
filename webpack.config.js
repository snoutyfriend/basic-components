// load the default config generator.
const path = require("path");

module.exports = {
    devtool: 'inline-source-map',
    entry: "./components/**.ts",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader",
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ],
    },
};

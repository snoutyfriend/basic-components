// load the default config generator.
// const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');
module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.
console.log(defaultConfig);
    // For example, add typescript loader:
    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("ts-loader")
    });
    defaultConfig.resolve.extensions.push(".ts", ".tsx");

    defaultConfig.module.rules.push({
        test: /\.scss$/,
        use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            },
        ]
    });

    defaultConfig.resolve.alias = {
        // "react": "preact-compat",
        // "react-dom": "preact-compat",
        // Not necessary unless you consume a module using `createClass`
        // "create-react-class": "preact-compat/lib/create-react-class",
    };
    defaultConfig.node = {
        fs: "empty"
    };
    // defaultConfig.externals = {
    //     'jsdom': 'window',
    //         'cheerio': 'window',
    //         'react/lib/ExecutionEnvironment': true,
    //         'react/lib/ReactContext': 'window',
    //         'react/addons': true,
    // };

    return defaultConfig;
};
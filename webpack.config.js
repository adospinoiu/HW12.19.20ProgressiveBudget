const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
        app: './public/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new WebpackPwaManifest({
            // the name of the generated manifest file
            filename: "manifest.json",

            inject: false,

            fingerprints: false,

            name: "Budget App",
            short_name: "Budget App",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            start_url: "/",
            display: "standalone",

            icons: [
                {
                    src: path.resolve(
                        __dirname,
                        "public/icons/icon-192x192.png"
                    ),
                    // the plugin will generate an image for each size
                    // included in the size array
                    size: [192, 512]
                }
            ]
        })
    ]
}

module.exports = config;
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                plugins: [
                    ...webpackConfig.plugins,
                    new MiniCssExtractPlugin({
                        filename: 'content.css',
                    }),
                ],
                entry: './src/index.js',
                mode: 'production',
                output: {
                    ...webpackConfig.output,
                    filename: 'content.js',
                    path: path.resolve(__dirname, '..', 'chrome-extension/src/content'),
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                },
                module: {
                    ...webpackConfig.module,
                    rules: [
                        {
                            test: /\.css$/i,
                            use: ['css-loader'],
                            exclude: /\.module\.css$/,
                        },
                        // {
                        //     test: /\.css$/i,
                        //     use: [
                        //         {
                        //             loader: 'css-loader',
                        //             options: {
                        //                 importLoaders: 1,
                        //                 modules: true,
                        //             },
                        //         },
                        //     ],
                        //     include: /\.module\.css$/,
                        // },
                        // {
                        //     test: /\.css$/,
                        //     use: [
                        //       {
                        //         loader: 'style-loader',
                        //       },
                        //       {
                        //        loader: 'css-loader',
                        //      },
                        //     ],
                        //   },
                        ...webpackConfig.module.rules,
                    ],
                },
            }
        },
    },
}

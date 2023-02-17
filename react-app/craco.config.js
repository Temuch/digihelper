const path = require('path')

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                entry: './src/index.js',
                mode: 'production',
                output: {
                    ...webpackConfig.output,
                    filename: 'content.js',
                    path: path.resolve(__dirname, '..', 'chrome-extension/src/content'),
                },
                // optimization: {
                //     ...webpackConfig.optimization,
                //     runtimeChunk: false,
                // },
            }
        },
    },
}

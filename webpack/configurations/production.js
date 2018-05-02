// Presets
import { source, build } from '../paths';
import { generateCommonConfiguration } from './common';

// Instruments
import merge from 'webpack-merge';
import {
    loadPostCSS,
    generateSourceMaps,
    createBuildAnalyzer
} from '../modules';

// Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export const generateProductionConfiguration = () =>
    merge(
        generateCommonConfiguration(),

        /**
         * Проверка необходима, потому что при NODE_ENV = development
         * этот плагин не отпускает вебпак около 120 секунд
         */
        process.env.NODE_ENV !== 'development' && createBuildAnalyzer(),
        {
            mode:         'production',
            optimization: {
                minimizer: [
                    new UglifyJSPlugin({
                        uglifyOptions: {
                            mangle: {
                                safari10: false, // Фикс бага сборки сафари 10 и сафари 11.
                            },
                        },
                    })
                ],
                minimize:     false,
                runtimeChunk: true,
                splitChunks:  {
                    chunks:             'all',
                    minSize:            30000,
                    minChunks:          1,
                    maxAsyncRequests:   5,
                    maxInitialRequests: 3,
                    name:               true,
                    cacheGroups:        {
                        default: {
                            minChunks:          2,
                            priority:           -20,
                            reuseExistingChunk: true,
                        },
                        vendors: {
                            test:     /[\\/]node_modules[\\/]/,
                            priority: -10,
                        },
                        react: {
                            name:    'react',
                            test:    /[\\/]react[\\/]/,
                            enforce: true,
                        },
                        ['react-dom']: {
                            name:    'react-dom',
                            test:    /[\\/]react-dom[\\/]/,
                            enforce: true,
                        },
                        gsap: {
                            name:    'gsap',
                            test:    /[\\/]gsap[\\/]/,
                            enforce: true,
                        },
                        commons: {
                            name:      'commons',
                            chunks:    'initial',
                            minChunks: 2,
                        },
                    },
                },
            },
            output: {
                filename:   'js/[name].[chunkhash:5].js',
                publicPath: process.env.REPOSITORY_NAME
                    ? `/${process.env.REPOSITORY_NAME}`
                    : '',
            },
            module: {
                rules: [
                    {
                        test:    /\.css$/,
                        include: [source, /node_modules/],
                        use:     [
                            MiniCssExtractPlugin.loader,
                            {
                                loader:  'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                            loadPostCSS()
                        ],
                    }
                ],
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename:      'css/[contenthash].[hash:5].css',
                    chunkFilename: 'css/[contenthash].[hash:5].css',
                }),
                new CleanWebpackPlugin(build, {
                    allowExternal: true,
                })
            ],
        },
        generateSourceMaps({ devtool: 'source-map' })
    );

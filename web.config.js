import path from 'path'
import { fileURLToPath } from 'url'
import webpack, { optimize } from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirneame = path.dirname(__filename)
const isProduction = 'production'

const config = {
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: 'employees.jsx',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        module: {
            rules: {
                test: /\.sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        },
        optimization: {
            splitChunks: {
                name: 'vendor',
                chunks: 'all'
            }
        },
        devtool: 'source-map'
    }
}

export default function () {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode - 'development'
    }
    return config
}
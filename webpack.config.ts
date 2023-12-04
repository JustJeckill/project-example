import webpack from 'webpack';
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { IBuildPaths } from "./config/webpack/types/config";
import path from "path";


const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'production',
    paths,
    isDev: false
});

export default config;

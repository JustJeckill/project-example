import webpack from 'webpack';
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import {IBuildEnv, IBuildPaths} from "./config/webpack/types/config";
import path from "path";


export default (env: IBuildEnv) => {
    const { mode, port } = env;

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode || 'development',
        paths,
        isDev,
        port: port || 3000,
    });

    return config;
};

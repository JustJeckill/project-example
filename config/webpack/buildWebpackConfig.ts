import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { IBuildOptions } from "./types/config";
import { Configuration } from "webpack";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
    const { mode, paths, isDev } = options;

    const config = {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }

    return config;
}

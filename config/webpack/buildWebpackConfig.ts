import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { IBuildOptions } from "./types/config";
import { Configuration } from "webpack";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
    const { mode, paths } = options;

    const config = {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    }

    return config;
}

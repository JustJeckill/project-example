import { ModuleOptions } from "webpack";

export function buildLoaders(): ModuleOptions['rules'] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typeScriptLoader,
    ]
}

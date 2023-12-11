import { IBuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port: port ?? 3001,
        open: true,
        historyApiFallback: true,
    }
}

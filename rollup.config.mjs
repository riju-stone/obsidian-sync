import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'main.ts',
    output: {
        dir: './build/',
        sourcemap: "inline",
        format: 'cjs',
        name: 'bundle'
    },
    external: [ "obsidian" ],
    plugins: [nodeResolve({ browser: true }), commonjs()],
}
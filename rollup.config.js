import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const LOGGER_WORKER = {
    input: './src/modules/core/flcn-workers/shared-logger.worker.ts',
    output: {
        file: './src/assets/workers/shared-logger.js',
        format: "umd",
        sourcemap: "inline"
    }
};
const DATA_WORKER = {
    input: './src/modules/core/flcn-workers/data.worker.ts',
    output: {
        file: './src/assets/workers/data-worker.js',
        format: "umd",
        sourcemap: "inline"
    }
};

const COMMON = {
    treeshake: true,
    plugins: [
        typescript({
            "typescript": require('typescript')
        }),
        commonjs(),
        resolve({
            jsnext: true,
            main: true,
            extensions: ['.js', '.json']
        })
    ]
};

export default [
    Object.assign({},LOGGER_WORKER, COMMON),
    Object.assign({},DATA_WORKER, COMMON)
];

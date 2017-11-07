import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';


export default {
  input: './src/modules/core/flcn-workers/logger.shared-worker.ts',
  output: {
      file: './src/assets/workers/socket-loader.js',
      format: "umd",
      sourcemap: "inline",
      name: 'app'
  },
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

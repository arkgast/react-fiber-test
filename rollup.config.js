import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import bundleSize from 'rollup-plugin-bundle-size'

const env = process.env.NODE_ENV

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      contentBase: 'dist',
      host: 'localhost',
      port: 3000
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    bundleSize()
  ]
}

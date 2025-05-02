import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss'

// https://rollupjs.org/configuration-options/
export default {
   input: 'src/index.tsx',
   output: {
      file: 'public/index.js',
      format: 'iife',
   },
   cache: true,
   plugins: [
      //external(),
      commonjs({
         include: [
            'node_modules/**',
         ],
         exclude: [
            'node_modules/process-es6/**',
         ],
      }),
      resolve(),
      babel({
         exclude: 'node_modules/**'
      }),
      replace({
         'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      typescript(),
      postcss({
         autoModules: true
      }),
      livereload('public'),
      serve({  // https://github.com/thgh/rollup-plugin-serve
         contentBase: 'public',
         host: 'localhost',
         verbose: true,
         port: 3000,
         open: true,  // Launch in browser (default: false)
      }), // index.html should be in root of project
   ]
}
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    // for prod
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    // },
    // {
    //   file: pkg.module,
    //   format: 'es',
    // },

    // for testing
    {
      file: 'iife.js',
      format: 'iife',
      name: 'foo'
    }
  ],
  // external: [ 'lit-element' ],
  plugins: [
    resolve(),
    typescript(),
    terser()
  ]
};

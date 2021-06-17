import { defineConfig } from 'vite'

import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/sw-starship.ts',
      output: {
        dir: 'dist',
        format: 'esm',
      },
      onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
          console.error(`(!) ${warning.message}`);
        }
      },
      plugins: [
        replace({'Reflect.decorate': 'undefined'}),
        resolve(),
        terser({
          module: true,
          warnings: true,
        }),
        filesize({
          showBrotliSize: true,
        })
      ]
    }
  }
})
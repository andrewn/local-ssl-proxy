import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'cjs',
  plugins: [
    json(),
    babel()
  ]
};

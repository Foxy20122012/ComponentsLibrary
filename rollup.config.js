import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'rollup-plugin-tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/components/Button/Button.jsx',
  output: {
    file: 'dist/button/index.js',
    format: 'es', // Asegúrate de que el formato sea 'es'
  },
  plugins: [
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'], presets: [['@babel/preset-env', { modules: false }]] }),
    postcss({ plugins: [autoprefixer()], sourceMap: true, extract: true, minimize: true }),
    tailwind({ input: './styles/globals.css', purge: false }),
  ],
  external: [
    /@babel\/runtime/,
    'react',
    'prop-types',
    // ... otras dependencias externas
  ],
};

import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'rollup-plugin-tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/components/Button/Button.jsx', // Ruta correcta al punto de entrada de tu aplicación
  output: {
    file: 'dist/button/index.js', // Ruta y nombre del archivo de salida
    format: 'es', // O el formato que prefieras (es, cjs, umd, etc.)
  },
  plugins: [
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
    postcss({ plugins: [autoprefixer()], sourceMap: true, extract: true, minimize: true }),
    tailwind({ input: './styles/globals.css', purge: false }),
  ],
  external: [
    /@babel\/runtime/,
    'react',
    'prop-types',
    // Agrega otras dependencias externas aquí si es necesario
  ],
};

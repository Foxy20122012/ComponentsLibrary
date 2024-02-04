import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'rollup-plugin-tailwindcss';
import autoprefixer from 'autoprefixer';
import resolve from '@rollup/plugin-node-resolve';

const commonConfig = {
  plugins: [
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'], presets: [['@babel/preset-env', { modules: false }]] }),
    postcss({ plugins: [autoprefixer()], sourceMap: true, extract: true, minimize: true }),
    tailwind({ input: './styles/globals.css', purge: false }),
    resolve(),
  ],
  external: [
    /@babel\/runtime/,
    'react',
    'prop-types',
    // ... otras dependencias externas comunes
  ],
};

export default [
  {
    input: 'src/components/Button/Button.jsx',
    output: {
      file: 'dist/button/index.js',
      format: 'es',
    },
    ...commonConfig,
  },  
  {
    input: 'src/components/Paginator/Paginator.jsx',
    output: {
      file: 'dist/Paginator/index.js',
      format: 'es',
    },
    external: [
      /@babel\/runtime/,
      'react',
      'prop-types',
      '@heroicons/react/24/solid',
      '@heroicons/react/24/outline',
    ],
    ...commonConfig,
  },
  {
    input: 'src/components/Title/Title.jsx',
    output: {
      file: 'dist/Title/index.js',
      format: 'es',
    },
    external: [
      /@babel\/runtime/,
      'react',
      'prop-types',
      '@heroicons/react/24/solid',
      '@heroicons/react/24/outline',
    ],
    ...commonConfig,
  },
  {
    input: 'src/components/Cards/FlexiTileCard/FlexiTileCard.jsx',
    output: {
      file: 'dist/Cards/FlexiTileCars/index.js',
      format: 'es',
    },
    external: [
      /@babel\/runtime/,
      'react',
      'prop-types',
      '@heroicons/react/24/solid',
      '@heroicons/react/24/outline',
    ],
    ...commonConfig,
  },
  {
    input: 'src/components/ContactForms/ContactForms.jsx',
    output: {
      file: 'dist/ContactForms/index.js',
      format: 'es',
    },
    external: [
      /@babel\/runtime/,
      'react',
      'prop-types',
      '@heroicons/react/24/solid',
      '@heroicons/react/24/outline',
    ],
    ...commonConfig,
  },
  {
    input: 'src/components/DataTable/DataTable.jsx',
    output: {
      file: 'dist/DataTable/index.js',
      format: 'es',
    },
    external: [
      /@babel\/runtime/,
      'react',
      'prop-types',
      './../Paginator/index', // Ajusta la ruta según la estructura de tu proyecto
      '@heroicons/react/24/solid',
      '@heroicons/react/24/outline',
      'react-icons/md',
      'v-functions',
      'underscore',
      'js-mq',
    ],
    plugins: [
      babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'], presets: [['@babel/preset-env', { modules: false }]] }),
      postcss({ plugins: [autoprefixer()], sourceMap: true, extract: true, minimize: true }),
      tailwind({ input: './styles/globals.css', purge: false }),
    ],
    external: [
      /@babel\/runtime/,
      'react',
      'prop-types',
      // ... otras dependencias externas comunes
    ],
  },

];

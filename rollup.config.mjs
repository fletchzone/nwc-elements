import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
import { existsSync, readdirSync } from 'fs';

// Generate cache busting hash based on current timestamp
const generateCacheBuster = () => {
  const now = Date.now();
  // Convert to base36 for shorter string (like: 'k1m2n3o4')
  return now.toString(36).slice(-8);
};

const cacheBuster = generateCacheBuster();

/**
 * This is used to split out the individual Web components into there own js output
 *
 * @param {*} source The base folder to start searching
 * @returns a list of file paths that indicate the exported web component
 */
const getPrimaryComponent = (source, basePath = '') => {
  const components = [];
  
  const entries = readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());
  
  for (const dirent of entries) {
    const dirPath = path.join(source, dirent.name);
    const componentPath = path.join(dirPath, `${dirent.name}.ts`);
    
    // Check if this directory has a component file (standard pattern)
    if (existsSync(componentPath)) {
      components.push(componentPath);
    } else {
      // Check for nested components (like exp-plugins/field/field.ts)
      const nestedComponents = getPrimaryComponent(dirPath, path.join(basePath, dirent.name));
      components.push(...nestedComponents);
    }
  }
  
  return components;
};

const individualComponents = getPrimaryComponent('./src/components');

export default [
  // Main index bundle (with chunks for development)
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      chunkFileNames: '[name]-[hash].js',
      entryFileNames: '[name].js',
      dir: './dist',
    },
    plugins: [
      resolve({
        extensions: ['.ts', '.js'],
      }),
      commonjs({
        include: ['node_modules/**'],
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        assumptions: { setPublicClassFields: true },
      }),
    ],
  },
  // Individual components (self-contained, no chunks) with cache busting
  ...individualComponents.map(component => ({
    input: component,
    output: {
      format: 'es',
      file: `./dist/${path.basename(component, '.ts')}.${cacheBuster}.js`,
      inlineDynamicImports: true, // Inline all imports
    },
    plugins: [
      resolve({
        extensions: ['.ts', '.js'],
      }),
      commonjs({
        include: ['node_modules/**'],
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        assumptions: { setPublicClassFields: true },
      }),
    ],
  })),
];

console.log(`🔄 Cache buster: ${cacheBuster}`);

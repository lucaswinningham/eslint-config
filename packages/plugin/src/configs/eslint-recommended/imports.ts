import { type Configuration } from '@lucaswinningham-eslint/types';
import { off, error } from '@lucaswinningham-eslint/utils';

const imports: Configuration = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import',
    'unused-imports',
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'import/consistent-type-specifier-style': [error, 'prefer-inline'],
    // 'import/default': error, // plugin:import/recommended
    'import/dynamic-import-chunkname': [error, { webpackChunknameFormat: '[0-9a-zA-Z-_/.]+' }],
    // 'import/export': error, // plugin:import/recommended
    // 'import/exports-last': off,
    'import/extensions': [error, 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/first': error,
    // 'import/group-exports': off,
    // 'import/max-dependencies': off,
    // 'import/named': off, // plugin:import/typescript ('error' in plugin:import/recommended)
    // 'import/namespace': error, // plugin:import/recommended
    'import/newline-after-import': error,
    'import/no-absolute-path': error,
    'import/no-amd': error,
    'import/no-anonymous-default-export': error,
    // 'import/no-commonjs': off,
    'import/no-cycle': error,
    'import/no-default-export': error,
    // 'import/no-deprecated': off,
    'import/no-duplicates': error, // ('warn' in plugin:import/recommended)
    // 'import/no-dynamic-off,
    // 'import/no-empty-named-blocks': off,
    'import/no-extraneous-dependencies': [error, { devDependencies: true }],
    'import/no-import-module-exports': error,
    'import/no-internal-modules': [error, { allow: [] }],
    'import/no-mutable-exports': error,
    'import/no-named-as-default': error, // ('warn' in plugin:import/recommended)
    'import/no-named-as-default-member': error, // ('warn' in plugin:import/recommended)
    'import/no-named-default': error,
    'import/no-named-export': off,
    // 'import/no-namespace': off,
    // 'import/no-nodejs-modules': off,
    // 'import/no-relative-packages': off,
    'import/no-relative-parent-imports': error,
    // 'import/no-restricted-paths': off,
    'import/no-self-import': error,
    'import/no-unassigned-import': error,
    // 'import/no-unresolved': error, // plugin:import/recommended
    // 'import/no-unused-modules': off,
    'import/no-useless-path-segments': error,
    'import/no-webpack-loader-syntax': error,
    'import/order': [error, {
      'newlines-between': 'always',
      groups: [
        'builtin',
        'external',
        'internal',
        'sibling',
        'parent',
        'index',
        'object',
        'type',
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
    'import/prefer-default-export': off,
    // 'import/unambiguous': off,

    'unused-imports/no-unused-imports': error,
    'unused-imports/no-unused-vars': [error, {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
  },
};

export default imports;

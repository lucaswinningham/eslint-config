import { type Configuration } from '@lucaswinningham-eslint/types';
import { off, error } from '@lucaswinningham-eslint/utils';

const promise: Configuration = {
  plugins: [
    'promise',
  ],
  extends: [
    'plugin:promise/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // 'promise/always-return': error, // plugin:promise/recommended
    // 'promise/avoid-new': off, // plugin:promise/recommended
    // 'promise/catch-or-return': error, // plugin:promise/recommended
    // 'promise/no-callback-in-promise': warn, // plugin:promise/recommended
    // 'promise/no-multiple-resolved': off,
    // 'promise/no-native': off, // plugin:promise/recommended
    // 'promise/no-nesting': warn, // plugin:promise/recommended
    // 'promise/no-new-statics': error, // plugin:promise/recommended
    // 'promise/no-promise-in-callback': warn, // plugin:promise/recommended
    // 'promise/no-return-in-finally': warn, // plugin:promise/recommended
    // 'promise/no-return-wrap': error, // plugin:promise/recommended
    // 'promise/param-names': error, // plugin:promise/recommended
    // 'promise/prefer-await-to-callbacks': off,
    'promise/prefer-await-to-then': error,
    // 'promise/valid-params': warn, // plugin:promise/recommended
  },
};

export default promise;

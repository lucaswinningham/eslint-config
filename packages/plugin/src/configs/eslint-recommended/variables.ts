import { type Configuration, type ESLintRules } from '@lucaswinningham/eslint-types';
import { off, error } from '@lucaswinningham/eslint-utils';

const variables: Configuration<ESLintRules> = {
  rules: {
    // 'init-declarations': off,
    'no-delete-var': error, // eslint-recommended
    // 'no-label-var': error,
    // 'no-restricted-globals': [
    //   error,
    //   {
    //     name: 'isFinite',
    //     message:
    //       'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    //   },
    //   {
    //     name: 'isNaN',
    //     message:
    //       'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    //   },
    // ].concat(confusingBrowserGlobals),
    // 'no-shadow': error,
    'no-shadow-restricted-names': error, // eslint-recommended
    'no-undef': error, // eslint-recommended
    // 'no-undef-init': error,
    // 'no-undefined': off, // TODO: enable?
    'no-unused-vars': error, // eslint-recommended
    // 'no-unused-vars': [error, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // 'no-use-before-define': [error, { functions: true, classes: true, variables: true }],
  },
};

export default variables;

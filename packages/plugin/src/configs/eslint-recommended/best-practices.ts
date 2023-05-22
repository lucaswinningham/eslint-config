import { type Configuration, type ESLintRules } from '@lucaswinningham-eslint/types';
import { error } from '@lucaswinningham-eslint/utils';

const bestPractices: Configuration<ESLintRules> = {
  rules: {
    // 'accessor-pairs': off,
    'array-callback-return': [error, {
      allowImplicit: true,
      checkForEach: true,
    }], // [error, { allowImplicit: true }]
    // 'block-scoped-var': error,
    // 'class-methods-use-this': [error, { exceptMethods: [] }],
    // 'complexity': [off, 20],
    // 'consistent-return': error,
    // 'curly': [error, 'multi-line'],
    // 'default-case': error,
    // 'default-case-last': error,
    // 'default-param-last': error,
    'dot-location': error, // [error, 'property']
    // 'dot-notation': [error, { allowKeywords: true }],
    // 'eqeqeq': [error, 'always', { null: 'ignore' }],
    // 'grouped-accessor-pairs': error,
    // 'guard-for-in': error,
    // 'max-classes-per-file': [error, 1],
    // 'no-alert': warn,
    // 'no-caller': error,
    // "no-case-declarations": error,
    // 'no-constructor-return': error,
    // 'no-div-regex': off,
    // 'no-else-return': [error, { allowElseIf: false }],
    // 'no-empty-function': [error, { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-empty-pattern': error, // eslint-recommended
    // 'no-empty-static-block': off,
    // 'no-eq-null': off,
    'no-eval': error,
    // 'no-extend-native': error,
    // 'no-extra-bind': error,
    // 'no-extra-label': error,
    'no-fallthrough': error, // eslint-recommended
    // 'no-floating-decimal': error,
    // 'no-global-assign': [error, { exceptions: [] }],
    // 'no-implicit-coercion': [off, { boolean: false, number: true, string: true, allow: [] }],
    // 'no-implicit-globals': off,
    // 'no-implied-eval': error,
    // 'no-invalid-this': off,
    // 'no-iterator': error,
    // 'no-labels': [error, { allowLoop: false, allowSwitch: false }],
    // 'no-lone-blocks': error,
    // 'no-loop-func': error,
    // 'no-magic-numbers': [off, { ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false }],
    'no-multi-spaces': error,
    // 'no-multi-str': error,
    // 'no-new': error,
    // 'no-new-func': error,
    // 'no-new-wrappers': error,
    // 'no-nonoctal-decimal-escape': error,
    // 'no-octal': error,
    // 'no-octal-escape': error,
    // 'no-param-reassign': [error, {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'acc', // for reduce accumulators
    //     'accumulator', // for reduce accumulators
    //     'e', // for e.returnvalue
    //     'ctx', // for Koa routing
    //     'context', // for Koa routing
    //     'req', // for Express requests
    //     'request', // for Express requests
    //     'res', // for Express responses
    //     'response', // for Express responses
    //     '$scope', // for Angular 1 scopes
    //     'staticContext', // for ReactRouter context
    //   ]
    // }],
    // 'no-proto': error,
    // 'no-redeclare': error,
    // 'no-restricted-properties': [error, {
    //   object: 'arguments',
    //   property: 'callee',
    //   message: 'arguments.callee is deprecated',
    // }, {
    //   object: 'global',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'self',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'window',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'global',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   object: 'self',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   object: 'window',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   property: '__defineGetter__',
    //   message: 'Please use Object.defineProperty instead.',
    // }, {
    //   property: '__defineSetter__',
    //   message: 'Please use Object.defineProperty instead.',
    // }, {
    //   object: 'Math',
    //   property: 'pow',
    //   message: 'Use the exponentiation operator (**) instead.',
    // }],
    // 'no-return-assign': error,
    // 'no-return-await': error,
    // 'no-script-url': error,
    // 'no-self-assign': [error], // eslint-recommended
    'no-self-assign': [error, { props: true }], // eslint-recommended
    // 'no-self-compare': error,
    // 'no-sequences': error,
    // 'no-throw-literal': error,
    // 'no-unmodified-loop-condition': off,
    // 'no-unused-expressions': [error, {
    //   allowShortCircuit: false,
    //   allowTernary: false,
    //   allowTaggedTemplates: false,
    // }],
    // 'no-unused-labels': error,
    // 'no-useless-call': off,
    // 'no-useless-catch': error,
    // 'no-useless-concat': error,
    // 'no-useless-escape': error,
    // 'no-useless-return': error,
    // 'no-void': error,
    // 'no-warning-comments': [off, {
    //   terms: ['todo', 'fixme', 'xxx'],
    //   location: 'start' },
    // ],
    // 'no-with': error,
    // 'prefer-named-capture-group': off,
    // 'prefer-object-has-own': off,
    // 'prefer-promise-reject-errors': [error, {
    //   allowEmptyReject: true,
    // }],
    // 'prefer-regex-literals': [error, {
    //   disallowRedundantWrapping: true,
    // }],
    // 'radix': error,
    // 'require-await': off,
    // 'require-unicode-regexp': off,
    // 'vars-on-top': error,
    // 'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    // 'yoda': error,
  },
};

export default bestPractices;

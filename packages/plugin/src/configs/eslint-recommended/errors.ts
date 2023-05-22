import { type Configuration, type ESLintRules } from '@lucaswinningham-eslint/types';
import { off, error } from '@lucaswinningham-eslint/utils';

const errors: Configuration<ESLintRules> = {
  rules: {
    'for-direction': error, // eslint-recommended
    'getter-return': error, // eslint-recommended
    'no-async-promise-executor': error, // eslint-recommended
    'no-await-in-loop': error,
    'no-compare-neg-zero': error, // eslint-recommended
    'no-cond-assign': [error, 'always'],
    'no-console': error,
    'no-constant-binary-expression': off,
    'no-constant-condition': error,
    'no-control-regex': error, // eslint-recommended
    'no-debugger': error, // eslint-recommended
    'no-dupe-args': error, // eslint-recommended
    'no-dupe-else-if': error, // eslint-recommended
    'no-dupe-keys': error, // eslint-recommended
    'no-duplicate-case': error, // eslint-recommended
    'no-empty': [error, { allowEmptyCatch: true }], // error
    'no-empty-character-class': error, // eslint-recommended
    'no-ex-assign': error, // eslint-recommended
    'no-extra-boolean-cast': [error, { enforceForLogicalOperands: true }], // error
    'no-extra-parens': error,
    // 'no-extra-parens': [off, 'all', {
    //   conditionalAssign: true,
    //   nestedBinaryExpressions: false,
    //   returnAssign: false,
    //   ignoreJSX: 'all', // delegate to eslint-plugin-react
    //   enforceForArrowConditionals: false,
    // }],
    'no-extra-semi': error, // eslint-recommended
    'no-func-assign': error, // eslint-recommended
    'no-import-assign': error, // eslint-recommended
    'no-inner-declarations': error, // eslint-recommended
    'no-invalid-regexp': error, // eslint-recommended
    'no-irregular-whitespace': error, // eslint-recommended
    'no-loss-of-precision': error, // eslint-recommended
    'no-misleading-character-class': error, // eslint-recommended
    'no-obj-calls': error, // eslint-recommended
    // 'no-new-native-nonconstructor': off,
    // 'no-promise-executor-return': error,
    'no-prototype-builtins': error, // eslint-recommended
    'no-regex-spaces': error, // eslint-recommended
    'no-setter-return': error, // eslint-recommended
    'no-sparse-arrays': error, // eslint-recommended
    'no-template-curly-in-string': error,
    'no-unexpected-multiline': error, // eslint-recommended
    'no-unreachable': error, // eslint-recommended
    // 'no-unreachable-loop': [error, {
    //   ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    // }],
    'no-unsafe-finally': error, // eslint-recommended
    'no-unsafe-negation': error, // eslint-recommended
    'no-unsafe-optional-chaining': [error, { disallowArithmeticOperators: true }],
    'no-unused-private-class-members': off,
    'no-useless-backreference': error, // eslint-recommended
    'require-atomic-updates': off,
    'use-isnan': error, // eslint-recommended
    'valid-typeof': [error, { requireStringLiterals: true }],
  },
};

export default errors;

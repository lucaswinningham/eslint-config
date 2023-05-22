import { Configuration, type TypeScriptRules } from '@lucaswinningham-eslint/types';
import { off, error } from '@lucaswinningham-eslint/utils';

export const typescript: Configuration<TypeScriptRules> = {
  // parser: '@typescript-eslint/parser', // plugin:@typescript-eslint/base (from plugin:@typescript-eslint/recommended)
  // plugins: ['@typescript-eslint'], // plugin:@typescript-eslint/base (from plugin:@typescript-eslint/recommended)
  parser: '@lucaswinningham-eslint/parser',
  // parserOptions: { sourceType: 'module' }, // plugin:@typescript-eslint/base (from plugin:@typescript-eslint/recommended)
  plugins: [
    '@lucaswinningham-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  rules: {
    // 'constructor-super': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'dot-notation': off, // plugin:@typescript-eslint/strict
    // 'getter-return': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-array-constructor': off, // plugin:@typescript-eslint/recommended
    // 'no-const-assign': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-dupe-args': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-dupe-class-members': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-dupe-keys': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-empty-function': off, // plugin:@typescript-eslint/recommended
    // 'no-extra-semi': off, // plugin:@typescript-eslint/recommended
    // 'no-func-assign': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-implied-eval': off, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // 'no-import-assign': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-loss-of-precision': off, // plugin:@typescript-eslint/recommended
    // 'no-new-symbol': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-obj-calls': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-redeclare': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-setter-return': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-this-before-super': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-throw-literal': off, // plugin:@typescript-eslint/strict
    // 'no-undef': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-unreachable': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-unsafe-negation': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'no-unused-vars': off, // plugin:@typescript-eslint/recommended
    // 'no-useless-constructor': off, // plugin:@typescript-eslint/strict
    // 'no-var': error, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'prefer-const': error, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'prefer-rest-params': error, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'prefer-spread': error, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)
    // 'require-await': off, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // 'valid-typeof': off, // plugin:@typescript-eslint/eslint-recommended (from plugin:@typescript-eslint/recommended)

    // '@typescript-eslint/adjacent-overload-signatures': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/array-type': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/await-thenable': error, // plugin:@typescript-eslint/recommended-requiring-type-checking 
    // '@typescript-eslint/ban-ts-comment': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/ban-tslint-comment': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/ban-types': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/block-spacing': off,
    // '@typescript-eslint/brace-style': off,
    // '@typescript-eslint/class-literal-property-style': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/comma-dangle': off,
    // '@typescript-eslint/comma-spacing': off,
    // '@typescript-eslint/consistent-generic-constructors': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/consistent-indexed-object-style': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/consistent-type-assertions': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/consistent-type-definitions': warn, // plugin:@typescript-eslint/strict
    '@typescript-eslint/consistent-type-imports': [error, {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    }],
    // '@typescript-eslint/default-param-last': off,
    // '@typescript-eslint/dot-notation': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/explicit-function-return-type': off,
    // '@typescript-eslint/explicit-member-accessibility': off,
    // '@typescript-eslint/explicit-module-boundary-types': off,
    // '@typescript-eslint/func-call-spacing': off,
    // '@typescript-eslint/indent': off,
    // '@typescript-eslint/index': off,
    // '@typescript-eslint/init-declarations': off,
    // '@typescript-eslint/key-spacing': off,
    // '@typescript-eslint/keyword-spacing': off,
    // '@typescript-eslint/lines-around-comment': off,
    // '@typescript-eslint/lines-between-class-members': off,
    // '@typescript-eslint/member-delimiter-style': off,
    // '@typescript-eslint/member-ordering': off,
    // '@typescript-eslint/method-signature-style': off,
    // '@typescript-eslint/naming-convention': off,
    // '@typescript-eslint/no-array-constructor': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-base-to-string': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-confusing-non-null-assertion': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-confusing-void-expression': off,
    // '@typescript-eslint/no-dupe-class-members': off,
    // '@typescript-eslint/no-duplicate-enum-values': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-duplicate-imports': off,
    // '@typescript-eslint/no-duplicate-type-constituents': off,
    // '@typescript-eslint/no-dynamic-delete': warn, // plugin:@typescript-eslint/strict
    '@typescript-eslint/no-empty-function': off, // ('error' in plugin:@typescript-eslint/recommended)
    // '@typescript-eslint/no-empty-interface': error, // plugin:@typescript-eslint/recommended
    '@typescript-eslint/no-explicit-any': error, // ('warn' in plugin:@typescript-eslint/recommended)
    // '@typescript-eslint/no-extra-non-null-assertion': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-extra-parens': off,
    // '@typescript-eslint/no-extra-semi': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-extraneous-class': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-floating-promises': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-for-in-array': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-implicit-any-catch': off,
    // '@typescript-eslint/no-implied-eval': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-import-type-side-effects': off,
    // '@typescript-eslint/no-inferrable-types': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-invalid-this': off,
    // '@typescript-eslint/no-invalid-void-type': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-loop-func': off,
    // '@typescript-eslint/no-loss-of-precision': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-magic-numbers': off,
    // '@typescript-eslint/no-meaningless-void-operator': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-misused-new': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-misused-promises': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-mixed-enums': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-namespace': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-non-null-asserted-nullish-coalescing': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-non-null-asserted-optional-chain': error, // plugin:@typescript-eslint/recommended
    '@typescript-eslint/no-non-null-assertion': off, // ('warn' in plugin:@typescript-eslint/recommended)
    // '@typescript-eslint/no-parameter-properties': off,
    // '@typescript-eslint/no-redeclare': off,
    // '@typescript-eslint/no-redundant-type-constituents': off,
    // '@typescript-eslint/no-require-imports': off,
    // '@typescript-eslint/no-restricted-imports': off,
    // '@typescript-eslint/no-shadow': off,
    // '@typescript-eslint/no-this-alias': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-throw-literal': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-type-alias': off,
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-unnecessary-condition': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-unnecessary-qualifier': off,
    // '@typescript-eslint/no-unnecessary-type-arguments': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-unnecessary-type-assertion': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-unnecessary-type-constraint': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/no-unsafe-argument': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-unsafe-assignment': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-unsafe-call': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-unsafe-declaration-merging': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-unsafe-enum-comparison': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-unsafe-member-access': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-unsafe-return': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/no-unused-expressions': off,
    // '@typescript-eslint/no-unused-vars': warn, // plugin:@typescript-eslint/recommended

    '@typescript-eslint/no-unused-vars': [error, {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }], // ('warn' in plugin:@typescript-eslint/recommended)

    // '@typescript-eslint/no-use-before-define': off,
    // '@typescript-eslint/no-useless-constructor': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/no-useless-empty-export': off,
    // '@typescript-eslint/no-var-requires': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/non-nullable-type-assertion-style': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/object-curly-spacing': off,
    // '@typescript-eslint/padding-line-between-statements': off,
    // '@typescript-eslint/parameter-properties': off,
    // '@typescript-eslint/prefer-as-const': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/prefer-enum-initializers': off,
    // '@typescript-eslint/prefer-for-of': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-function-type': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-includes': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-literal-enum-member': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-namespace-keyword': error, // plugin:@typescript-eslint/recommended
    '@typescript-eslint/prefer-nullish-coalescing': error, // ('warn' in plugin:@typescript-eslint/strict)
    // '@typescript-eslint/prefer-optional-chain': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-readonly-parameter-types': off,
    // '@typescript-eslint/prefer-readonly': off,
    // '@typescript-eslint/prefer-reduce-type-parameter': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-regexp-exec': off,
    // '@typescript-eslint/prefer-return-this-type': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-string-starts-ends-with': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/prefer-ts-expect-error': warn, // plugin:@typescript-eslint/strict
    // '@typescript-eslint/promise-function-async': off,
    // '@typescript-eslint/quotes': off,
    // '@typescript-eslint/require-array-sort-compare': off,
    // '@typescript-eslint/require-await': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/restrict-plus-operands': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/restrict-template-expressions': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/return-await': off,
    // '@typescript-eslint/semi': off,
    // '@typescript-eslint/sort-type-constituents': off,
    // '@typescript-eslint/sort-type-union-intersection-members': off,
    // '@typescript-eslint/space-before-blocks': off,
    // '@typescript-eslint/space-before-function-paren': off,
    // '@typescript-eslint/space-infix-ops': off,
    // '@typescript-eslint/strict-boolean-expressions': off,
    // '@typescript-eslint/switch-exhaustiveness-check': off,
    // '@typescript-eslint/triple-slash-reference': error, // plugin:@typescript-eslint/recommended
    // '@typescript-eslint/type-annotation-spacing': off,
    // '@typescript-eslint/typedef': off,
    // '@typescript-eslint/unbound-method': error, // plugin:@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/unified-signatures': warn, // plugin:@typescript-eslint/strict
  },
};

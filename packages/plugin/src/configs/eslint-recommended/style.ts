import { type Configuration, type ESLintRules } from '@lucaswinningham-eslint/types';
import { off, warn, error } from '@lucaswinningham-eslint/utils';

const style: Configuration<ESLintRules> = {
  rules: {
    'array-bracket-newline': [error, 'consistent'],
    'array-bracket-spacing': error,
    'array-element-newline': [error, 'consistent'],
    'block-spacing': error,
    'brace-style': [error, '1tbs', { allowSingleLine: true }],
    // 'camelcase': [error, { properties: 'never', ignoreDestructuring: false }],
    // 'capitalized-comments': [off, 'never', {
    //   line: {
    //     ignorePattern: '.*',
    //     ignoreInlineComments: true,
    //     ignoreConsecutiveComments: true,
    //   },
    //   block: {
    //     ignorePattern: '.*',
    //     ignoreInlineComments: true,
    //     ignoreConsecutiveComments: true,
    //   },
    // }],
    'comma-dangle': [error, 'always-multiline'],
    // 'comma-spacing': error,
    // 'comma-style': [error, 'last', {
    //   exceptions: {
    //     ArrayExpression: false,
    //     ArrayPattern: false,
    //     ArrowFunctionExpression: false,
    //     CallExpression: false,
    //     FunctionDeclaration: false,
    //     FunctionExpression: false,
    //     ImportDeclaration: false,
    //     ObjectExpression: false,
    //     ObjectPattern: false,
    //     VariableDeclaration: false,
    //     NewExpression: false,
    //   }
    // }],
    'computed-property-spacing': error,
    // 'consistent-this': off,
    // 'eol-last': [error, 'always'],
    // 'function-call-argument-newline': [error, 'consistent'],
    // 'func-call-spacing': [error, 'never'],
    // 'func-name-matching': [off, 'always', {
    //   includeCommonJSModuleExports: false,
    //   considerPropertyDescriptor: true,
    // }],
    // 'func-names': warn,
    // 'func-style': [off, 'expression'],
    // 'function-paren-newline': [error, 'multiline-arguments'],
    // 'id-denylist': off,
    // 'id-length': off,
    // 'id-match': off,
    // 'implicit-arrow-linebreak': [error, 'beside'],
    'indent': [error, 2],
    // 'indent': [error, 2, {
    //   SwitchCase: 1,
    //   VariableDeclarator: 1,
    //   outerIIFEBody: 1,
    //   // MemberExpression: null,
    //   FunctionDeclaration: {
    //     parameters: 1,
    //     body: 1
    //   },
    //   FunctionExpression: {
    //     parameters: 1,
    //     body: 1
    //   },
    //   CallExpression: {
    //     arguments: 1
    //   },
    //   ArrayExpression: 1,
    //   ObjectExpression: 1,
    //   ImportDeclaration: 1,
    //   flatTernaryExpressions: false,
    //   // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
    //   ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    //   ignoreComments: false
    // }],
    'jsx-quotes': [error, 'prefer-single'],
    'key-spacing': error,
    // 'keyword-spacing': [error, {
    //   before: true,
    //   after: true,
    //   overrides: {
    //     return: { after: true },
    //     throw: { after: true },
    //     case: { after: true }
    //   }
    // }],
    // 'line-comment-position': [off, {
    //   position: 'above',
    //   ignorePattern: '',
    //   applyDefaultPatterns: true,
    // }],
    // 'linebreak-style': [error, 'unix'],
    // 'lines-around-comment': off,
    // 'lines-between-class-members': [error, 'always', { exceptAfterSingleLine: false }],
    // 'logical-assignment-operators': [off, 'always', {
    //   enforceForIfStatements: true,
    // }],
    // 'max-depth': [off, 4],
    // 'max-len': [ // mine
    //   error,
    //   {
    //     code: 100,
    //     ignoreComments: false,
    //     ignoreUrls: false,
    //     ignoreStrings: false,
    //     ignoreTemplateLiterals: false,
    //     ignoreRegExpLiterals: false,
    //   },
    // ],
    // 'max-len': [error, 100, 2, { // airbnb
    //   ignoreUrls: true,
    //   ignoreComments: false,
    //   ignoreRegExpLiterals: true,
    //   ignoreStrings: true,
    //   ignoreTemplateLiterals: true,
    // }],
    // 'max-lines': [off, {
    //   max: 300,
    //   skipBlankLines: true,
    //   skipComments: true
    // }],
    // 'max-lines-per-function': [off, {
    //   max: 50,
    //   skipBlankLines: true,
    //   skipComments: true,
    //   IIFEs: true,
    // }],
    // 'max-nested-callbacks': off,
    // 'max-params': [off, 3],
    // 'max-statements': [off, 10],
    // 'max-statements-per-line': [off, { max: 1 }],
    // 'multiline-comment-style': [off, 'starred-block'],
    // 'multiline-ternary': [off, 'never'],
    // 'new-cap': [error, {
    //   newIsCap: true,
    //   newIsCapExceptions: [],
    //   capIsNew: false,
    //   capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    // }],
    // 'new-parens': error,
    // 'newline-per-chained-call': [error, { ignoreChainWithDepth: 4 }],
    // 'no-array-constructor': error,
    // 'no-bitwise': error,
    // 'no-continue': error,
    // 'no-inline-comments': off,
    // 'no-lonely-if': error,
    // 'no-mixed-operators': [error, {
    //   // the list of arithmetic groups disallows mixing `%` and `**`
    //   // with other arithmetic operators.
    //   groups: [
    //     ['%', '**'],
    //     ['%', '+'],
    //     ['%', '-'],
    //     ['%', '*'],
    //     ['%', '/'],
    //     ['/', '*'],
    //     ['&', '|', '<<', '>>', '>>>'],
    //     ['==', '!=', '===', '!=='],
    //     ['&&', '||'],
    //   ],
    //   allowSamePrecedence: false
    // }],
    'no-mixed-spaces-and-tabs': error, // eslint-recommended
    // 'no-multi-assign': [error],
    'no-multiple-empty-lines': [error,
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    // 'no-negated-condition': off,
    // 'no-nested-ternary': error,
    // 'no-new-object': error,
    // 'no-plusplus': error,
    // 'no-restricted-syntax': [
    //   error,
    //   {
    //     selector: 'ForInStatement',
    //     message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    //   },
    //   {
    //     selector: 'ForOfStatement',
    //     message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    //   },
    //   {
    //     selector: 'LabeledStatement',
    //     message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    //   },
    //   {
    //     selector: 'WithStatement',
    //     message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    //   },
    // ],
    'no-tabs': error,
    // 'no-ternary': off,
    // 'no-trailing-spaces': error, // mine
    // 'no-trailing-spaces': [error, {
    //   skipBlankLines: false,
    //   ignoreComments: false,
    // }], // airbnb
    // 'no-underscore-dangle': [error, {
    //   allow: [],
    //   allowAfterThis: false,
    //   allowAfterSuper: false,
    //   enforceInMethodNames: true,
    // }],
    // 'no-unneeded-ternary': [error, { defaultAssignment: false }],
    // 'no-whitespace-before-property': error,
    // 'nonblock-statement-body-position': [error, 'beside', { overrides: {} }],
    // 'object-curly-newline': [error, {
    //   ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    //   ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    //   ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    //   ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    // }],
    'object-curly-spacing': [error, 'always'],
    // 'object-property-newline': [error, {
    //   allowAllPropertiesOnSameLine: true,
    // }],
    // 'one-var': [error, 'never'],
    // 'one-var-declaration-per-line': [error, 'always'],
    // 'operator-assignment': [error, 'always'],
    // 'operator-linebreak': [error, 'before', { overrides: { '=': 'none' } }],
    // 'padded-blocks': [error, {
    //   blocks: 'never',
    //   classes: 'never',
    //   switches: 'never',
    // }, {
    //   allowSingleLineBlocks: true,
    // }],
    // 'padding-line-between-statements': off,
    // 'prefer-exponentiation-operator': error,
    // 'prefer-object-spread': error,
    // 'quote-props': [error, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    // 'quotes': [error, 'single', { avoidEscape: true }],
    'semi': error,
    // 'semi-spacing': [error, { before: false, after: true }],
    // 'semi-style': [error, 'last'],
    // 'sort-keys': [off, 'asc', { caseSensitive: false, natural: true }],
    // 'sort-vars': off,
    // 'space-before-blocks': error,
    // 'space-before-function-paren': [error, {
    //   anonymous: 'always',
    //   named: 'never',
    //   asyncArrow: 'always'
    // }],
    // 'space-in-parens': [error, 'never'],
    // 'space-infix-ops': error,
    // 'space-unary-ops': [error, {
    //   words: true,
    //   nonwords: false,
    //   overrides: {
    //   },
    // }],
    // 'spaced-comment': error, // mine
    // 'spaced-comment': [error, 'always', {
    //   line: {
    //     exceptions: ['-', '+'],
    //     markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
    //   },
    //   block: {
    //     exceptions: ['-', '+'],
    //     markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
    //     balanced: true,
    //   }
    // }], // airbnb
    // 'switch-colon-spacing': [error, { after: true, before: false }],
    // 'template-tag-spacing': [error, 'never'],
    // 'unicode-bom': [error, 'never'],
    // 'wrap-regex': off,
  },
};

export default style;

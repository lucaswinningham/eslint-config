import { type Configuration, type ESLintRules } from '@lucaswinningham/eslint-types';
import { off, error } from '@lucaswinningham/eslint-utils';

const es6: Configuration<ESLintRules> = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    // TODO: enable requireReturnForObjectLiteral?
    // 'arrow-body-style': [error, 'as-needed', {
    //   requireReturnForObjectLiteral: false,
    // }],
    'arrow-parens': error,
    'arrow-spacing': error,
    'constructor-super': error, // eslint-recommended
    // 'generator-star-spacing': [error, { before: false, after: true }],
    'no-class-assign': error, // eslint-recommended
    // 'no-confusing-arrow': [error, { allowParens: true }],
    'no-const-assign': error, // eslint-recommended
    'no-dupe-class-members': error, // eslint-recommended
    // 'no-duplicate-imports': off,
    'no-new-symbol': error, // eslint-recommended
    // 'no-restricted-exports': [error, {
    //   restrictedNamedExports: [
    //     'default', // use `export default` to provide a default export
    //     'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
    //   ],
    // }],
    // 'no-restricted-imports': [off, {
    //   paths: [],
    //   patterns: []
    // }],
    'no-this-before-super': error, // eslint-recommended
    // 'no-useless-computed-key': error,
    // 'no-useless-constructor': error,
    // 'no-useless-rename': [error, {
    //   ignoreDestructuring: false,
    //   ignoreImport: false,
    //   ignoreExport: false,
    // }],
    // 'no-var': error,
    // 'object-shorthand': [error, 'always', {
    //   ignoreConstructors: false,
    //   avoidQuotes: true,
    // }],
    // 'prefer-arrow-callback': [error, {
    //   allowNamedFunctions: false,
    //   allowUnboundThis: true,
    // }],
    // 'prefer-const': [error, {
    //   destructuring: 'any',
    //   ignoreReadBeforeAssign: true,
    // }],
    // 'prefer-destructuring': [error, {
    //   VariableDeclarator: {
    //     array: false,
    //     object: true,
    //   },
    //   AssignmentExpression: {
    //     array: true,
    //     object: false,
    //   },
    // }, {
    //   enforceForRenamedProperties: false,
    // }],
    // 'prefer-numeric-literals': error,
    // 'prefer-rest-params': error,
    // 'prefer-spread': error,
    // 'prefer-template': error,
    'require-yield': error, // eslint-recommended
    // 'rest-spread-spacing': [error, 'never'],
    // 'sort-imports': [off, {
    //   ignoreCase: false,
    //   ignoreDeclarationSort: false,
    //   ignoreMemberSort: false,
    //   memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    // }],
    // 'symbol-description': error,
    // 'template-curly-spacing': error,
    // 'yield-star-spacing': [error, 'after'],
  },
};

export default es6;

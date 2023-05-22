import { Configuration, type ReactRules } from '@lucaswinningham-eslint/types';
import { off, error } from '@lucaswinningham-eslint/utils';

export const react: Configuration<ReactRules> = {
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'react/boolean-prop-naming': off,
    'react/button-has-type': error,
    'react/default-props-match-prop-types': [error, { allowRequiredDefaults: false }],
    'react/destructuring-assignment': [error, 'always'],
    // 'react/display-name': error, // plugin:react/recommended
    // 'react/forbid-component-props': off,
    // 'react/forbid-dom-props': off,
    // 'react/forbid-elements': off,
    'react/forbid-foreign-prop-types': error,
    // 'react/forbid-prop-types': [error, {
    //   forbid: ['any', 'array', 'object'],
    //   checkContextTypes: true,
    //   checkChildContextTypes: true,
    // }],
    'react/function-component-definition': [error, {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
    }],
    'react/hook-use-state': error,
    // 'react/iframe-missing-sandbox': off,
    'react/jsx-boolean-value': [error, 'never', { always: [] }],
    // 'react/jsx-child-element-spacing': off,
    'react/jsx-closing-bracket-location': [error, 'line-aligned'],
    'react/jsx-closing-tag-location': error,
    'react/jsx-curly-brace-presence': [error, { props: 'never', children: 'never' }],
    'react/jsx-curly-newline': error,
    'react/jsx-curly-spacing': error,
    'react/jsx-equals-spacing': error,
    // TODO: actually typescript config?
    'react/jsx-filename-extension': [error, { extensions: ['.jsx', '.tsx'] }], // ('off' in plugin:react/recommended)
    'react/jsx-first-prop-new-line': [error, 'multiline'],
    'react/jsx-fragments': error,
    'react/jsx-handler-names': error,
    'react/jsx-indent': [error, 2],
    'react/jsx-indent-props': [error, 2],
    // 'react/jsx-key': error, // plugin:react/recommended
    // 'react/jsx-max-depth': off,
    'react/jsx-max-props-per-line': [error, { maximum: 1, when: 'multiline' }],
    'react/jsx-newline': error,
    'react/jsx-no-bind': error,
    // 'react/jsx-no-comment-textnodes': error, // plugin:react/recommended
    'react/jsx-no-constructed-context-values': error,
    'react/jsx-no-duplicate-props': [error, { ignoreCase: true }], // ('error' in plugin:react/recommended)
    // 'react/jsx-no-leaked-render': off,
    'react/jsx-no-literals': error,
    'react/jsx-no-script-url': error,
    // 'react/jsx-no-target-blank': error, // plugin:react/recommended
    // 'react/jsx-no-undef': error, // plugin:react/recommended
    'react/jsx-no-useless-fragment': error,
    'react/jsx-one-expression-per-line': [error, { allow: 'single-child' }],
    'react/jsx-pascal-case': error,
    'react/jsx-props-no-multi-spaces': error,
    // 'react/jsx-props-no-spreading': off,
    // 'react/jsx-sort-default-props': off,
    // 'react/jsx-sort-props': off,
    'react/jsx-tag-spacing': [error, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    // 'react/jsx-uses-react': off, // plugin:react/jsx-runtime ('error' in plugin:react/recommended)
    // 'react/jsx-uses-vars': error, // plugin:react/recommended
    'react/jsx-wrap-multilines': [error, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/no-access-state-in-setstate': error,
    // 'react/no-adjacent-inline-elements': off,
    'react/no-array-index-key': error,
    'react/no-arrow-function-lifecycle': error,
    // 'react/no-children-prop': error, // plugin:react/recommended
    'react/no-danger': error,
    // 'react/no-danger-with-children': error, // plugin:react/recommended
    // 'react/no-deprecated': error, // plugin:react/recommended
    // 'react/no-did-mount-set-state': off,
    'react/no-did-update-set-state': error,
    // 'react/no-direct-mutation-state': error, // plugin:react/recommended
    // 'react/no-find-dom-node': error, // plugin:react/recommended
    'react/no-invalid-html-attribute': error,
    // 'react/no-is-mounted': error, // plugin:react/recommended
    // 'react/no-multi-comp': off,
    'react/no-namespace': error,
    // 'react/no-object-type-as-default-prop': off,
    'react/no-redundant-should-component-update': error,
    // 'react/no-render-return-value': error, // plugin:react/recommended
    // 'react/no-set-state': off,
    // 'react/no-string-refs': error, // plugin:react/recommended
    'react/no-this-in-sfc': error,
    'react/no-typos': error,
    // 'react/no-unescaped-entities': error, // plugin:react/recommended
    // 'react/no-unknown-property': error, // plugin:react/recommended
    // 'react/no-unsafe': off, // plugin:react/recommended
    'react/no-unstable-nested-components': error,
    'react/no-unused-class-component-methods': error,
    'react/no-unused-prop-types': error,
    'react/no-unused-state': error,
    'react/no-will-update-set-state': error,
    'react/prefer-es6-class': [error, 'always'],
    // 'react/prefer-exact-props': off,
    // 'react/prefer-read-only-props': off,
    'react/prefer-stateless-function': [error, { ignorePureComponents: true }],
    // 'react/prop-types': error, // plugin:react/recommended
    // 'react/react-in-jsx-scope': off, // plugin:react/jsx-runtime ('error' in plugin:react/recommended)
    'react/require-default-props': [error, { forbidDefaultForRequired: true }],
    // 'react/require-optimization': off,
    // 'react/require-render-return': error, // plugin:react/recommended
    'react/self-closing-comp': error,
    'react/sort-comp': error,
    // 'react/sort-default-props': off,
    // 'react/sort-prop-types': off,
    'react/state-in-constructor': error,
    'react/static-property-placement': error,
    'react/style-prop-object': error,
    'react/void-dom-elements-no-children': error,

    // 'react-hooks/rules-of-hooks': error, // plugin:react-hooks/recommended
    'react-hooks/exhaustive-deps': error, // ('warn' in plugin:react-hooks/recommended)
  },
};

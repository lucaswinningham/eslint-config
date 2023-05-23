import { type Configuration, type ESLintRules } from '@lucaswinningham/eslint-types';
import { error } from '@lucaswinningham/eslint-utils';

const strict: Configuration<ESLintRules> = {
  rules: {
    'strict': [error, 'never'],
  },
};

export default strict;

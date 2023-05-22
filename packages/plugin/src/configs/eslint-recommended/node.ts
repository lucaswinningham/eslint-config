import { type Configuration, type ESLintRules } from '@lucaswinningham-eslint/types';
import { error } from '@lucaswinningham-eslint/utils';

const node: Configuration<ESLintRules> = {
  env: {
    node: true
  },
  rules: {
    'callback-return': error,
  },
};

export default node;

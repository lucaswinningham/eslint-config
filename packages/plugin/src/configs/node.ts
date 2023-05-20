import { type Configuration } from '@lucaswinningham-eslint/types';
import { error } from '@lucaswinningham-eslint/utils';

const node: Configuration = {
  env: {
    node: true
  },
  rules: {
    'callback-return': error,
  },
};

export default node;

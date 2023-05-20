import { type Configuration } from '@lucaswinningham-eslint/types';
import { error } from '@lucaswinningham-eslint/utils';

const strict: Configuration = {
  rules: {
    'strict': [error, 'never'],
  },
};

export default strict;

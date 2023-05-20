import { type Plugin } from '@lucaswinningham-eslint/types';

import {
  all,
  bestPractices,
  errors,
  es6,
  imports,
  node,
  strict,
  style,
  variables,
} from './configs';

const plugin: Plugin = {
  configs: {
    all,
    'best-practices': bestPractices,
    errors,
    es6,
    imports,
    node,
    strict,
    style,
    variables,
  },
};

export default plugin;

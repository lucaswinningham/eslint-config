import { type Plugin } from '@lucaswinningham-eslint/types';

import {
  eslintRecommended,
  react,
  typescript,
} from './configs';

const plugin: Plugin = {
  configs: {
    'eslint-recommended': eslintRecommended,
    react,
    typescript,
  },
};

export default plugin;

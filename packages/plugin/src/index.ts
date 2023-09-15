import { type Plugin } from '@lucaswinningham/eslint-types';

import { eslintRecommended, react, typescript } from './configs';

const plugin: Plugin = {
  meta: {
    name: "@lucaswinningham/eslint-plugin",
    version: "0.0.1"
  },
  configs: {
    'eslint-recommended': eslintRecommended,
    react,
    typescript,
  },
};

export default plugin;

import { type Configuration } from '@lucaswinningham-eslint/types';

export const eslintRecommended: Configuration = {
  extends: [
    './configs/eslint-recommended/best-practices',
    './configs/eslint-recommended/errors',
    './configs/eslint-recommended/es6',
    './configs/eslint-recommended/imports',
    './configs/eslint-recommended/node',
    './configs/eslint-recommended/promise',
    './configs/eslint-recommended/strict',
    './configs/eslint-recommended/style',
    './configs/eslint-recommended/variables',
  ],
  rules: {},
};

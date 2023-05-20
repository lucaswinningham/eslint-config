import { type Configuration } from '@lucaswinningham-eslint/types';

const all: Configuration = {
  extends: [
    require.resolve('./best-practices'),
    require.resolve('./errors'),
    require.resolve('./node'),
    require.resolve('./style'),
    require.resolve('./variables'),
    require.resolve('./es6'),
    require.resolve('./imports'),
    require.resolve('./strict'),
  ],
  rules: {},
};

export default all;

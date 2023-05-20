import { TSESLint } from '@typescript-eslint/utils';

import { type Rules } from 'eslint-define-config';

export type Configuration = Omit<TSESLint.Linter.Config, 'rules'> & {
  rules: Rules;
};
export type Extensions = string | string[];
export type Plugin = TSESLint.Linter.Plugin;
export { type Rules };
export type Severity = TSESLint.Linter.SeverityString;

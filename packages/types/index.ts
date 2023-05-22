import { TSESLint } from '@typescript-eslint/utils';
import { type Plugin } from 'eslint/lib/shared/types';

// import { type Rules } from 'eslint-define-config';

export type Configuration<R = Rules> = Omit<TSESLint.Linter.Config, 'rules'> & {
  rules: Rules;
};
export type Extensions = string | string[];
// export type Plugin = TSESLint.Linter.Plugin;
export { type Plugin };
// export { type Rules };
export type Severity = TSESLint.Linter.SeverityString;

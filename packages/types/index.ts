import { TSESLint } from '@typescript-eslint/utils';
import { type EslintRules as PurelyESLintRules } from 'eslint-define-config/src/rules/eslint';
import { type ImportRules as PurelyImportRules } from 'eslint-define-config/src/rules/import';
import { type PromiseRules as PurelyPromiseRules } from 'eslint-define-config/src/rules/promise';
import { type ReactRules as PurelyReactRules } from 'eslint-define-config/src/rules/react';
import { type ReactHooksRules as PurelyReactHooksRules } from 'eslint-define-config/src/rules/react-hooks';
import { type TypeScriptRules as PurelyTypeScriptRules } from 'eslint-define-config/src/rules/typescript-eslint';

export type Configuration<Rules> = Omit<TSESLint.Linter.Config, 'rules'> & { rules: Rules };
export type Extensions = string | string[];
export type Plugin = TSESLint.Linter.Plugin;

export type ESLintRules = Partial<PurelyESLintRules>;
export type ImportRules = Partial<PurelyImportRules>;
export type PromiseRules = Partial<PurelyPromiseRules>;
export type ReactRules = Partial<PurelyReactRules & PurelyReactHooksRules>;
export type TypeScriptRules = Partial<PurelyTypeScriptRules>;

export type Severity = TSESLint.Linter.SeverityString;

import { nextJsConfig } from '@workspace/eslint-config/next-js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],
    },
  },
  {
    files: ['components/docs/icons/**/*.tsx', 'app/icons-test/page.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['components/docs/motion-grid-editor.tsx'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];

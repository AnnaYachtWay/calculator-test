import yachtwayEslintConfig from '@yachtway/eslint-config-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    '**/node_modules',
    '**/dist',
    '**/coverage',
    '**/.next',
    '**/.github',
    '**/.husky',
    '**/*.scss',
    '**/*.css',
    '**/README.md',
    '**/assets/**',
    'eslint.config.js',
    'tailwind.config.js',
    '.prettierrc.js',
  ]),
  {
    extends: [yachtwayEslintConfig],
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-mixed-operators': 'off',
      'import/prefer-default-export': 'off',

      'react/jsx-no-duplicate-props': [
        'error',
        {
          ignoreCase: false,
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        },
      ],

      '@typescript-eslint/no-empty-object-type': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          vars: 'all',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
          varsIgnorePattern: '^_',
        },
      ],

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['react-i18next'],
              message:
                'Do NOT use react-i18next, use next-i18next instead. ' +
                'For more information, see the next-i18next documentation or ask team members.',
            },
          ],
        },
      ],
    },
  },
]);

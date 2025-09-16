import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tailwindcss from 'eslint-plugin-tailwindcss';

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),

    js.configs.recommended,
    ...tseslint.configs.recommended,
    react.configs.recommended,
    {
        plugins: { 'react-hooks': reactHooks },
        rules: reactHooks.configs.recommended.rules,
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
                project: './tsconfig.json',
            },
        },
        plugins: { tailwindcss },
        settings: { react: { version: 'detect' } },
        rules: {
            'prettier/prettier': 'warn',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',

            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/no-contradicting-classname': 'error',
        },
    },

    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    },
];

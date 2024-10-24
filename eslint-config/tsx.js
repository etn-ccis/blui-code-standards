const js = require('@eslint/js');
const reactRecommened  = require('eslint-plugin-react/configs/recommended.js');
const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const typescriptEslintParser = require('@typescript-eslint/parser');
const bluiRules = require('./blui-rules.js');

module.exports = [
    js.configs.recommended,
    tseslint.configs.eslintRecommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    reactRecommened,
    prettierRecommended,
    {
        languageOptions: {
            parser: typescriptEslintParser
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/prop-types': 'off',
            'react/display-name': 'off',
            ...bluiRules
        },
    }
];

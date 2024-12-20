const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const typescriptEslintParser = require('@typescript-eslint/parser');
const bluiRules = require('./blui-rules.js');

module.exports = [
    js.configs.recommended,
    tseslint.configs.eslintRecommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierRecommended,
    {
        languageOptions: {
            parser: typescriptEslintParser
        },
        rules: {
            ...bluiRules
        },
    }
];

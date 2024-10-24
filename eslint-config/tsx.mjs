import js from "@eslint/js";
import reactRecommened from "eslint-plugin-react/configs/recommended.js"
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import typescriptEslintParser from "@typescript-eslint/parser";
import bluiRules from './blui-rules.js'

export default [
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

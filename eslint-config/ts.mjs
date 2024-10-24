import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import bluiRules from './blui-rules.js'

export default [
    js.configs.recommended,
    tseslint.configs.eslintRecommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierRecommended,
    {
        rules: {
            'react/prop-types': 'off',
            'react/display-name': 'off',
            ...bluiRules
        },
    }
];

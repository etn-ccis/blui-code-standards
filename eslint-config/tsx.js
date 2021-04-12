const tsxProfile = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'eslint-config-prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: Object.assign(
        {
            'react/prop-types': 'off',
            'react/display-name': 'off',
        },
        require('./pxb-rules')
    ),
};

module.exports = tsxProfile;

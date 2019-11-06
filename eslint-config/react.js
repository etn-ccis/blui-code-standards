const reactProfile = {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'eslint-config-prettier'
    ],
    rules: require('./pxb-rules')
};

module.exports = reactProfile;

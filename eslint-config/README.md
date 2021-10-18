# Brightlayer UI ESLint Configuration

[![](https://img.shields.io/npm/v/@brightlayer-ui/eslint-config?label=%40brightlayer-ui%2Feslint-config&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/eslint-config)

This package contains Brightlayer UI ESLint configurations for Typescript and TSX projects. ESLint is used for enforcement of code quality across Brightlayer UI applications.

> **NOTE:** The Brightlayer UI ESLint configuration package is only compatible with TypeScript projects.

All ESLint rules enforcing code style have been disabled in favor of using prettier for code formatting. Refer to [@brightlayer-ui/prettier-config](https://www.npmjs.com/package/@brightlayer-ui/prettier-config) for integrating prettier into your application.

## Installation

From the root of your package, install the Brightlayer UI configuration:

`yarn add --dev @brightlayer-ui/eslint-config`

You will also need to install the following peer dependencies:

`yarn add --dev eslint eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`

If your project is using React with the TSX file extension, you also need to install:

`yarn add --dev eslint-plugin-react`

## Configuration

### Add Linting Scripts

Add the following scripts to your `package.json`.

```
"scripts": {
    "lint": "eslint \"src/**/**.ts\"",
    "lint:fix": "eslint \"src/**/**.ts\" --fix",
}
```

> **TSX Projects:** Make sure to include .tsx file extension in your lint commands (e.g. `eslint '**/**.{tsx,ts}'`)

The `--fix` flag will automatically attempt to fix reported errors. Leaving this off will report errors/warnings without attempting to fix them.

### Import the Linting configuration

The Brightlayer UI configuration needs to be imported into ESLint. Add the following `.eslintrc.js` to the root of your project.

```
module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ '@brightlayer-ui/eslint-config/ts' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true
    }
};
```

> **TSX Projects:** Extend from `@brightlayer-ui/eslint-config/tsx`.

## Usage

To lint all typescript files in your project, run `yarn lint`.

To automatically fix linting errors in your project, run `yarn lint:fix` or `yarn lint --fix`.

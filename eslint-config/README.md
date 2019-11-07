# PX Blue ESLint Configuration
[![](https://img.shields.io/npm/v/@pxblue/eslint-config?label=%40pxblue%2Feslint-config&style=flat)](https://www.npmjs.com/package/@pxblue/eslint-config) 

This package contains PX Blue ESLint configurations for Typescript and TSX projects. ESLint is used for enforcement of code quality across PX Blue applications. 

> **NOTE:** The PX Blue ESLint configuration package is only compatible with TypeScript projects.

All ESLint rules enforcing code style have been disabled in favor of using prettier for code formatting. Refer to [@pxblue/prettier-config](https://www.npmjs.com/package/@pxblue/prettier-config) for integrating prettier into your application.

## Installation
From the root of your package, install the PX Blue configuration:

`yarn add --dev @pxblue/eslint-config`

You will also need to install the following peer dependencies:

`yarn add --dev eslint eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`

If your project is using React with the TSX file extension, you also need to install:

`yarn add --dev eslint-plugin-react`

## Configuration
### Add Linting Scripts
Add the following scripts to your `package.json`.
```
"scripts": {
    "lint": "eslint '**/**.ts'",
    "lint:fix": "eslint '**/**.ts' --fix",
}
```

> **TSX Projects:** Make sure to include .tsx file extension in your lint commands (e.g. `eslint '**/**.{tsx,ts}'`)


The `--fix` flag will automatically attempt to fix reported errors. Leaving this off will report errors/warnings without attempting to fix them.

### Import the Linting configuration
The PX Blue configuration needs to be imported into ESLint. Add the following `.eslintrc.js` to the root of your project.
```
module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ '@pxblue/eslint-config/ts' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true
    }
};
```

> **TSX Projects:** Extend from `@pxblue/estlint-config/tsx`.

## Usage
To lint all typescript files in your project, run `yarn lint`.

To automatically fix linting errors in your project, run `yarn lint:fix` or `yarn lint --fix`.


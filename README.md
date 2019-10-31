# PX Blue Linting
This package contains ESLint, Prettier, and EditorConfig profiles for use across all PX Blue applications.
ESLint is used for enforcement of Code Quality, while Prettier and Editorconfig are used strictly for standardizing Code Style.

The PX Blue ESLint profile is a combination of ESLint-Recommended and Typescript-ESLint best practices.   All code-style enforcing ESLint rules have been disabled so Prettier can work unhindered.  PX Blue ESLint configuration is only compatible with projects using Typescript.

# Installation
In order to use PX Blue's ESLint and Prettier configs, several dependencies need to be installed first.


### ESLint Config
From the root of your project, run:  

`yarn add --save-dev eslint eslint-plugin-import eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`


Add the following script to your `package.json`.
```
"scripts": {
    ...
    "lint": "eslint '**/**.ts' --fix",
    ...
}
```
The `--fix` flag will automatically attempt to fix reported errors. To see the recommended edits before fixing them, remove the `--fix` tag.

The PX Blue ruleset needs to be imported into ESLint.  Add the following `.eslintrc.js` to the root of your project.
```
module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ 'pxblue' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true
    }
};

```
To lint all typescript files in your project, run `yarn lint`.

### Prettier Config
From the root of your project, run:  

`yarn add --save-dev prettier`


Add the following script to your `package.json`.
```
"prettier": "eslint-config-pxblue/.prettierrc",
"scripts": {
    ....
    "prettier": "prettier '**/**.ts' --write",
    ...    
}
```

The `--write` flag will automatically fix all code style violations. 
To lint all typescript files in your project, run `yarn prettier`.

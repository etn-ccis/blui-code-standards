# PX Blue Prettier Configuration
[![](https://img.shields.io/npm/v/@pxblue/prettier-config?label=%40pxblue%2Fprettier-config&style=flat)](https://www.npmjs.com/package/@pxblue/prettier-config) 

This package contains the PXBlue prettier and editorconfig profiles used to enforce consistent code style.

## Installation
From the root of your project, install prettier:  

`yarn add --dev prettier`

and the PX Blue prettier config:

`yarn add --dev @pxblue/prettier-config`

## Configuration
Add the following script to your `package.json`.
```
"prettier": "@pxblue/prettier-config",
"scripts": {
    "prettier": "prettier './**/**.{ts, tsx, js, jsx, json, css, scss}' --write",
}
```
The `--write` flag will automatically fix all code style violations. 

> You can update the file extensions list to suit the particular files you would like to format.

## Usage
To format the files in your project, run `yarn prettier`.

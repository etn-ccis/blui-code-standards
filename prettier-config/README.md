# Brightlayer UI Prettier Configuration
[![](https://img.shields.io/npm/v/@brightlayer-ui/prettier-config?label=%40brightlayer-ui%2Fprettier-config&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/prettier-config) 

This package contains the Brightlayer UI prettier and editorconfig profiles used to enforce consistent code style.

## Installation
From the root of your project, install prettier:  

`yarn add --dev prettier`

and the Brightlayer UI prettier config:

`yarn add --dev @brightlayer-ui/prettier-config`

## Configuration
Add the following script to your `package.json`.
```
"prettier": "@brightlayer-ui/prettier-config",
"scripts": {
    "prettier": "prettier \"src/**/**.{ts,tsx,js,jsx,json,css,scss,html}\" --write",
}
```
The `--write` flag will automatically fix all code style violations. 

> You can update the file extensions list to suit the particular files you would like to format.

## Usage
To format the files in your project, run `yarn prettier`.

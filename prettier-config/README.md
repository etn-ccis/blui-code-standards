# PX Blue Prettier Config
This package contains PXBlue's Prettier and EditorConfig profiles to enforce consistent code style.

# Installation
Follow the steps below to install Prettier and integrate PX Blue's Prettier config.

### Prettier Setup
From the root of your project, run:  

`yarn add --save-dev prettier`


Add the following script to your `package.json`.
```
"prettier": "@pxblue/prettier-config",
"scripts": {
    ....
    "prettier": "prettier '**/**.ts' --write",
    ...    
}
```

The `--write` flag will automatically fix all code style violations. 
To lint all typescript files in your project, run `yarn prettier`.

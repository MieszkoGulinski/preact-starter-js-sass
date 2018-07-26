# Preact starter with JS and Sass

This is a simple starter for a Preact + Redux app. It handles only JS and SCSS compilation. It doesn't handle anything server-side. It also doesn't have any built-in unit testing. It also doesn't have hot module replacement.

[Preact](https://preactjs.com/) is a JavaScript library to build user interfaces. It's very similar to [React](https://reactjs.org/), but is much smaller.

[Sass](https://sass-lang.com/) is a stylesheet language (actually two) that compile to CSS files. Here we're using [node-sass](https://github.com/sass/node-sass) implementation.

The reason for not adding anything else is simplicity - the more self-contained and integrated something is, and the more features it has, and the more things happen under the hood - the harder it is to learn, to understand, to debug, and to do something nonstandard. Let's stick to Unix philosophy of having one tool for one purpose.

## How to run

Install packages:
```
npm install
```

To build files in development mode:
```
npm run build-dev
```
It'll use `src/app.js` and `src/scss/app.scss` as entry points, and generate `dist/bundle.js` and `dist/styles.css` files.

To watch files in development mode:
```
npm run watch
```
It'll generate the files as previous command, but it'll also watch for changes in source files and when they change, it'll generate the output ones again.

To build files in production mode - this performs minification of JavaScript:
```
npm run build
```

To see that it's working, open file `dist/index.html`. In your app, you'll most probably need to change paths to the files, depending on your deployment.

## Known potential issue

As of writing this (July 2018), the stable version of `extract-text-webpack-plugin` doesn't work with Webpack 4. If you encounter this error:
`Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead`
you need to install beta version of that package, by:
`npm install --save-dev extract-text-webpack-plugin@next`
In `package.json`, the working version is specified, so installing packages by regular `npm install` shouldn't cause that error.

## Notes about using Preact

- You always need to import `h` when using JSX - e.g., `import { h, Component } from 'preact'`. This is because JSX gets compiled to set of function calls, and the called function is named `h`.
- If your file ends with `.jsx`, you need to add `.jsx` when importing it, e.g. `import ExampleComponent from './ExampleComponent.jsx'` in `app.js`, otherwise Webpack won't understand that import.
- To use React components with Preact, you'll need a [compatibility addon](https://github.com/developit/preact-compat).

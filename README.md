# Preact starter with JS and Sass

This is a simple starter for a Preact + Redux app. It handles only JS and SCSS compilation. It doesn't handle anything server-side. It also doesn't have any built-in unit testing. It also doesn't have hot module replacement.

Install packages:
```
npm install
```

To build files in development mode:
```
npm run build-dev
```
It'll use `src/app.js` and `src/scss/app.scss` as entry points, and generate

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

# Webpack configuration explanation

The primary purpose of Webpack is to convert JavaScript modules into a form that can be ran in browser, in a form of file named *bundle*. Because Webpack can be extended with various plugins and extensions named _loaders_, which can perform operations on any type of file, I'm using it also to run SCSS files to CSS file conversion, as browsers understand only CSS.

While Webpack has much more abilities than that. For example, it can treat CSS, SCSS or image files as dependency of JS files and generate bundle with multiple output files based on that, it can replace JS on running page with new version (it's called *hot module replacement*), replace CSS on a running page, or split output bundle into several files. I'm not using these options.

The file `webpack.config.js` stores settings for Webpack. Let's take a look through its content:

## Entry files
```
entry: [
  './src/app.js',
  './src/scss/app.scss'
],
```
These files are the entry files - they are the start of dependency graph. One file is JavaScript "main" file, the other is SCSS "main" file. Now `app.js` can include other JS files using `import` or `require`, and these files can include other files, and so on. Same for SCSS files.

## Output
```
output: {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js'
},
```
This option specifies location and name of output bundle JS file. It'll be saved `dist/bundle.js` relative to root directory of the repository. Because core functionality of Webpack is bundling JavaScript, not SCSS, we'll need to specify CSS file location separately.
Files that are automatically generated by build tools, namely `dist/bundle.js` and `dist/styles.css`, aren't added to Git.

## JSX Babel rule
```
{
  test: /\.jsx?/i,
  loader: 'babel-loader',
  options: {
    presets: ['es2015'],
    plugins: [
      ['transform-react-jsx', { pragma: 'h' }]
    ]
  }
},
```
In each entry in `rules` array, we specify a rule that applies specified loader on files with matching name. This rule matches file with .js and .jsx extension, and runs `babel-loader` on these files. Babel is a transpiler (source code to source code converter) that allows newer features of JavaScript to be ran on older browsers not supporting them (hence `presets: ['es2015']`), and also it performs conversion of JSX syntax to JavaScript functions from React or Preact library. Because the function for creating a component in Preact is named `h` (hence `import { h, Component } from 'preact'`), we give this name in option `['transform-react-jsx', { pragma: 'h' }]`.

## Acknowledgements
In setting up Webpack compiling Preact, I used Webpack settings used in this Preact starter repository:
https://github.com/developit/zero-to-preact
In setting up Sass in Webpack, I used these instructions:
https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/

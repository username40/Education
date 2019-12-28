/*Install and tune-up Babel*/

// Babel is tool for transpilation of code. This tool is translate code written
// on ES6 to ES5 standart.
// At first - install node.js.
// Go to https://nodejs.org/en/ and download LTS version.
// After install check it.
// Press win + r.
// In the window write cmd and press Enter.
// In the console write node -v and press Enter.
// After we need to initialize npm.
// Open directory in the command prompt and write npm init -y.
// -y means that all parameters is default.
// After write in the cmd.
// npm install babel-cli babel-core babel-preset-es2015 --save-dev.
// babel-cli is command line interface - you can use babel in the cmd.
// babel-core it's core ))).
// babel-preset-es-2015 it's module which is necessary for transpile es6>es5.
// --save-dev add modules in the package.json in the devdependencies section.
// After change  "test": "echo \"Error: no test specified\" && exit 1" to
// "build": "babel src -d dist --presets es2015".
// You must create folders src and dist at first )).
// After add 1 more "watch": "babel src -d dist --presets es2015 -w".
// It's watcher - after the all changes in the file then will transpiled.
let name = 'username)))';
let users = {
  'name': 'Slava'
}

let five = 5;

let apples = `i have ${five} apples`;
// This file isn't transpiled, so must use CommonJS and es2015
// Rigister babel to transpile before our tests run.

require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};

// var express = require('express'); ES5
// var path = require('path'); ES5
// var open = require('open'); ES5
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../.webpack.config.dev.js';

const port = 3000;
const app = express();
const compiler = webpack(config); //for webpack
// setup webpack

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(error){
  if(error){
    console.error(error);
  } else{
    open('http://localhost:' + port);
  }
})

#!/usr/bin/env node
var http = require('http');
var app = require('../src');

const server = http.createServer(app);

const port = process.env.PORT || 4000;

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
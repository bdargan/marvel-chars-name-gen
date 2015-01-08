"use strict";
var fs = require('fs');

function generate () {

  var names = fs.readFileSync('./names.txt').toString().split('\n');
  var nameCount = names.length;
  var coolName =  names[Math.floor(Math.random()*nameCount)] + ' ' + names[Math.floor(Math.random()*nameCount)]
  return coolName;
}

module.exports = generate;

"use strict";
var fs = require('fs');

exports.generate = function() {

  var names = fs.readFileSync('./names.txt').toString().split('\n');
  var nameCount = names.length;
  var coolName =  names[Math.floor(Math.random()*nameCount)] + ' ' + names[Math.floor(Math.random()*nameCount)]
  return coolName;
}

exports.test = function() {
    console.log("Expect to see a cool name:\n"+this.generate());
};


'use strict';

var takeANumber = function(deli, name){
  console.log("Welcome, " + name + ". You are number " + (deli.length + 1) + " in line.")
  deli.push(name)
};

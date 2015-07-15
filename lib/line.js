'use strict';

var line = function(deli) {
  var startWith = "The line is currently: ";
  if(deli.length > 0) {
    deli.forEach(function(person, i) {
      startWith += (i + 1) + ". " + person + ", "
  })
    console.log(startWith.substring(0, startWith.length - 2))

  } else {
    console.log("The line is currently empty.")
  }
};
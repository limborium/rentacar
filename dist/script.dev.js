"use strict";

var makeObject = {
  "2017": {
    "Honda": ["Accord", "Civic", "Odyssey"],
    "Toyota": ["Accord", "Civic", "Odyssey"],
    "Ford": ["Accord", "Civic", "Odyssey"],
    "Nissan": ["Accord", "Civic", "Odyssey"],
    "Chevrolet": ["Accord", "Civic", "Odyssey"]
  }
};

window.onload = function () {
  var makeSel = document.getElementById("make");
  var yearSel = document.getElementById("year");
  var modelSel = document.getElementById("model");

  for (var x in makeObject) {
    makeSel.options[makeSel.options.length] = new Option(x, x);
  }

  makeSel.onchange = function () {
    yearSel.length = 1;
    modelSel.length = 1;

    for (var y in makeObject[this.value]) {
      yearSel.options[yearSel.options.length] = new Option(y, y);
    }
  };

  yearSel.onchange = function () {
    modelSel.length = 1;
    var z = makeObject[makeObject.value][this.value];

    for (var i = 0; i < z.length; i++) {
      modelSel.options[modelSel.options.length] = new Option(z[i], z[i]);
    }
  };
};
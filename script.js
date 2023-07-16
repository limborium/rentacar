var makeObject = {
    "Honda": {
        "Accord": ["2013", "2018", "2021"],
        "Civic": ["2015", "2019", "2021"],
        "Odyssey": ["2018", "2020", "2022"],
    },
    "Ford": {
        "Edge": ["2018", "2020", "2022"],
        "Focus": ["2018", "2020", "2022"],
        "Explorer": ["2018", "2020", "2022"],
        "Mustang": ["2018", "2020", "2022"],
        "Chevrolet": ["2018", "2020", "2022"],
    }
}

window.onload = function() {
    var makeSel = document.getElementById("make");
    var modelSel = document.getElementById("model");
    var yearSel = document.getElementById("year");

    for (var in makeObject) {
        makeSel.options[makeSel.options.length] = new Option(x, x);
    }

    makeSel.onchange = function() {
        modelSel.length = 1;
        yearSel.length = 1;

        var selectedMake = this.value;
        var models = makeObject[selectedMake];

        for (var model in models) {
            modelSel.options[modelSel.options.length] = new Option(model, model);
        }
    };

    modelSel.onchange = function() {
        yearSel.length = 1;

        var selectedMake = makeSel.value;
        var selectedModel = this.value;
        var years = makeObject[selectedMake][selectedModel];

        for (var i = 0; i < years.length; i++) {
            yearSel.options[yearSel.options.length] = new Option(years[i], years[i]);
        }
    };
};







//         for (var y in makeObject[this.value]) {
//             modelSel.options[modelSel.options.length] = new Option(y, y);
//         }
//     }

//     modelSel.onchange = function() {
//         yearSel.length = 1;
//         var z = makeObject[makeObject.value][this.value];
//         for (var i = 0; i < z.length; i++) {
//             yearSel.options[yearSel.options.length] = new Option(z[i], z[i]);
//         }
//     }
// }
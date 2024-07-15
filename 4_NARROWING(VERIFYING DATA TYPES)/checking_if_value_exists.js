"use strict";
// 2 - Checking if value exists
function operations(arr, operation) {
    if (operation) {
        if (operation === "add") {
            const add = arr.reduce((i, total) => i + total);
            console.log(add);
        }
        else if (operation === "mult") {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
    }
    else {
        console.log("Please, define an operation!");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "add");
operations([50, 2], "mult");

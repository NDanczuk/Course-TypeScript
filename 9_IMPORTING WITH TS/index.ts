// 1 - file import

import importGreet from "./file_import";

importGreet();



// 2 - var import

import {z} from "./var_import";

console.log(z);



// 3 - multiple imports

import {a, b, c, myFunction} from "./multi_import";

console.log(a);
console.log(b);
console.log(c);
myFunction();



// 4 - import alias

import {someName as name} from "./import_alias";

console.log(name);



// 5 - import all

import * as myNumbers from "./importing_all";

console.log(myNumbers);

myNumbers.showNumber();



// 6 - importing types

import {Human} from "./importing_types";

class User implements Human {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

const chico = new User("Chico Palito", 9);

console.log(chico)
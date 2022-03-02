"use strict";
let number = [1, 2, 4, 5];
let string = [];
string.push("hello");
console.log(string);
let mixed = [];
mixed.push('hello');
mixed.push(2);
mixed.push(true);
console.log(mixed);
let ustring;
ustring = "Word";
console.log(string);
ustring = 2;
console.log(ustring);
//object type in var
let objectName;
objectName = {
    name: "myName",
    age: 12,
    color: "red"
};
console.log(objectName);
const add = (a, b, c) => {
    console.log(a + b);
};
add(1, 6);
let Greet = (x, y) => {
    console.log(`${x} says ${y}`);
};
Greet("helloo", "friend");
let calc = (numONe, numTwo, action) => {
    if (action === "add") {
        return numONe + numTwo;
    }
};
console.log(calc(3, 8, "add"));
//

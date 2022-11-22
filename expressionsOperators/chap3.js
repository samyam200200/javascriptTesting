//Strict mode 
"use strict";
console.log("Hello World");

//primary expressions
1.23 //number
"hello" //string
///pattern/ //regular expression

//reserved words
// true
// false
// null
// this

//also references variable, constant, or property of the global object
//i
//sum
//undefined

let matrix = [[1,2,3],[4,5,6],[7,8,9]]; // comma is used to sperate elements in an array
//undefined elements can be added to an array
let sparseArray = [1,,3]; // [1,undefined,3]

//Object have properties and values
let p={x:1.0,y:1.0}; //object literal
let q={};//empty object with no properties
let r=new Object(); //object constructor
q.x=2.3,
q.y=-1.2; //add properties to an object

let rectangle = {
    upperLeft: {x:2,y:2},
    lowerRight: {x:4,y:5}
};

//Function definition expressions
let square = function(x) {return x*x};


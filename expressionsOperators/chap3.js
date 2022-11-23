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
// let square = function(x) {return x*x};

let o={x:1, y:{z:3}};
let a=[o,4,[5,6]];
console.log(o.x)
console.log(o.y.z)

a={b:null};

//Conditional Property Access
//console.log(a.b.c) - this gives Type error as null value do not have properties
console.log(a.b?.c.d) //this does not give error as ?. is used to check if the value is null or not
//this is undefined
//this is known as optional chaining or short circuiting
a={b:{}};
//console.log(a.b?.c.d) //this gives typeError for d as c is not defined
console.log(a.b?.c?.d) //undefined

//This is also possible using ?.[] 
//a?.[b][c] is same as a?.[b]?.[c] - if the value of a is null or undefined then entire expression evaluates to undefined
//new only works with constructor

a;
let index=0;
try{
    a[index++]; //throws typeError
} catch(e){
    console.log(index) //1 as index is incremented before the error is thrown
}
a?.[index++]; //undefined as index is not incremented
console.log(index) //1 as index is not incremented
a[index++]//TypeError as cant index undefined

//Invocation Expression
//f(x,y) - function call expression and x,y is argument list/ expression 
//Math.max(x,y,z) - Math.max function call  and x,y,z is argument list/ expression
//a.sort() //a.sort is function there are no arguments

//Function evaluated first and then the result is passed as argument
//Conditional invocation
// function square(x, log){
//     if (log){
//         log(x)
//     }
//     return x*x
// }
//It is same as 
function square(x, log){
    log?.(x);//call the fucntion if there is one checks if the lefthand is nul or undefined
    return x*x;
}

//let f=null, x=0;
//try{
    //f(x++) //throws TypeError because f is null
//} catch (e){
//   x //1 as x is incremented before the error is thrown
//}
let x=1;
console.log(x) //1 as x is incremented before the error is thrown
f?.(x++) //undefined as x is not incremented
console.log(x) //1 as x is not incremented

//o.m() Regular property access
//o?.m() Conditional property access, regular invocation - o is null then undefined is returned
//o.m?.() Conditional invocation, regular property access - o must not be null or undefined

//Object Creation Expression
//creates a object amd invokes a function(called as constructor) on it
new Object();
//new Point(2,3)
//Paranthesis can be omitted if there are no arguments
new Object;
new Date;

//operator
//++ - increment pre or post
//-- - decrement pre or post
//- - unary negation
//+ - unary plus and converts to number
//! - logical not
//~ - bitwise not
//typeof - returns the type of the operand
//delete - deletes a property from an object
//void - evaluates an expression and returns undefined
//** - exponentiation
//*, /, % - multiplication, division, remainder
//+ concatination
//<<, >>, >>> - bitwise shift
//instanceof - checks if an object is an instance of a constructor
//in - checks if a property is in an object
//== non-strict equality
//=== strict equality
//!= non-strict inequality
//!== strict inequality
//& - bitwise and
//^ - bitwise xor
//| - bitwise or
//&& - logical and
//|| - logical or
//? : - conditional
//=, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |= - assignment
//?? - nullish coalescing
//binary operators - takes two expressions
//unary operators - takes one expression
//ternary operators - takes three expressions

//Operand and Result type
//Invocation expressions have higher precedence than property access
//typeof is highest precedence

//Operator Associativity
//left to right or right to left
//left to right - +, -, *, /, %, <<, >>, >>>, <, <=, >, >=, instanceof, in, ==, !=, ===, !==, &, ^, |, &&, ||
//right to left - =, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=, **, ?:

//Order of evaluation
//Operator Precedence + Operator Associativity 

//1+2 //3
//1+2*3 //7
//"1"+"2"//12
//1+2+"3"//33
//conversion - Date is usinf toString method and others using valueOf method
console.log(1+{}) //1[object Object]
2+null //2 - null converted to 0
2+undefined //NaN - undefined converted to NaN

//Unary operator
//+ - converts to number
console.log(+true) //1
console.log(+false) //0
console.log(+null) //0
console.log(+undefined) //NaN
console.log(+{}) //NaN

//- - converts to number and negates it
console.log(-true) //-1
console.log(-false) //0
console.log(-null) //0
console.log(-undefined) //NaN

//Increment
//++ - pre increment and post increment
let i=1;
let j=++i; //i=2, j=2
console.log(i, j)
i=1;
j=i++; //i=2, j=1
console.log(i, j)

//Relational expressions
//<, <=, >, >=
//returns boolean
//null and undefined are converted to number
//string is converted to number
//object is converted to primitive value
//NaN is not equal to anything including NaN
//Equality and Inequality operators
//Strict === and !==
//Non-strict == and !=
//Strict equality
//Different types are always unequal
//null and undefined are not equal to each other
//isNaN is used to check if the value is NaN
//no unicode normalization

//euqality with type conversion
//null and undefined are equal to each other
//string and number are converted to number and checked for equality "0"==0 //true
//"1"==true - true "1" is converted to number using valueOf method

//Comparison operators
//Type conversion is done before comparison
//"0"<3 //true

//instanceof operator
let d=new Date();
console.log(d instanceof Date) //true
console.log(d instanceof Object) //true
console.log(d instanceof Number) //false
a=[1,2,3];
console.log(a instanceof Array) //true
console.log(a instanceof Object) //true
console.log(a instanceof RegExp) //false

//Falsey - false, null, undefined, 0, NaN, ""
//Truthy - everything else
p=null;
p && p.x //null
//This is because it evaluates the value on left and if it is falsey then it returns the value on left
//if it is truthy then it returns the value on right
o={x:1};
o && o.x //1

//if (a===b) stop();
//is same as
//(a===b) && stop();

//logical or operator
//value on left is truthy then it returns the value on left
//value on left is falsey then it returns the value on right
let maxWidth=null;
let preferences=null;
let max = maxWidth || preferences?.maxWidth || 100;
console.log(max)

//can be used for default values
function copy(o, p){
    p = p || {}; //if no object is passed then create a new object
    console.log(p)
}
copy({}, null)

//logical not
//unary operator
//converts to boolean and negates it
//Demorgan's Law
//! converts the expression to boolean and negates it - true becomes false and false becomes true
let b=0;
console.log(!(a&&b) === !a || !b)
console.log(!(a||b) === !a && !b)

//Assignment operators
i=0;
o.x=1;
//assign and test 
console.log((a=b)===0) //true
let k;
i=j=k=0; //multiple assignment at once

//Assignment with operations
//+=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=
//a op= b is same as a = a op b
i=1
let data=[1,2,3]
data[i++] +=2 //data[1]=3
console.log(data) //[1,4,3]
console.log(i) //2 - assignment is done after the expression is evaluated

console.log(eval("2+2")) //4
//eval() returns the same value if not string
//is string is not valid javascript then it throws syntax error
//eval("x=1") changes the value of local variable
//eval("var y=3") declares a local variable
//eval("function f(){return x+1}"); declares a local function
//indirect eval - makes the variable global
const geval = eval;
x="global"; 
let y="global";
function f(){
    let x="local";
    eval("x+='changed';"); //direct eval sets the local variable
    return x;
}
function g(){
    let y="local";
    geval("y+='changed';"); //indirect eval sets the global variable
    return y;
}
console.log(f(), x) //localchanged global
console.log(g(), y) //local globalchanged
//strict mode - local eval with private variable environment 
//eval is reserved word
//cannot define new variable or function in local scope

//Conditional ternary operator
//condition ? expr1 : expr2
x > 0 ? x : -x //absolute value
//if condition is true then it returns expr1 else it returns expr2
let username;
let greeting = "hello" + (username ? username : "there")
//if username is null or undefined then it returns "there"
console.log(greeting) //hellothere

//first defined operator ??
//short circuiting
//a??b //if a is not null or undefined then it returns a else it returns b
//same as 
//(a!==null && a!==undefined) ? a : b
//?? alternative to || operator - || returns the first truthy value while ?? returns the first defined value
max=maxWidth || preferences?.maxWidth || 100;

max = maxWidth ?? preferences?.maxWidth ?? 100;
//if the first operand is falsy but defined it returns the first operand
let options = {timeout: 0, title: "", verbose: false, n: null};
console.log(options.timeout ?? 1000);
console.log(options.title ?? "Untitled");
console.log(options.verbose ?? true);
console.log(options.quiet ?? true);//true - quiet is not defined
console.log(options.n ?? 0);//0 is falsy but defined

// (a??b)||c //??first, then ||
// a??(b||c) //|| first, then ??
// a??b||c //Syntax error

//typeof operator
//x //typeof x
//undefined //"undefined"
//null //"object"
//boolean //"boolean"
//number or NaN //"number"
//anyBigInt //"bigint"
//string //"string"
//symbol //"symbol"
//function //"function"
//any other object //"object"
let value="abc";
let abc=(typeof value==="string") ? "'" + value + "'" : value.toString();
console.log(abc) //'abc'

//delete operator - unary operator
o = {x:1, y:2};
delete o.x;
"x" in o //false

a=[1,2,3];
console.log(a[2])
delete a[2];
console.log(2 in a) //false  checks for array index
console.log(a) //[1,2,empty] - 3

//property deleted - property ceases to exist
//non existing property - returns undefined 

o={x:1, y:2};
delete o.x; //returns true
console.log(delete o.x); //property does not exist returns undefined
console.log(delete o.x); //delete a nonexistent property returns true
console.log(delete 1); //returns true
//delete o;//type error in strict mode


//await - expects promise object - only within functions with async keyword

//void operator - unary operator
//define function and returns nothing
let counter = 0;
const increment = () => void counter++;
increment(); //undefined
console.log(counter) //0/

//comma operator - binary operator
//evaluates each operand from left to right and returns the value of the last operand
console.log(i=0, j=1, k=2);


